/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/28/15
 * Time: 3:24 AM
 * To change this template use File | Settings | File Templates.
 */
define(['modulebase','doc','typeeventhooker'],function(moduleBase,doc,typeEventHooker){
  "use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  function unused(dummy){return dummy;}
  function __lib(dummy){return dummy;}
  unused(unused);
  //noinspection FunctionWithInconsistentReturnsJS
  var kbd={
    _name:'kbd'
    ,_pubs:{
      keypress:{event:null}
      ,keydown:{event:null}
      ,keyup:{event:null}
    }
    ,_hooks:{
      keydown:null
      ,keyup:null
      ,keypress:null
    }
    ,_doDoc:true
    ,_doPub:true
    ,_useTimeout:true
    ,_timeout:100
    ,data:{
      keydown:{
        event:null
        ,events:[]
        ,eventsLength:100
      }
      ,keyup:{
        event:null
        ,events:[]
        ,eventsLength:100
      }
      ,keypress:{
        event:null
        ,events:[]
        ,eventsLength:100
      }
    }
    ,_handle_keypress:function(event){
      kbd.bug('keypress',event);
      kbd._handle('keypress',event);
    }
    ,_handle_keydown:function(event){
      kbd.bug('keydown',event);
      kbd._handle('keydown',event);
    }
    ,_handle_keyup:function(event){
      kbd.bug('keyup',event);
      kbd._handle('keyup',event);
    }
    ,_cancel:function(e){
      //console.log('keyProcessed');
      e.cancelBubble = true; // IE4+
      try {
        e.keyCode = 0;
      } catch (err) {
      } // IE5
      if (window.event) {e.returnValue = false; } // IE6
      if (e.preventDefault) {e.preventDefault(); } // moz/opera/konqueror
      if (e.stopPropagation) {e.stopPropagation(); } // all
      return false;
    } //-cancel
    ,init:function(){
      this.setHooks();
    }
  };
  __lib(kbd._handle_keypress);
  __lib(kbd._handle_keyup);
  __lib(kbd._handle_keydown);
  moduleBase.typeInherit(typeEventHooker,kbd);
  moduleBase.seed(kbd);
  return kbd;
});

