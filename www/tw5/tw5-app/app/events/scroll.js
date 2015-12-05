/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/29/15
 * Time: 9:24 AM
 * To change this template use File | Settings | File Templates.
 */
define(['types/typepubsub'],function(typePubSub){
  "use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  var scroll={
    _name:'scroll'
    ,_hooked:false
    ,_pubs:{
      scroll:{event:null}
    }
    ,_timeout:100
    ,_useTimeout:false
    ,_doPub:true
    ,data:{
      event:null
    }
    ,_hook:function(event){
      scroll.data.event=event;
      if(scroll._doPub){
        if(scroll._useTimeout){
          setTimeout(function(){
            scroll.scroll({event:event});
          },scroll._timeout);
        }else{
          scroll.scroll({event:event});
        }
      }
    }
    ,unHook:function(){
      if(!this._hooked){
        return;
      }
      $(document).off('scroll',this._hook);
    }
    ,setHook:function(){
      if(this._hooked){
        return;
      }
      $(document).on('scroll',this._hook);
    }
    ,init:function(){
      typePubSub.seed(this);
      this.initPubSub();
      this.setHook();
    }
  };
  return scroll;
});
