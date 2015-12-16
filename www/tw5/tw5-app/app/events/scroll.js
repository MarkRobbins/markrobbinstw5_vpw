/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/29/15
 * Time: 9:24 AM
 * To change this template use File | Settings | File Templates.
 */
define(['modulebase','typeeventhooker'],function(moduleBase,typeEventHooker){
  "use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  function unused(dummy){return dummy;}
  function __lib(dummy){return dummy;}
  unused(unused);
  var scroll={
    _name:'scroll'
    ,_pubs:{
      scroll:{event:null}
      ,scrollup:{event:null}
      ,scrolldown:{event:null}
    }
    ,_hooks:{
      scroll:null
    }
    ,_applyEvery:2000
    ,_applyInt:null
    ,_timeout:100
    ,_useTimeout:false
    ,_doPub:true
    ,data:{
      scroll:{
        event:null
        ,events:[]
        ,eventsLength:100
      }
      ,scrollup:{
        event:null
        ,events:[]
        ,eventsLength:100
      }
      ,scrolldown:{
        event:null
        ,events:[]
        ,eventsLength:100
      }
    }
    ,_apply:function(){
      var q=':scrollable:visible:not([data-scrollhooked])'.q;
      //q.on({scroll:function(e){scroll._handle_scroll(e);}}).addClass('scrollhooked');
      q.on({scroll:function(e){scroll._handle_scroll(e);}});
      q.attr('data-scrollhooked','1');
    }
    ,_doApply:function(){
      if (this._applyInt) {
        clearInterval(this._applyInt);
      }
      this._applyInt=setInterval(function(){scroll._apply();},this._applyEvery);
    }
    ,_unApply:function(){
      if (this._applyInt) {
        clearInterval(this._applyInt);
        this._applyInt=null;
      }
    }
    ,_handle_scroll:function(event){
      //console.log('scroll',event);
      var e=event;
      scroll._handle('scroll',event);
      var target = e.currentTarget,
           self = $(target),
           scrollTop = window.pageYOffset || target.scrollTop,
           lastScrollTop = self.data("lastScrollTop") || 0,
           scrollHeight = target.scrollHeight || document.body.scrollHeight,
           scrollText = "";
      if (scrollTop > lastScrollTop) {
          //scrollText = "<b>scroll down</b>";
        scroll._handle_scrolldown(event);
      } else {
        scroll._handle_scrollup(event);
      }
      if (scrollHeight - scrollTop === self.innerHeight()) {
        console.log("? End of scroll");
      }
      self.data("lastScrollTop", scrollTop);
    }
    ,_handle_scrollup:function(event){
      console.log('scrollup',event);
      this._handle('scrollup',event);
    }
    ,_handle_scrolldown:function(event){
      console.log('scrolldown',event);
      this._handle('scrolldown',event);
    }
    ,init:function(){
      this.setHooks();
      this._doApply();
    }
  };
  moduleBase.typeInherit(typeEventHooker,scroll);
  __lib(scroll._handle_scrollup);
  __lib(scroll._handle_scrolldown);
  __lib(scroll._handle_scroll);
  moduleBase.seed(scroll);
  return scroll;
});
