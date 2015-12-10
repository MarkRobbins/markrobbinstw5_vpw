/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/28/15
 * Time: 5:44 AM
 * To change this template use File | Settings | File Templates.
 */

define(['modulebase','protos','jquery_plugins','clipboards','qtips','squishy','factory','app/events'],
  function(moduleBase,protos,jqueryPlugins,clipboards,qtips,squishy,factory,events){
  "use strict";
  var inits={
    _name:'inits'
    ,protos:function(){
      protos.init();
    }
    ,jqueryPlugins:function(){
      jqueryPlugins.init();
    }
    ,clipboards:function(){
      clipboards.init();
    }
    ,qtips: function () {
      qtips.init();
    }
    ,squishy: function () {
      squishy.init();
    }
    ,factory:function(){
      factory.init();
    }
    ,events:function(){
      events.init();
    }
    ,init:function(){
      console.info(this._name+'.init()');
      this.protos();
      this.jqueryPlugins();
      this.clipboards();
      this.qtips();
      this.squishy();
      this.events();
    }
  };
  moduleBase.seed(inits);
  //console.warn('module',moduleBase);
  return inits;
});
