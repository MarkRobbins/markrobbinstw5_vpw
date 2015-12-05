/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/28/15
 * Time: 1:45 AM
 * To change this template use File | Settings | File Templates.
 */

define(['modulebase'],function(moduleBase){
  "use strict";
  function unused(dummy){return dummy;}
  function __lib(dummy){return dummy;}
  //noinspection JSUnresolvedVariable
  var $=window.$;
  var $tw=window.$tw;
  var qtips={
    _name:'qtips'
    ,_subs:{
      domNodeInserted:function(d,o){
        unused(o);
        var t=d.event.target;
       if(t.nodeType===1){
          var dp=$(t).getDomPath();
          if (dp.indexOf('#qtip-')===-1) {
            qtips.refreshDebounce();
          }else{
            console.log('path:',$(t).getDomPath());
          }
          //qtips.refreshDebounce();
        }
        //console.warn('domNodeInserted',d);
      }
    }
    ,_ddiffo:function(d1,d2){
      var t1=d2.valueOf() - d1.valueOf();
      //console.log(t1);
      var os={
      };
      var nYears= parseInt(t1/(1000*60*60*24*365.25));
      t1-=nYears*(1000*60*60*24*365.25);
      var s='';
      if (nYears!==0) {
        s+=nYears+'y';
      }
      os['y']=''+nYears+' years';
      var nMonths=parseInt(t1/(1000*60*60*24)/(365.25/12));
      //var nMonths=d2.getUTCMonth() - d1.getUTCMonth();
      //nMonths=nMonths>0?nMonths:nMonths+12;
      if (nMonths!==0) {
        s+=' '+nMonths+'m';
      }
      os['m']=''+nMonths+' months';
      t1-=nMonths*1000*60*60*24*(365.25/12);
      var nWeeks=parseInt(t1/(1000*60*60*24*7));
      if (nWeeks!==0) {
        s+=' '+nWeeks+'w';
      }
      os['w']=''+nWeeks+' weeks';
      t1-=nWeeks*(1000*60*60*24*7);
      var nDays=parseInt(t1/(1000*60*60*24));
      if (nDays!==0) {
        s+=' '+nDays+'d';
      }
      os['d']=''+nDays+' days';
      t1-=nDays*(1000*60*60*24);
      //var nHours=d2.getHours()-d1.getHours();
      var nHours=parseInt(t1/(1000*60*60));
      if (nHours!==0) {
        s+=' '+nHours+'h';
      }
      os['h']=''+nHours+' hours';
      t1-=nHours*(1000*60*60);
      //var nMinutes=d2.getMinutes()-d1.getMinutes();
      var nMinutes=parseInt(t1/(1000*60));
      if (nMinutes!==0) {
        s+=' '+nMinutes+'n';
      }
      os['n']=''+nMinutes+' minutes';
      var nSeconds=d2.getSeconds()-d1.getSeconds();
      //s+=' '+nSeconds+'secs';
      var nMilliseconds=d2.getMilliseconds()-d1.getMilliseconds();
      //s+=' '+nMilliseconds+'ms';
      return {y:nYears,m:nMonths,w:nWeeks,d:nDays,h:nHours,n:nMinutes,s:nSeconds,ss:s,os:os};
    }
    ,_timeBarHtml:function(d1,d2,widthInt,heightInt,pal){
      widthInt=widthInt||200;
      heightInt=heightInt||10;
      var dd=qtips._ddiffo(d1,d2);
      var c0={
         y:{c0:'#aa0000',c:'#ff0000',f:2}
        ,m:{c0:'#aaaa00',c:'#ffff00',f:4}
        ,w:{c0:'#aa44aa',c:'#ff88ff',f:4}
        ,d:{c0:'#00aa00',c:'#00ff00',f:2}
        ,h:{c0:'#00aaaa',c:'#00ffff',f:1}
        ,n:{c0:'#0000aa',c:'#0000ff',f:1}
      };
      var xy={
        m:'y'
        ,w:'m'
        ,d:'w'
        ,h:'d'
        ,n:'h'
      }
      var zi={
        y:10
        ,m:9
        ,w:8
        ,d:7
        ,h:6
        ,n:5
      }
      var c=pal||c0;
      var delt=widthInt/200;
      var br0=2;
      var br=parseInt(''+(heightInt/4));
      if (br<br0) {br=br0;}
      br=br.toString()+'px';
      function stylefor(n,v){
        var s='';
        s+='height:'+heightInt+'px;';
        s+='width:'+parseInt(c[n].f*v*delt)+'px;';
        //s+='background-color:'+c[n].c+';';
        if (n==='y') {
          //s+='background:linear-gradient(to right,'+c[n].c0+','+c[n].c+');';
          s+='background:'+c[n].c0+';';
        }else{
          //s+='background:linear-gradient(to right,'+c[xy[n]].c0+' 10%,'+c[n].c+');';
          s+='background:'+c[n].c0+';';
        }
        s+='border-top-right-radius:'+br+';';
        s+='border-bottom-right-radius:'+br+';';
        s+='border-width:1px;';
        s+='border-style:solid;';
        s+='border-left-width:0px;';
        s+='border-color:'+c[n].c+';';
        s+='position:relative;';
        s+='z-index:'+zi[n];
        return s;
      }
      function divfor(n){
        var s='';
        if (dd[n]===0) {
          return '';
        }
        s='<div style="float:left;font-size:0px;'+stylefor(n,dd[n])+';margin-left:-'+br+';" class="time-bar-item time-bar-item-'+n+'"></div>';
        return s;
      }
      var s='';
      var ds='<div style="height:'+heightInt+'px;width:'+widthInt+'px;" title="'+dd.ss+'" class="time-bar">';
      s+=ds;
      s+=divfor('y');
      s+=divfor('m');
      s+=divfor('w');
      s+=divfor('d');
      s+=divfor('h');
      s+=divfor('n');
      s+='</div>';
      //console.log(s);
      return s;
    }
    ,_specs:{
      //name: selector, type, qtipObject
      //_created
      //.create()
      //.destroy()
      //.suspend()
      //.resume()
      //.refresh()
    }
    ,items:{
    }
    ,_ctorItem:function QtipItem(name,selector,type,qtipObject){
      this.name=name;
      this.selector=selector;
      this.type=type;
      this.qtipObject=qtipObject;
    }
    ,_protoItem:{
      create:function(){
        if(this._created) {return this;}
        if(qtips._specs[this.name]===undefined){
          qtips._specs[this.name]=this;
        }
        this._created=true;
        this.qtip=$(this.selector).qtip(this.qtipObject);
        var api=this.qtip.qtip('api');
        if (api) {
          api._showing=false;
        }else{
          console.warn('cannot get api for',this.name);
        }
        //this.qtip.qtip('api')._showing=false;
        if(qtips.items[this.name]!==undefined){
          qtips.items[this.name].destroy();
        }
        qtips.items[this.name]=this;
        return this;
      }
      ,destroy:function(){
        if(this._created){
          this.qtip.qtip('api').destroy();
          delete qtips.items[this.name];
        }
        delete this.qtip;
        delete qtips._specs[this.name];
        delete this._created;
        return this;
      }
      ,suspend:function(){
        __lib(this.suspend);
        if(!this._created) {return this;}
        this.qtip.qtip('api').destroy();
        delete qtips.items[this.name];
        delete this._created;
        return this;
      }
      ,resume:function(){
        __lib(this.resume);
        if(this._created) {return this;}
        return this.create();
      }
      ,refresh:function(){
        if(!this._created) {return this;}
        //console.info('api:',this.qtip.qtip('api'));
        var api=this.qtip.qtip('api');
        if (!api) {
          console.warn('cannot get api for',this.name,'trying create');
          this.create();
        }else{
          if(!api._showing) {
            this.destroy();
            //noinspection JSCheckFunctionSignatures
            this.create();
          }
        }
        return this;
      }
    }
    ,_newItem:function(name,selector,type,qtipObject){
      if(qtips._specs[name]!==undefined){
        delete qtips._specs[name];
      }
      //console.error('this._name::',this._name,this);
      var o=new this._ctorItem(name,selector,type,qtipObject);
      //console.info('o.create:',o.create);
      qtips._specs[name]=o;
      return o;
    }
    ,_newbs:function(){
      var o={};
      var ops=this._qtipOptions;
      function opsFor(k,n){
        return $.extend(true,{},ops[k][n]);
      }
      o.content=opsFor('_contents','tiddler');
      o.style=opsFor('_styles','tiddler');
      o.events=opsFor('_events','showHide');
      o.hide=opsFor('_hides','tiddler');
      o.show=opsFor('_shows','tiddler');
      o.position=opsFor('_positions','tidTitles');
      //noinspection JSCheckFunctionSignatures
      this.add('tidTitles','.tc-story-river .tc-tiddler-view-frame .tc-tiddler-title .tc-title','std',o).create();
      o={};
      o.style=opsFor('_styles','darkShadowRounded');

      this.add('tidTitlesQtipTimeBar','.qtip .time-bar','std',o).create();
    }
    ,_qtipOptions:{
      _name:'_qtipOptions'
      ,_shows:{
        tiddler:{
          effect:function(offset){
            $(this).fadeIn(500);
          }
        }
      }
      ,_positions:{
        tidTitles:{
          my:'top left'
          ,at:'bottom left'
        }
      }
      ,_hides:{
        tiddler:{
          event:'unfocus'
          ,effect:function(offset){
            $(this).fadeOut(1500);
          }
        }
      }
      ,_styles:{
        darkShadowRounded:{
          classes: 'qtip-dark qtip-shadow qtip-rounded'
        }
        ,tiddler:{
          classes: 'qtip-tiddler qtip-shadow'
        }
      }
      ,_contents:{
        textEventTargetText:{
          text:function(e){
            return $(e.target).text();
          }
        }
        ,tiddler:{
          title:function(e){
            var tit=$(e.target).text();
            tit=$.trim(tit);
            // get icon
            // field:icon->icontid
            // icontid:type:image/xxx
            // icontid:text:data
            function title(tit){
              var s='';
              s+='<div class="qtip-tiddler-title">';
              s+=tit;
              s+='</div>';
              return s;
            }
            var s='';
            var tid=$tw.wiki.getTiddler(tit);
            if (!tid) {
              return title(tit);
            }
            var fields=tid.fields;
            var icoData;
            if (fields.icon) {
              var ico=fields.icon;
              if (ico.substr(0,5)==='data:') {
                icoData=ico;
              }else{
                var iconTiddler=$tw.wiki.getTiddler(ico);
                if (iconTiddler) {
                  if (iconTiddler.fields&&iconTiddler.fields.type) {
                    // data:image/png;base64,
                    icoData='data:'+iconTiddler.fields.type+';base64,'+iconTiddler.fields.text;
                  }
                }
              }
            }else if(fields['icon-web']){
              icoData='http://mrobbinsassoc.com/markrobbins-tiddlyspot/icons/'+fields['icon-web'];
            }
            if (icoData) {
              s+='<div style="';
              //s+='position: absolute;';
              //s+='margin-left: -69px;';
              //s+='margin-top: -48px;';
              s+='width:24px;';
              s+='height:24px;';
              s+='background-image:url('+"'"+icoData+"'"+');';
              s+='background-repeat:no-repeat;';
              s+='background-size:contain;';
              s+='display:inline-block;';
              s+='"';
              s+=' class="qtip-tiddler-title-icon"';
              s+='/>';
            }
            s+=title(tit);
            return s;
          }
          ,text:function(e){
            var tit=$(e.target).text();
            tit=$.trim(tit);
            //console.warn('tit',tit);
            var tid=$tw.wiki.getTiddler(tit);
            if (tid===undefined) {
              return 'error accessing tiddler:"'+tit+'"';
            }
            //type:image/png
            //text:data
            //console.warn('tid',tid);
            //return 'text';
            var s='';
            var fields=tid.fields;
            //console.warn('tid',tid);
            //console.warn('fields',fields);
            //return 'text';
            if (fields.subhead) {
              s+='<div class="subhead">'+fields.subhead+'</div>';
            }
            if (fields.desc) {
              s+='<div class="desc">'+fields.desc+'</div>';
            }
            if (fields.description) {
              s+='<div class="description">'+fields.description+'</div>';
            }
            var rows='';
            function row(i,v){
              var s='';
              s+='<tr>';
              s+='<td>'+i+'</td>';
              if (!v) {
                s+='<td>'+fields[i].toString()+'</td>';
              }else{
                s+='<td>'+v+'</td>';
              }
              s+='</tr>';
              return s;
            }
            if (fields.title) {
              rows+=row('title');
            }
            if (fields.caption) {
              rows+=row('caption');
            }
            if (fields.subhead) {
              rows+=row('subhead');
            }
            if (fields.desc) {
              rows+=row('desc');
            }
            if (fields.description) {
              rows+=row('description');
            }
            if (fields.creator) {
              rows+=row('creator');
            }
            if (fields.created) {
              rows+=row('created');
              rows+=row('created',qtips._timeBarHtml(fields.created,new Date(),300));//_timeBarHtml:function(d1,d2,widthInt,heightInt,pal)
            }
            if (fields.modifier) {
              rows+=row('modifier');
            }
            if (fields.modified) {
              rows+=row('modified');
              rows+=row('modified',qtips._timeBarHtml(fields.modified,new Date(),300));//_timeBarHtml:function(d1,d2,widthInt,heightInt,pal)
            }
            var discludes='caption,title,text,subhead,desc,description,tags,modifier,modified,creator,created,tmap.id,tmap.edges'.split(',');
            var i;
            for (i in fields) {
              if (discludes.indexOf(i)===-1) {
                rows+=row(i);
              }
            }
            if (rows!=='') {
              s+='<table>';
              s+='<tr><th>Field</th><th>Value</th></tr>';
              s+=rows;
              s+='</table>'
            }
            return s;
          }
        }
      }
      ,_events:{
        showHide:{
          show:function(event,api){
            api._showing=true;
          }
          ,hide:function(event,api){
            api._showing=false;
          }
        }
      }
    }
    ,qtipObjects:{
      '.tc-story-river .tc-tiddler-view-frame .tc-tiddler-title .tc-title':{
        type:'std'
        ,qtipObject:{
          content:{
            text:function(e){
              return $(e.target).text();
            }
          }
          ,style:{
            classes: 'qtip-dark qtip-shadow qtip-rounded'
          }
        }
      }
    }
    ,add:function(name,selector,type,qtipObject){
      return this._newItem(name,selector,type,qtipObject);
    }
    ,refresh:function(){
      var o;
      for(o in qtips.items){
        if (qtips.items.hasOwnProperty(o)){
          var oo= qtips.items[o];
          oo.refresh();
        }
      }
    }
    ,init:function(){
      this._ctorItem.prototype=this._protoItem;
      function upd(){
        console.warn('update '+this._name);
        qtips.refresh();
      }
      qtips.refreshDebounce= U.debounce(upd,500);
      this._newbs();
      this.initPubSub();
    }
  };
  moduleBase.seed(qtips)
  return qtips;
});

