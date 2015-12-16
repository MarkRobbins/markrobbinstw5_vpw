/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/28/15
 * Time: 3:20 AM
 * To change this template use File | Settings | File Templates.
 */

//define(['modulebase','dom','./events/kbd','./events/doc','./events/mouse','./events/scroll'],function(moduleBase,dom,kbd,doc,mouse,scroll){
define(['modulebase','doc','dom','kbd','mouse','scroll','focus','textchange'],function(moduleBase,doc,dom,kbd,mouse,scroll,focus,textchange){
  "use strict";
  var events={
    _name:'events'
    ,doc:doc
    ,dom:dom
    ,kbd:kbd
    ,mouse:mouse
    ,scroll:scroll
    ,focus:focus
    ,textchange:textchange
    ,init:function(){
      //e www\tw5\tw5-app\app\events\doc.js
      this.doc.init();
      //e www\tw5\tw5-app\app\events\dom.js
      this.dom.init();
      //e www\tw5\tw5-app\app\events\kbd.js
      this.kbd.init();
      //e www\tw5\tw5-app\app\events\mouse.js
      this.mouse.init();
      //e www\tw5\tw5-app\app\events\scroll.js
      this.scroll.init();
      //e www\tw5\tw5-app\app\events\focus.js
      this.focus.init();
      //e www\tw5\tw5-app\app\events\textchange.js
      this.textchange.init();
    }
  };
  moduleBase.seed(events);
  return events;
});
