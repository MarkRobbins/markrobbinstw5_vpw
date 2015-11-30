/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/28/15
 * Time: 5:44 AM
 * To change this template use File | Settings | File Templates.
 */

define(['inits/protos','inits/jquery_plugins','../app/clipb','../app/qtip','../app/factory','app/events'],
  function(protos,jqueryPlugins,clipboards,qtip,factory,events){
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
    ,qtip: function () {
      qtip.init();
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
      this.qtip();
      this.events();
    }
  };
  return inits;
});
