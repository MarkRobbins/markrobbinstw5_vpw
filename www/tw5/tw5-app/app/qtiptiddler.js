define(['timebar'],function(Timebar){
  "use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  function unused(dummy){return dummy;}
  function __lib(dummy){return dummy;}
  function $tw(){return window.$tw;}
  unused(__lib);
  function QtipTiddler(title){
    this.title=title;
    this.tid=$tw().wiki.getTiddler(this.title);
    this._firstRows=['title','caption','subhead','desc','description'
        ,'creator','created'
        ,'modifier','modified'
      ];
    this._subheadings=['subhead','desc','description'];
    this._fieldDivClassMap={};
    //this._maskedFields=['text'];
    this._maskedFields=[];
    this.sections={title:['iconTitleHtml'],text:['subheadingsHtml','fieldsTableHtml']};
    this._renderFields=['subhead','desc','project-of-list','caption'];
    this._fieldFormatter={
      filter:function(s){
        var s1=s;
        s=s.replace(/\]/g,']'+"\n");
        s=s.substr(0,s.length-1);
        return '<pre class="filter"><code class="clipper" data-clipboard-text="'+s1+'">'+s+'</code></pre>';
      }
      ,tags:function(a){
        console.log('AAA',typeof a);
        var x,l=a.length;
        var s='';
        for (x=0;x<l;x=x+1) {
          var qtt=new QtipTiddler(a[x]);
          if (s==='') {
            s+=qtt._linkA();
          }else{
            s+=', '+qtt._linkA();
          }
        }
        return s;
      }
      ,text:function(s){
        //return '<pre class="text"><code class="clipper" data-clipboard-text="'+s+'">'+s+'</code></pre>';
        var s1=s.escapeHTML();
        var s2=s1.replace(/\n/g,'&#10;');
        //class=text/css hljs css
        //console.log('s1',s1);
        return '<pre class="text"><code class="clipper" data-clipboard-text="'+s2+'">'+s1+'</code></pre>';
      }
    }
    this.doTitleLink=false;
  }
  //noinspection FunctionWithInconsistentReturnsJS
  QtipTiddler.prototype={
    _titleClass:'qtip-tiddler-title'
    ,_titleIconClass:'qtip-tiddler-title-icon'
    ,_iconWH:'24px'
    ,_baseIconUrl:'images/images-tw5/images-tw5-mcr/images-tw5-mcr-icons/'
    ,_render:function(s){
      var r=$tw().wiki.renderText('text/html','text/vnd.tiddlywiki',s);
      //strip <p>
      if (r===undefined) {
        console.error('bad value');
        return;
      }
      if (r.substr(0,3)==='<p>'&&r.substr(r.length-4,4)==='</p>') {
        r=r.substr(3,r.length-7);
      }
      return r;
    }
    ,_formatField:function(n,v){
      if (this._renderFields.indexOf(n)!==-1) {
        return this._render(v);
      }
      if (typeof this._fieldFormatter[n]==='function') {
        return this._fieldFormatter[n](v);
      }
      return v;
    }
    ,_linkClasses:function(){
      var s='tc-tiddlylink';
      if (this.tid) {
        s+=' tc-tiddlylink-resolves';
      }else{
        s+=' tc-tiddlylink-missing';
      }
      return s;
    }
    ,_linkUrl:function(){
      var s='#';
      if (this.tid) {
        s+=encodeURIComponent(this.tid.fields.title);
      }else{
        s+=encodeURIComponent(this.title);
      }
      return s;
    }
    ,_fieldVal:function(n){
      if (!this.tid) {
        return;
      }
      if (!this.tid.fields) {
        return;
      }
      return this.tid.fields[n];
    }
    ,_captionTitle:function(){
      if (!this.tid) {
        return this.title;
      }
      if (this._fieldVal('caption')) {
        return this._render(this._fieldVal('caption'));
      }
      return this.title;
    }
    ,_linkA:function(contents){
      if (contents===undefined) {
        contents=this._render(this._captionTitle());
      }
      if (contents===null) {
        contents=this.title;
      }
      var s='';
      s+='<a';
      s+=' class="';
      s+=this._linkClasses();
      s+='"';
      s+=' href="';
      s+=this._linkUrl();
      s+='"';
      s+='>';
      s+=contents;
      s+='</a>';
      return s;
    }
    ,titleHtml:function(){
      var link=this.doTitleLink;
      var s='';
      s+='<div class="'+this._titleClass+'">';
      if (link) {
        s+=this._linkA();
      }else{
        s+=this._captionTitle();
      }
      s+='</div>';
      return s;
    }
    ,_iconTiddler:function(){
      var iconField=this._fieldVal('icon');
      if (iconField) {
        return $tw().wiki.getTiddler(iconField);
      }
    }
    ,_iconTiddlerData:function(){
      var iconTiddler=this._iconTiddler();
      if (iconTiddler===undefined) {
        return;
      }
      if (iconTiddler.fields&&iconTiddler.fields.type) {
        return 'data:'+iconTiddler.fields.type+';base64,'+iconTiddler.fields.text;
      }
    }
    ,_iconDiv:function(icoData){
      var s='';
      var wh=this._iconWH;
      s+='<div style="';
      //s+='position: absolute;';
      //s+='margin-left: -69px;';
      //s+='margin-top: -48px;';
      s+='width:'+wh+';';
      s+='height:'+wh+';';
      s+='background-image:url('+"'"+icoData+"'"+');';
      s+='background-repeat:no-repeat;';
      s+='background-size:contain;';
      s+='display:inline-block;';
      s+='"';
      s+=' class="'+this._titleIconClass+'"';
      s+='/>';
      return s;
    }
    ,iconHtml:function(){
      var s='';
      var icoData;
      var iconField=this._fieldVal('icon');
      if (iconField) {
        if (iconField.substr(0,5)==='data:') {// non-event
          icoData=iconField;
        }else{
          icoData=this._iconTiddlerData();
        }
      }else{
        var iconWeb=this._fieldVal('icon-web');
        if (iconWeb!==undefined) {
          icoData=this._baseIconUrl+iconWeb;
        }
      }
      if (icoData) {
        s+=this._iconDiv(icoData);
      }
      return s;
    }
    ,iconTitleHtml:function(){
      var s='';
      s+=this.iconHtml();
      s+=this.titleHtml();
      return s;
    }
    ,_fieldDivClasses:function(n,c,m){
      if (m === undefined) {m = {};}
      var cl=m[n]===undefined?n:m[n];
      if (c!==undefined) {
        cl=cl+' '+c;
      }
      return cl;
    }
    ,_fieldDivClassed:function(n,c,m){
      var s;
      var fieldVal=this._fieldVal(n);
      if (fieldVal) {
        var cl=this._fieldDivClasses(n,c,m);
        s='<div';
        s+=' class="';
        s+=cl;
        s+='"';
        s+='>';
        s+=this._formatField(n,fieldVal);
        s+='</div>';
      }
      return s;
    }
    ,subheadingsHtml:function(){
      //var s='';
      var sa=[];
      var that=this;
      function field_item(n){
        var fieldVal=that._fieldVal(n);
        if(fieldVal!==undefined){
          var s=that._fieldDivClassed(n,'subheading',that._fieldDivClassMap);
          sa.push(s);
        }
      }
      $.map(this._subheadings,function(v,i){
        unused(i);
        field_item(v);
      });
      return sa.join('');
    }
    ,_fieldRow:function(i,v){
      var s='';
      var field_val=this._fieldVal(i);
      if (field_val===undefined) {
        return s;
      }
      s='<tr>';
      s+='<td>'+i+'</td>';
      if (!v) {
        s+='<td>'+this._formatField(i,field_val)+'</td>';
      }else{
        s+='<td>'+v+'</td>';
      }
      s+='</tr>';
      return s;
    }
    ,_fieldRowComplex:function(i){
      var s='';
      var field_val=this._fieldVal(i);
      if (field_val===undefined) {
        return s;
      }
      s+=this._fieldRow(i);
      if (field_val instanceof Date) {
        var tb=new Timebar(field_val,new Date(),{width:300});
        s+=this._fieldRow(i,tb.html());
      }
      return s;
    }
    ,_fieldsTableFirstRows:function(){
      var rows=[];
      var that=this;
      $.map(this._firstRows,function(v,i){
        unused(i);
        //console.log('firstrows',v);
        if (that._maskedFields.indexOf(v)===-1) {
          var s=that._fieldRowComplex(v);
          if (s!=='') {
            rows.push(s);
          }
        }
      });
      return rows;
    }
    ,_fieldsTableRestRows:function(){
      var rows=[];
      var fields=this.tid.fields;
      var that=this;
      $.map(fields,function(v,i){
        unused(i);
        //console.log('restrows',i);
        if (that._maskedFields.indexOf(i)===-1) {
          if (that._firstRows.indexOf(i)===-1) {
            var s=that._fieldRowComplex(i);
            if (s!=='') {
              rows.push(s);
            }
          }
        }
      });
      return rows;
    }
    ,fieldsTableHtml:function(){
      var first_rows=this._fieldsTableFirstRows();
      var rest_rows=this._fieldsTableRestRows();
      var rows=first_rows.concat(rest_rows);
      var sa=[];
      if (rows.length!==0) {
        sa.push('<table>');
        sa.push('<tr><th>Field</th><th>Value</th></tr>');
        sa.push(rows.join(''));
        sa.push('</table>');
        return sa.join('');
      }
      return '';
    }
    ,html:function(){
      var s='';
      var that=this;
      $.map(this.sections,function(v,i){
        unused(i);
        s+=that[v]();
      });
      return s;
    }
    ,theTitle:function(){
      var s='';
      var that=this;
      $.map(this.sections.title,function(v,i){
        unused(i);
        s+=that[v]();
      });
      return s;
    }
    ,theText:function(){
      var s='';
      var that=this;
      $.map(this.sections.text,function(v,i){
        unused(i);
        s+=that[v]();
      });
      return s;
    }
  };
  QtipTiddler.make=function(type,title,that){
    unused(that);
    var qtt=new QtipTiddler(title);
    if(type==='tiddler'){
      return qtt;
    }
    if(type==='sidebarFindVerticalTabs'){
      qtt.doTitleLink=true;
      return qtt;
    }
    return qtt;
  };
  return QtipTiddler;
});
