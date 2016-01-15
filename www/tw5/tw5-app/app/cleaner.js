define(['modulebase'],function(moduleBase){
  "use strict";
  function unused(dummy){return dummy;}
  function __lib(dummy){return dummy;}
  function $tw(){return window.$tw;}
  unused(__lib);
  unused($tw);
  //noinspection JSUnresolvedVariable
  var $=window.$;
  var cleaner={
    _name:'cleaner'
    ,_interval:1000
    ,_suspended:false
    ,_pubs:{
      cleaned:{items:Array}
    }
    ,_items:{
      qtip:{
        every:5
        ,ct:0
        ,exec:function(){
          'body>.qtip'.q.each(function(v,o){
            var me=$(o);
            var id=me.attr('data-qtip-id');
            var ho='[data-hasqtip="'+id+'"]';
            ho=ho.q;
            if(ho.length===0){
              //console.log('id',id);
              me.remove();
            }
          });
        }
      }
      ,lastpass:{
        every:10
        ,ct:0
        ,exec:function(){
          'body>script'.q.each(function(v,o){
            var me=$(o);
            if(me.html().indexOf('lastpass_iter=0')!==-1){
              console.log(o);
              me.remove();
            }
          });
        }
      }
    }
    ,_do_item:function(o){
      if (o.suspended) {
        return false;
      }
      if (o.ct<o.every) {
        o.ct=o.ct+1;
        return false;
      }
      o.ct=0;
      o.exec();
      return true;
    }
    ,suspendItem:function(n){
      var o=this._items[n];
      if (o===undefined) {
        console.warn('item not found',n);
        return;
      }
      o.suspended=true;
    }
    ,resumeItem:function(n){
      var o=this._items[n];
      if (o===undefined) {
        console.warn('item not found',n);
        return;
      }
      delete o.suspended;
    }
    ,suspend:function(){
      this._suspended=true;
    }
    ,resume:function(){
      this._suspended=false;
    }
    ,cleanup:function(){
      var that=this;
      var items=[];
      if (!this._suspended) {
        var keys=Object.keys(this._items);
        keys.forEach(function(v,i,a){
          unused(i);
          unused(a);
          var rv=that._do_item(that._items[v]);
          if (rv) {
            items.push(v);
          }
        });
      }
      this.cleaned({items:items},this);
      setTimeout(function(){
        that.cleanup();
      },this._interval);
    }
    ,init:function(){
      this.initPubSub();
      this.cleanup();
    }
  };
  __lib(cleaner.suspendItem);
  __lib(cleaner.resumeItem);
  moduleBase.seed(cleaner);
  return cleaner;
});
