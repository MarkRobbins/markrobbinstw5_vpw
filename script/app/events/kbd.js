/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/28/15
 * Time: 3:24 AM
 * To change this template use File | Settings | File Templates.
 */
define(['types/typepubsub','app/events/doc'],function(typePubSub,doc){
  "use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  var kbd={
    _name:'kbd'
    ,_pubs:{
      keypress:{event:null}
      ,keydown:{event:null}
      ,keyup:{event:null}
    }
    ,_doDoc:true
    ,_doPub:true
    ,_useTimeout:true
    ,_timeout:100
    ,_hooked:false
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
    ,_push:function(eventName,event){
      var a=kbd.data[eventName].events;
      var l=kbd.data[eventName].eventsLength;
      a.push(event);
      if(a.length>l){a.shift();}
    }
    ,_handle:function(eventName,event){
      kbd.data[eventName].event=event;
      kbd._push(eventName,event);
      if(kbd._doDoc){
        doc[eventName](event);
      }
      if(kbd._doPub){
        if(kbd._useTimeout){
          setTimeout(function(){
            kbd[eventName]({event:event});
          },kbd._timeout);
        }else{
          kbd[eventName]({event:event});
        }
      }
    }
    ,_handleKeypress:function(event){
      kbd._handle('keypress',event);
    }
    ,_handleKeydown:function(event){
      kbd._handle('keydown',event);
    }
    ,_handleKeyup:function(event){
      kbd._handle('keyup',event);
    }
    ,unHook:function(){
      if(!this._hooked){
        return;
      }
      this._hooked=false;
      $(document).off('keypress',this._handleKeypress);
      $(document).off('keydown',this._handleKeydown);
      $(document).off('keyup',this._handleKeyup);
    }
    ,setHook:function(){
      if(this._hooked){
        return;
      }
      this._hooked=true;
      $(document).on('keypress',this._handleKeypress);
      $(document).on('keydown',this._handleKeydown);
      $(document).on('keyup',this._handleKeyup);
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
      typePubSub.seed(this);
      this.initPubSub();
    }
  };
  return kbd;
});

