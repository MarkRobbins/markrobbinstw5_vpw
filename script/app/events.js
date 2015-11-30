/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/28/15
 * Time: 3:20 AM
 * To change this template use File | Settings | File Templates.
 */

define(['./events/dom','./events/kbd','./events/doc'],function(dom,kbd,doc){
  "use strict";
  var events={
    _name:'events'
    ,dom:dom
    ,kbd:kbd
    ,doc:doc
    ,init:function(){
      this.doc.init();
      this.dom.init();
      this.kbd.init();
    }
  };
  return events;
});
