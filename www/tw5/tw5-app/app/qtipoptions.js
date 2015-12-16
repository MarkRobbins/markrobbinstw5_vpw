define(['qtiptiddler'],function(QtipTiddler){
  "use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  function unused(dummy){return dummy;}
  function __lib(dummy){return dummy;}
  function $tw(){return window.$tw;}
  unused(__lib);
  unused($tw);
  var qtipOptions={
    _name:'_qtipOptions'
    ,positions:{
      tidTitles:{
        my:'top left'
        ,at:'bottom left'
      }
      ,tiddlerTitleButtons:{
        my:'right center'
        ,at:'left center'
      }
      ,pageControls:{
        my:'bottom center'
        ,at:'top center'
      }
      ,sidebarResolves:{
        my:'right center'
        ,at:'left center'
      }
      ,sidebarFindVerticalTabs:{
        my:'right center'
        ,at:'left center'
      }
    }
    ,shows:{
      tiddler:{
        effect:function(offset){
          unused(offset);
          $(this).fadeIn(500);
        }
        ,delay:2000
      }
      ,tiddlerTitleButtons:{
        effect:function(offset){
          unused(offset);
          $(this).fadeIn(500);
        }
        ,delay:1000
      }
      ,pageControls:{
        effect:function(offset){
          unused(offset);
          $(this).fadeIn(500);
        }
        ,delay:1000
      }
      ,sidebarResolves:{
        effect:function(offset){
          unused(offset);
          $(this).fadeIn(500);
        }
        ,delay:1000
      }
      ,sidebarFindVerticalTabs:{
        effect:function(offset){
          unused(offset);
          $(this).fadeIn(500);
        }
        ,delay:1000
      }
    }
    ,hides:{
      tiddler:{
        event:'unfocus'
        ,effect:function(offset){
          unused(offset);
          $(this).fadeOut(1500);
        }
        ,inactive:10000
      }
      ,tiddlerTitleButtons:{
        effect:function(offset){
          unused(offset);
          $(this).fadeOut(1500);
          //$(this).fadeOut(1500);
          //$(this).hide('fold',1000);
        }
      }
      ,pageControls:{
        effect:function(offset){
          unused(offset);
          $(this).fadeOut(1500);
        }
      }
      ,sidebarResolves:{
        event:'unfocus'
        ,effect:function(offset){
          unused(offset);
          $(this).fadeOut(1500);
        }
        ,inactive:5000
      }
      ,sidebarFindVerticalTabs:{
        event:'unfocus'
        ,effect:function(offset){
          unused(offset);
          $(this).fadeOut(1500);
        }
        //,inactive:5000
      }
    }
    ,styles:{
      darkShadowRounded:{
        classes: 'qtip-dark qtip-shadow qtip-rounded'
      }
      ,tiddler:{
        classes: 'qtip-tiddler qtip-shadow'
      }
      ,sidebarFindVerticalTabs:{
        classes: 'qtip-tiddler qtip-shadow'
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
      ,tiddlerTitleButtons:{
        show:function(event,api){
          api._showing=true;
          var me=$(event.originalEvent.target);
          console.log('me',me);
          var tgt=me.parents('.tc-tiddler-controls');
          console.log('tgt',me);
          api.set('position.target',tgt[0]);
          //tc-tiddler-controls
        }
        ,hide:function(event,api){
          api._showing=false;
        }
      }
    }
    ,contents:{
      textEventTargetText:{
        text:function(e){
          return $(e.target).text();
        }
      }
      ,ariaTitle:{
        title:function(e){
          unused(e);
          return $(this).attr('aria-label').toUpperCase();
        }
        ,text:function(e){
          unused(e);
          return $(this).attr('title');
        }
      }
      ,tiddler:{
        title:function(e){
          var tit=$(e.target).text();
          tit=$.trim(tit);
          var qtt=QtipTiddler.make('tiddler',tit);
          return qtt.theTitle();
        }
        ,text:function(e){
          var tit=$(e.target).text();
          tit=$.trim(tit);
          var qtt=QtipTiddler.make('tiddler',tit);
          return qtt.theText();
        }
      }
      ,sidebarResolves:{
        title:function(e){
          unused(e);
          var tit=this.attr('href');
          if (tit===undefined) {
            return 'err';
          }
          tit=tit.substr(1);
          tit=decodeURIComponent(tit);
          var qtt=QtipTiddler.make('tiddler',tit);
          return qtt.theTitle();
        }
        ,text:function(e){
          unused(e);
          var tit=this.attr('href');
          if (tit===undefined) {
            return 'err';
          }
          tit=tit.substr(1);
          tit=decodeURIComponent(tit);
          var qtt=QtipTiddler.make('tiddler',tit);
          return qtt.theText();
        }
      }
      ,sidebarFindVerticalTabs:{
        //class .tc-tab-selected
        // title:desc,aria-label:subhead,data-who:tiddler,data-filter:filter
        title:function(e){
          unused(e);
          var tit=this.attr('data-who');
          if (tit===undefined) {
            return 'err';
          }
          //tit=tit.substr(1);
          //tit=decodeURIComponent(tit);
          //tit=$.trim(tit);
          var qtt=QtipTiddler.make('sidebarFindVerticalTabs',tit,this);
          return qtt.theTitle();
        }
        ,text:function(e){
          unused(e);
          var tit=this.attr('data-who');
          if (tit===undefined) {
            return 'err';
          }
          var qtt=QtipTiddler.make('sidebarFindVerticalTabs',tit,this);
          return qtt.theText();
        }
      }
    }
  };
  __lib(qtipOptions);
  return qtipOptions;
});
