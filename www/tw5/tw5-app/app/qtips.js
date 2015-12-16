/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/28/15
 * Time: 1:45 AM
 * To change this template use File | Settings | File Templates.
 */

define(['modulebase','qtipitem','qtipspecs','qtipmaps','u'],function(moduleBase,QtipItem,qtipSpecs,qtipMaps,U){
  "use strict";
  function unused(dummy){return dummy;}
  function __lib(dummy){return dummy;}
  function $tw(){return window.$tw;}
  unused(__lib);
  unused($tw);
  //noinspection JSUnresolvedVariable
  var $=window.$;
  //var $tw=window.$tw;
  var qtips={
    _name:'qtips'
    ,_subs:{
      domNodeInserted:function(d,o){
        unused(o);
        var t=d.event.target;
       if(t.nodeType===1){
         if (t.className) {
           var dp=$(t).getDomPath();
           if (dp.indexOf('#qtip-')===-1) {
             qtips.refreshDebounce();
           }else{
             //console.log('path:',$(t).getDomPath());
           }
         }
        }
      }
    }
    ,_specs:{
    }
    ,_specAdd:function(o){
      qtips._specDel(o);
      qtips._specs[o.name]=o;
    }
    ,_specDel:function(o){
      if(qtips._specs[o.name]!==undefined){
        if (qtips._specs[o.name]!==o) {
          qtips._specs[o.name].destroy();
        }
      }
      delete qtips._specs[o.name];
    }
    ,items:{
    }
    ,_itemAdd:function(o){
      qtips._itemDel(o);
      qtips.items[o.name]=o;
    }
    ,_itemDel:function(o){
      if(qtips.items[o.name]!==undefined){
        if(qtips.items[o.name]!==o){
          qtips.items[o.name].destroy();
        }
      }
      delete qtips.items[o.name];
    }
    ,_qtipIface:function(m,x){
      //console.info('_qtipIface,m:',m);
      if (m==='warn') {
        console.warn(x,this);
      }
      if (m==='newed') {
        qtips._specAdd(this);
      }
      if (m==='created') {
        qtips._itemAdd(this);
      }
      if (m==='destroyed') {
        qtips._specDel(this);
        qtips._itemDel(this);
      }
      if (m==='suspended') {
        qtips._itemDel(this);
      }
      // if (m==='resumed') {
      //   //qtips._itemDel(this);
      // }
      // if (m==='refreshed') {
      //   //qtips._itemDel(this);
      // }
    }
    ,add:function(name,selector,type){
      var qtipObjectMap=qtipMaps[name];
      return new QtipItem(this._qtipIface,name,selector,type,qtipObjectMap);
    }
    ,_newbs:function(){
      var that=this;
      $.map(qtipSpecs,function(v,i){
        that.add(i,v.selector,v.type).create();
      });
    }
    ,refresh:function(){
      var o;
      for(o in qtips.items){
        if (qtips.items.hasOwnProperty(o)){
          var oo= qtips.items[o];
          oo.refresh();
        }
      }
    }
    ,init:function(){
      var that=this;
      function upd(){
        //console.warn('update '+that._name);
        qtips.refresh();
      }
      qtips.refreshDebounce= U.debounce(upd,2000);
      this._newbs();
      this.initPubSub();
    }
  };
  moduleBase.seed(qtips);
  return qtips;
});

