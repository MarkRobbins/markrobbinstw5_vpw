/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/29/15
 * Time: 9:17 AM
 * To change this template use File | Settings | File Templates.
 */
define(['modulebase','typeeventhooker'],function(moduleBase,typeEventHooker){
  "use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  function unused(dummy){return dummy;}
  function __lib(dummy){return dummy;}
  unused(unused);
  //noinspection FunctionWithInconsistentReturnsJS
  var mouse={
    _name:'mouse'
    ,_hooked:false
    ,_pubs:{
      mousemove:{event:null}
      ,mouseup:{event:null}
      ,mousedown:{event:null}
      ,mouseenter:{event:null}
      ,mouseleave:{event:null}
      ,mouseover:{event:null}
      ,mouseout:{event:null}
      ,mousewheel:{event:null}
    }
    ,_hooks:{
      mousedown:null
      ,mouseup:null
      ,mousemove:null
      ,mouseenter:null
      ,mouseleave:null
      ,mouseover:null
      ,mouseout:null
      ,mousewheel:null
    }
    ,_doPub:true
    ,_doDoc:true
    ,_useTimeout:true
    ,_timeout:100
    ,data:{
      mousedown:{
        event:null
        ,events:[]
        ,eventsLength:100
      }
      ,mouseup:{
        event:null
        ,events:[]
        ,eventsLength:100
      }
      ,mousemove:{
        event:null
        ,events:[]
        ,eventsLength:100
      }
      ,mouseenter:{
        event:null
        ,events:[]
        ,eventsLength:100
      }
      ,mouseleave:{
        event:null
        ,events:[]
        ,eventsLength:100
      }
      ,mouseover:{
        event:null
        ,events:[]
        ,eventsLength:100
      }
      ,mouseout:{
        event:null
        ,events:[]
        ,eventsLength:100
      }
      ,mousewheel:{
        event:null
        ,events:[]
        ,eventsLength:100
      }
    }
    ,_handle_mousemove:function(event){
      //mouse.bug('mousemove',event);
      mouse._handle('mousemove',event);
    }
    ,_handle_mouseup:function(event){
      mouse.bug('mouseup',event);
      mouse._handle('mouseup',event);
    }
    ,_handle_mousedown:function(event){
      mouse.bug('mousedown',event);
      mouse._handle('mousedown',event);
    }
    ,_handle_mouseenter:function(event){
      //mouse.bug('mouseenter',event);
      mouse._handle('mouseenter',event);
    }
    ,_handle_mouseleave:function(event){
      //mouse.bug('mouseleave',event);
      mouse._handle('mouseleave',event);
    }
    ,_handle_mouseover:function(event){
      //mouse.bug('mouseover',event);
      mouse._handle('mouseover',event);
    }
    ,_handle_mouseout:function(event){
      //mouse.bug('mouseout',event);
      mouse._handle('mouseout',event);
    }
    ,_handle_mousewheel:function(event){
      mouse.bug('mousewheel',event);
      mouse._handle('mousewheel',event);
    }
    ,init:function(){
      this.setHooks();
    }
  };
  moduleBase.typeInherit(typeEventHooker,mouse);
  __lib(mouse._handle_mousemove);
  __lib(mouse._handle_mousedown);
  __lib(mouse._handle_mouseup);
  moduleBase.seed(mouse);
  return mouse;
});
