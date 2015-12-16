/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/27/15
 * Time: 11:33 PM
 * To change this template use File | Settings | File Templates.
 */

define(['moduleBase','clipboard','types/typepubsub','U'],function(moduleBase,Clipboard,typePubSub,U){
  "use strict";
  function unused(dummy){return dummy;}
  function __lib(dummy){return dummy;}
  var clipboards={
    _name:'clipboards'
    ,_subs:{
      domNodeInserted:function(d,o){
        unused(o);
        var t=d.event.target;
        if(t.nodeType===1){
          clipboards.refreshDebounce();
        }
        //console.warn('domNodeInserted',d);
      }
    }
    ,_specs:{
      // name: selector, success, error
    }
    ,items:{
      // name:obj
    }
    ,_ctorItem:function ClipboardItem(name,selector,success,error){
      this.name=name;
      this.selector=selector;
      this.success=success;
      this.error=error;
    }
    ,_protoItem:{
      create:function(){
        if(this._created) {return this;}
        if(clipboards._specs[this.name]===undefined){
          clipboards._specs[this.name]=this;
        }
        this._created=true;
        this.clip=new Clipboard(this.selector);
        if(clipboards.items[this.name]!==undefined){
          clipboards.items[this.name].destroy();
        }
        clipboards.items[this.name]=this;
        return this;
      }
      ,destroy:function(){
        if(this._created){
          this.clip.destroy();
          delete clipboards.items[this.name];
        }
        delete this.clip;
        delete clipboards._specs[this.name];
        delete this._created;
        return this;
      }
      ,suspend:function(){
        __lib(this.suspend);
        if(!this._created) {return this;}
        this.clip.destroy();
        delete clipboards.items[this.name];
        delete this._created;
        return this;
      }
      ,resume:function(){
        __lib(this.resume);
        if(this._created) {return this;}
        return this.create();
      }
      ,refresh:function(){
        if(!this._created) {return this;}
        this.destroy();
        //noinspection JSCheckFunctionSignatures
        this.create();
        return this;
      }
    }
    ,_newItem:function(name,selector,success,error){
      if(clipboards._specs[name]!==undefined){
        delete clipboards._specs[name];
      }
      //console.error('this._name::',this._name,this);
      var o=new this._ctorItem(name,selector,success,error);
      //console.info('o.create:',o.create);
      clipboards._specs[name]=o;
      return o;
    }
    ,_newbs:function(){
      //noinspection JSCheckFunctionSignatures
      this.add('clipper','.clipper').create();
    }
    ,add:function(name,selector,success,error){
      return this._newItem(name, selector, success, error);
    }
    ,refresh:function(){
      var o;
      for(o in clipboards.items){
        if (clipboards.items.hasOwnProperty(o)){
          var oo= clipboards.items[o];
          oo.clip.destroy();
          oo.clip=new Clipboard(oo.selector);
        }
      }
    }
    ,init:function(){
      this._ctorItem.prototype=this._protoItem;
      function upd(){
        //console.warn('update');
        clipboards.refresh();
      }
      clipboards.refreshDebounce= U.debounce(upd,500);
      this._newbs();
      this.initPubSub();
    }
  };
  moduleBase.seed(clipboards);
  return clipboards;
});
