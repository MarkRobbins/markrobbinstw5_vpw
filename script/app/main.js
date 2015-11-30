/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/27/15
 * Time: 4:26 PM
 * To change this template use File | Settings | File Templates.
 */

define(['./messages','print','waiter','tinycolor','radio','./clipb','U','./qtip','./inits'],
function (messages,print,waiter,tinycolor,radio,clipb,U,qtip,inits) {
  // Load any app-specific modules
  // with a relative require call,
  // like:
  //var messages = require('./messages');

  // Load library/vendor modules using
  // full IDs, like:
  //var print = require('print');
  print(messages.getHello());
  /////////////////
  var console=window.console, _;
  _={
    _name: '_'
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
      _.inits=inits;
      _.clipboards=clipb;
      //_.clipboards.init();
      _.qtip=qtip;
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




});