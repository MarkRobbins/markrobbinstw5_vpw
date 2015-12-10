
define(['qtipoptions'],function(qtipOptions){
  "use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  function unused(dummy){return dummy;}
  function __lib(dummy){return dummy;}
  function $tw(){return window.$tw;}
  $tw();
  unused(unused);
  function QtipItem(iface,name,selector,type,qtipObjectMap){
    this.name=name;
    this.selector=selector;
    this.type=type;
    this.qtipObject=QtipItem._objectFromMap(qtipObjectMap);
    this.iface=iface;
    this.iface('newed');
  }
  QtipItem._obj_names={
    contents:'content'
    ,styles:'style'
    ,event:'events'
    ,hides:'hide'
    ,shows:'show'
    ,positions:'position'
  };
  QtipItem._opt_names={
    content:'contents'
    ,style:'styles'
    ,event:'events'
    ,hide:'hides'
    ,show:'shows'
    ,position:'positions'
  };
  QtipItem.opt_name=function(k){
    if (this._opt_names[k]===undefined) {
      return k;
    }
    return this._opt_names[k];
  };
  QtipItem.obj_name=function(k){
    if (this._obj_names[k]===undefined) {
      return k;
    }
    return this._obj_names[k];
  };
  QtipItem.opts_for=function(k,n){
    k=this.opt_name(k);
    return $.extend(true,{},qtipOptions[k][n]);
  };
  QtipItem._objectFromMap=function(map){
    var o={};
    var that=this;
    $.map(map,function(v,i){
      //v is value
      var opt_n=that.opt_name(i);
      var obj_n=that.obj_name(i);
      o[obj_n]=that.opts_for(opt_n,v);
    });
    return o;
  };
  QtipItem.prototype={
    create: function () {
      if (this._created) {return this;}
      this._created = true;
      this._createQtip();
      this.iface('created');
      return this;
    }
    ,_createQtip: function () {
      if (this.qtip) {
        this._destroyQtip();
      }
      this.qtip = $(this.selector).qtip(this.qtipObject);
      var api = this.qtip.qtip('api');
      if (api) {
        api._showing = false;
      } else {
        this.iface('warn', 'cannot get api');
      }
    }
    ,_destroyQtip: function () {
      if (this.qtip) {
        if (this.qtip.qtip('api')) {
          this.qtip.qtip('api').destroy();
        }
      }
    }
    ,isViable: function () {
      if (!this.qtip) {
        return false;
      }
      var api = this.qtip.qtip('api');
      return api?true:false;
    }
    ,destroy: function () {
      if (this._created) {
        this._destroyQtip();
      }
      delete this.qtip;
      delete this._created;
      this.iface('destroyed');
      return this;
    }
    ,suspend: function () {
      __lib(this.suspend);
      if (!this._created) {return this;}
      this._destroyQtip();
      delete this._created;
      this.iface('suspended');
      return this;
    }
    ,resume: function () {
      __lib(this.resume);
      if (this._created) {return this;}
      this.create();
      this.iface('resumed', this);
      return this;
    }
    ,refresh: function () {
      if (!this._created) {return this;}
      //console.info('api:',this.qtip.qtip('api'));
      var api = this.qtip.qtip('api');
      if (!api) {
        console.warn('cannot get api for', this.name, 'trying create');
        this.destroy();
        this.create();
      } else {
        if (!api._showing) {
          this.destroy();
          //noinspection JSCheckFunctionSignatures
          this.create();
        }
      }
      return this;
    }
  };
  __lib(QtipItem.prototype.isViable);
  return QtipItem;
});
