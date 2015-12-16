define(['modulebase','typeeventhooker'],function(moduleBase,typeEventHooker){
  "use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  function unused(dummy){return dummy;}
  function __lib(dummy){return dummy;}
  unused(__lib);
  unused($);
  //noinspection FunctionWithInconsistentReturnsJS
  var textchange={
    _name:'textchange'
    ,_pubs:{
      textchange:{event:null}
      ,notext:{event:null}
      ,hastext:{event:null}
    }
    ,_hooks:{
      textchange:null
      ,notext:null
      ,hastext:null
    }
    ,_applyInt:2000
    ,_doPub:true
    ,_doDoc:true
    ,_useTimeout:true
    ,_timeout:100
    ,data:{
      textchange:{
        event:null
        ,events:[]
        ,eventsLength:100
      }
      ,notext:{
        event:null
        ,events:[]
        ,eventsLength:100
      }
      ,hastext:{
        event:null
        ,events:[]
        ,eventsLength:100
      }
    }
    ,_apply:function(){
      var q='input[type="text"]:visible:not([data-textchangehooked]),input[type="search"]:visible:not([data-textchangehooked])'.q;
      //q.on({scroll:function(e){scroll._handle_scroll(e);}}).addClass('scrollhooked');
      //q.on({scroll:function(e){scroll._handle_scroll(e);}});
      q.bind('textchange',this._handle_textchange);
      q.bind('notext',this._handle_notext);
      q.bind('hastext',this._handle_hastext);
      q.attr('data-textchangehooked','1');
    }
    ,_doApply:function(){
      if (this._applyInt) {
        clearInterval(this._applyInt);
      }
      this._applyInt=setInterval(function(){textchange._apply();},this._applyEvery);
    }
    ,_unApply:function(){
      if (this._applyInt) {
        clearInterval(this._applyInt);
        this._applyInt=null;
      }
    }
    ,_handle_textchange:function(event){
      textchange.bug('textchange',event);
      textchange._handle('textchange',event);
    }
    ,_handle_notext:function(event){
      textchange.bug('notext',event);
      textchange._handle('notext',event);
    }
    ,_handle_hastext:function(event){
      textchange.bug('hastext',event);
      textchange._handle('hastext',event);
    }
    ,init:function(){
      this._doApply();
      //this.setHooks();
    }
  };
  moduleBase.typeInherit(typeEventHooker,textchange);
  __lib(focus._handle_textchange);
  __lib(focus._handle_hastext);
  __lib(focus._handle_notext);
  moduleBase.seed(textchange);
  return textchange;
});

