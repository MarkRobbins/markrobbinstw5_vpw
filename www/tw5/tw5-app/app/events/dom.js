/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/28/15
 * Time: 3:24 AM
 * To change this template use File | Settings | File Templates.
 */
define(['modulebase'],function(moduleBase){
  "use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  var dom={
    _name:'dom'
    ,_pubs:{
      domNodeInserted:{event:null}
      ,domNodeRemoved:{event:null}
    }
    ,_doPub:true
    ,_useTimeout:false
    ,_timeout:100
    ,_hooked:false
    ,_onlyClasses:true
    ,data:{
      event:null
    }
    ,_handle:function(eventName,data){
      dom.data=data;
      if(dom._doPub){
        if(dom._useTimeout){
          setTimeout(function(){
            dom[eventName](data);
          },dom._timeout);
        }else{
          dom[eventName](data);
        }
      }
    }
    ,_nodeInsertedHook:function(event){
      if (dom._onlyClasses) {
        if (event.target) {
          var et=event.target;
          if (et.nodeType===1) {
            if (et.className) {
              dom._handle('domNodeInserted',{event:event});
            }
          }
        }
      }else{
        dom._handle('domNodeInserted',{event:event});
      }
    }
    ,_nodeRemovedHook:function(event){
      if (dom._onlyClasses) {
        if (event.target) {
          var et=event.target;
          if (et.nodeType===1) {
            if (et.className) {
              dom._handle('domNodeRemoved',{event:event});
            }
          }
        }
      }else{
        dom._handle('domNodeRemoved',{event:event});
      }
    }
    ,unHook:function(){
      if(!this._hooked){
        return;
      }
      this._hooked=false;
      $(document).off('DOMNodeInserted',this._nodeInsertedHook);
      $(document).off('DOMNodeRemoved',this._nodeRemovedHook);
    }
    ,setHook:function(){
      if(this._hooked){
        return;
      }
      $(document).on('DOMNodeInserted',this._nodeInsertedHook);
      $(document).on('DOMNodeRemoved',this._nodeRemovedHook);
    }
    ,init:function(){
      this.setHook();
    }
  };
  moduleBase.seed(dom);
  return dom;
});

