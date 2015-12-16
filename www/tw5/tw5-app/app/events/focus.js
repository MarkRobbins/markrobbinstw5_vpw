define(['modulebase','typeeventhooker'],function(moduleBase,typeEventHooker){
  "use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  function unused(dummy){return dummy;}
  function __lib(dummy){return dummy;}
  unused(__lib);
  unused($);
  //noinspection FunctionWithInconsistentReturnsJS
  var focus={
    _name:'focus'
    ,_pubs:{
      focusin:{event:null}
      ,focusout:{event:null}
    }
    ,_hooks:{
      focusin:null
      ,focusout:null
    }
    ,_delegate:'body'
    ,_doPub:true
    ,_doDoc:true
    ,_useTimeout:true
    ,_timeout:100
    ,data:{
      focusin:{
        event:null
        ,events:[]
        ,eventsLength:100
      }
      ,focusout:{
        event:null
        ,events:[]
        ,eventsLength:100
      }
    }
    ,_handle_focusin:function(event){
      focus.bug('focusin',event);
      focus._handle('focusin',event);
    }
    ,_handle_focusout:function(event){
      focus.bug('focusout',event);
      focus._handle('focusout',event);
    }
    ,init:function(){
      this.setHooks();
    }
  };
  moduleBase.typeInherit(typeEventHooker,focus);
  __lib(focus._handle_focusin);
  __lib(focus._handle_focusout);
  moduleBase.seed(focus);
  return focus;
});

