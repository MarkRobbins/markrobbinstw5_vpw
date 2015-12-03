/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/30/15
 * Time: 4:32 PM
 * To change this template use File | Settings | File Templates.
 */
define(['types/typepubsub'],function(typePubSub){
  "use strict";
  function unused(dummy){return dummy;}
  function __lib(dummy){return dummy;}
  //noinspection JSUnresolvedVariable
  var $=window.$;
  var dbg={
    _name:'dbg'
    ,_subs:{
      dbg:function(d,o){
        // type,msg
        unused(o);
        __lib(this.dbg);
        var type= d.type||'log';
        var msg;
        //noinspection JSUnresolvedVariable
        var dmsg=d.msg;
        if($.isArray(dmsg)){
          msg= dmsg;
        }else{
          msg=[dmsg];
        }
        console[type].apply(console,msg);
      }
    }
    ,init:function(){
      typePubSub.seed(this);
      this.initPubSub();

    }
  };
  return dbg;
});
