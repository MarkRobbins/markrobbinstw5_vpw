/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/29/15
 * Time: 9:17 AM
 * To change this template use File | Settings | File Templates.
 */
define(['types/typepubsub'],function(typePubSub){
  "use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  var mouse={
    _name:'mouse'
    ,_hooked:false
    ,_pubs:{
      mousemove:{event:null,pageX:Number,pageY:Number}
    }
    ,_doPub:true
    ,_useTimeout:true
    ,_timeout:100
    ,data:{
      event:event
      ,pageX:0
      ,pageY:0
    }
    ,_hook:function(event){
      mouse.data.pageX=event.pageX;
      mouse.data.pageY=event.pageY;
      mouse.data.event=event;
      if(mouse._doPub){
        if(mouse._useTimeout){
          setTimeout(function(){
            mouse.mousemove({event:event,pageX:event.pageX,pageY:event.pageY});
          },mouse._timeout);
        }else{
          mouse.mousemove({event:event,pageX:event.pageX,pageY:event.pageY});
        }
      }
    }
    ,unHook:function(){
      if(!this._hooked){
        return;
      }
      $(document).off("mousemove",this._hook);
    }
    ,setHook:function(){
      if(this._hooked){
        return;
      }
      $(document).on("mousemove",this._hook);
    }
    ,init:function(){
      typePubSub.seed(this);
      this.initPubSub();
      this.setHook();
    }
  };
  return mouse;
});
