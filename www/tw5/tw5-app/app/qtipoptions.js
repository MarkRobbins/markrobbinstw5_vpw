define(['timebar'],function(Timebar){
  "use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  function unused(dummy){return dummy;}
  function __lib(dummy){return dummy;}
  function $tw(){return window.$tw;}
  unused(__lib);
  var qtipOptions={
    _name:'_qtipOptions'
    ,shows:{
      tiddler:{
        effect:function(offset){
          unused(offset);
          $(this).fadeIn(500);
        }
      }
    }
    ,positions:{
      tidTitles:{
        my:'top left'
        ,at:'bottom left'
      }
    }
    ,hides:{
      tiddler:{
        event:'unfocus'
        ,effect:function(offset){
          unused(offset);
          $(this).fadeOut(1500);
        }
      }
    }
    ,styles:{
      darkShadowRounded:{
        classes: 'qtip-dark qtip-shadow qtip-rounded'
      }
      ,tiddler:{
        classes: 'qtip-tiddler qtip-shadow'
      }
    }
    ,contents:{
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
          var tid=$tw().wiki.getTiddler(tit);
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
              var iconTiddler=$tw().wiki.getTiddler(ico);
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
          if($tw()===undefined){
            console.warn('tit',tit);
            console.warn('window.$tw',window.$tw);
            return '$tw===undefined ';
          }
          var tid=$tw().wiki.getTiddler(tit);
          if (tid===undefined) {
            return 'error accessing tiddler:"'+tit+'"';
          }
          //var s='';
          var sa=[];
          var fields=tid.fields;
          function div_class(n){
            if(fields[n]!==undefined){
              sa.push('<div class="subhead">'+fields[n]+'</div>');
            }
          }
          var div_classes=['subhead','desc','description'];
          $.map(div_classes,function(v,i){
            unused(i);
            div_class(v);
          });
          var rows=[];
          function row(i,v){
            var sa=[];
            sa.push('<tr>');
            sa.push('<td>'+i+'</td>');
            if (!v) {
              sa.push('<td>'+fields[i].toString()+'</td>');
            }else{
              sa.push('<td>'+v+'</td>');
            }
            sa.push('</tr>');
            return sa.join('');
          }
          function basic_row(n){
            if(fields[n]!==undefined){
              console.info('basic_row',n,typeof fields[n]);
              rows.push(row(n));
              if(fields[n] instanceof Date){
                var tb=new Timebar(fields[n],new Date(),{width:300});
                rows.push(row(n,tb.html()));//_timeBarHtml:function(d1,d2,widthInt,heightInt,pal)
              }
            }
          }
          var basic_rows=['title','caption','subhead','desc','description'
            ,'creator','created'
            ,'modifier','modified'
          ];
          $.map(basic_rows,function(v,i){
            console.warn('basic_rows',i,v);
             basic_row(v);
          });
          var discludes=['caption','title','text','subhead','desc','description','tags','modifier','modified','creator','created','tmap.id','tmap.edges'];//.split(',');
          $.map(fields,function(v,i){
            if (discludes.indexOf(i)===-1) {
              rows.push(row(i));
            }
          });
          if (rows.length!==0) {
            sa.push('<table>');
            sa.push('<tr><th>Field</th><th>Value</th></tr>');
            sa.push(rows.join(''));
            sa.push('</table>');
          }
          return sa.join('');
        }
      }
    }
    ,events:{
      showHide:{
        show:function(event,api){
          api._showing=true;
        }
        ,hide:function(event,api){
          api._showing=false;
        }
      }
    }
  };
  __lib(qtipOptions);
  return qtipOptions;
});
