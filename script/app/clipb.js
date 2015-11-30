/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/27/15
 * Time: 11:33 PM
 * To change this template use File | Settings | File Templates.
 */

define(['clipboard','types/typepubsub','U'],function(Clipboard,typePubSub,U){
  "use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  var clipboards={
    _name:'clipboards'
    ,_subs:{
      domNodeInserted:function(d,o){
        var t=d.event.target;
        if(t.nodeType===1){
          clipboards.refreshDebounce();
        }
        //console.warn('domNodeInserted',d);
      }
    }
    ,_specs:{
      // name: selector, successcb, errorcb
    }
    ,items:{
      // name:obj
    }
    ,add:function(name,selector,success,error){
      if(clipboards._specs[name]!==undefined){
        delete clipboards._specs[name];
      }
      var o={name:name, selector:selector,success:success,error:error};
      clipboards._specs[name]=o;
      o.create=function(){
        if(this._created) {return this;}
        if(clipboards._specs[this.name]===undefined){
          clipboards._specs[this.name]=this;
        }
        this._created=true;
        this.clip=new Clipboard(selector);
        if(clipboards.items[this.name]!==undefined){
          clipboards.items[this.name].destroy();
        }
        clipboards.items[name]=this;
        return this;
      };
      o.destroy=function(){
        if(this._created){
          this.clip.destroy();
          delete clipboards.items[this.name];
        }
        delete clipboards._specs[this.name];
        delete this._created;
        return this;
      };
      o.suspend=function(){
        if(!this._created) {return this;}
        this.clip.destroy();
        delete clipboards.items[this.name];
        delete this._created;
        return this;
      };
      o.refresh=function(){
        if(!this._created) {return this;}
        this.destroy();
        //noinspection JSCheckFunctionSignatures
        this.create();
        return this;
      };
      return o;
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
      console.info(this._name+'.init()');
      typePubSub.seed(this);
      this.initPubSub();
      var c=this.add('clipper','.clipper');
      //noinspection JSCheckFunctionSignatures
      c.create();
      function upd(){
        console.warn('update');
        clipboards.refresh();
      }
      clipboards.refreshDebounce= U.debounce(upd,500);

    }
  };
  return clipboards;
});
