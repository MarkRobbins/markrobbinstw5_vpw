/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/27/15
 * Time: 4:26 PM
 * To change this template use File | Settings | File Templates.
 */

define(['waiter','types/typepubsub','./inits'],
function (waiter,typePubSub,inits) {
  "use strict";
  //var console=window.console, _;
  var _={
    _name: '_'
    ,_subs:{
      moduleInit:function(d,o){
        console.info('moduleInit',d,o);
      }
      ,moduleInitDone:function(d,o){
        console.info('moduleInitDone',d,o);
        if (this.modules[o._name]===undefined) {
          this.modules[o._name]=o;
        }else{
          console.error('collision in _.modules:'+o._name,d,o);
        }
      }
    }
    ,modules:{

    }
    ,data: {
    }
    ,init: function () {
      console.log('tw5 init!');
    }
  };//-_
  window._=_;
  //var waiter=require('waiter');

  waiter.wait('jQuery,jQuery.qtip,$tw'
    ,500
    ,10
    ,function(){
      console.log('done waiting');
      typePubSub.seed(window._);
      window._.initPubSub();
      _.inits=inits;
      //_.clipboards=clipb;
      //_.clipboards.init();
      //_.qtip=qtip;
      //_.qtip.init();
      _.inits.init();
      //console.info('inCB');
      //console.log('clipboard',clipboard);
      //console.log('tinycolor',tinycolor);
      //console.info('U.VERSION',U.VERSION);
    }
    ,function(missing){console.info('inERR',missing);}
  );
  //setTimeout(function(){console.log('data ok:',_data.ok);},10000);
  return _;



});