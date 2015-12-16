define(['doc'],function(doc){
  "use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  function unused(dummy){return dummy;}
  function __lib(dummy){return dummy;}
  unused(__lib);
  //noinspection FunctionWithInconsistentReturnsJS
  var typeEventHooker={
    _name:'typeEventHooker'
    ,_push:function(eventName,event){
      var a=this.data[eventName].events;
      var l=this.data[eventName].eventsLength;
      a.push(event);
      if(a.length>l){a.shift();}
    }
    ,_handle:function(eventName,event){
      var that=this;
      this.data[eventName].event=event;
      this._push(eventName,event);
      if(this._doDoc){
        if (typeof doc[eventName]==='function') {
          doc[eventName](event);
        }else{
          console.info('doc[eventName] is not a function',eventName);
        }
      }
      if(this._doPub){
        if(this._useTimeout){
          setTimeout(function(){
            that[eventName]({event:event});
          },this._timeout);
        }else{
          this[eventName]({event:event});
        }
      }
    }
    ,_getDelegate:function(){
      if (this._delegate===undefined) {
        return document;
      }
      if (typeof this._delegate==='function') {
        return this._delegate();
      }
      return this._delegate;
    }
    ,_clrHook:function(hook){
      if (!this._hooks[hook]) {
        return;
      }
      this._hooks[hook]=false;
      var on={};
      on[hook]=this['_handle_'+hook];
      $(this._getDelegate()).off(on);
    }
    ,_setHook:function(hook){
      if (this._hooks[hook]) {
        return;
      }
      this._hooks[hook]=true;
      var on={};
      on[hook]=this['_handle_'+hook];
      $(this._getDelegate()).on(on);
    }
    ,clrHooks:function(hooks){
      var that=this;
      if (hooks===undefined) {
        $.each(Object.keys(this._hooks),function(i,v){
          that._clrHook(v);
        });
      }else if (typeof hooks==='string') {
        if (hooks.indexOf(' ')!==-1) {
          return this.clrHooks(hooks.split(' '));
        }
        if (hooks.indexOf(',')!==-1) {
          return this.clrHooks(hooks.split(','));
        }
        if (this._hooks[hooks]===undefined) {
          console.warn('bad hook');
          return;
        }
        this._clrHook(hooks);
      }else if ($.isArray(hooks)) {
        $.each(hooks,function(i,v){
          that._clrHook(v);
        });
      }
    }
    ,setHooks:function(hooks){
      var that=this;
      if (hooks===undefined) {
        $.each(Object.keys(this._hooks),function(i,v){
          that._setHook(v);
        });
      }else if (typeof hooks==='string') {
        if (hooks.indexOf(' ')!==-1) {
          return this.setHooks(hooks.split(' '));
        }
        if (hooks.indexOf(',')!==-1) {
          return this.setHooks(hooks.split(','));
        }
        if (this._hooks[hooks]===undefined) {
          console.warn('bad hook');
          return;
        }
        this._setHook(hooks);
      }else if ($.isArray(hooks)) {
        $.each(hooks,function(i,v){
          that._setHook(v);
        });
      }
    }
  };
  return typeEventHooker;
});
