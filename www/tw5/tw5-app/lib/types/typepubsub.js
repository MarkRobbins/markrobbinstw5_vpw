/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/28/15
 * Time: 8:53 AM
 * To change this template use File | Settings | File Templates.
 */
define(['../radio'],function(radio){
  "use strict";
  var typePubSub={
    _name:'typePubSub'
    ,initPub:function(bug,pfx){
      //noinspection JSValidateTypes
      pfx=pfx===undefined?'':pfx;
      var i;
      if (bug){console.log('initPubSub');}
      //noinspection JSUnresolvedVariable
      if (this._pubs!==undefined) {
        if(bug){console.log('initPubSub,have pubs');}
        //noinspection JSUnresolvedVariable
        for (i in this._pubs) {
          //noinspection JSUnresolvedVariable
          if (this._pubs.hasOwnProperty(i)){
            var f=new Function('o','o=o===undefined?{}:o;o.when=new Date();radio("'+i+'").broadcast(o,this);');
            if(bug){console.log('initPubSub, assigning function '+pfx+i,f);}
            this[pfx+i]=f;
          }
        }
      }
    }
    ,initSub:function(bug){
      //noinspection JSUnresolvedVariable
      if (this._subs!==undefined) {
        if(bug){console.log('initPubSub,have subs');}
        var i;
        //noinspection JSUnresolvedVariable
        for (i in this._subs) {
          //noinspection JSUnresolvedVariable
          if(this._subs.hasOwnProperty(i)){
            if(bug){//noinspection JSUnresolvedVariable
              console.log('initPubSub, subscribing to msg:'+i+' with ',this._subs[i]);
            }
            //noinspection JSUnresolvedVariable
            radio(i).subscribe([this._subs[i],this]);
            this._subs[i].subscribed=true;
          }
        }
      }
    }
    ,unsubscribe:function(functionName){
      if(!this._subs[functionName]){
        console.warn('cannot unsubscribe, not in ._subs: function:'+functionName);
        return;
      }
      if(!this._subs[functionName].subscribed){
        console.warn('cannot unsubscribe, not subscribed: function:'+functionName);
        return;
      }
      radio(functionName).unsubscribe(this._subs[functionName]);
      this._subs[functionName].subscribed=false;
    }
    ,subscribe:function(functionName){
      if(!this._subs[functionName]){
        console.warn('cannot subscribe, not in ._subs: function:'+functionName);
        return;
      }
      if(this._subs[functionName].subscribed){
        console.warn('cannot subscribe, already subscribed: function:'+functionName);
        return;
      }
      radio(functionName).subscribe([this._subs[functionName],this]);
      this._subs[functionName].subscribed=true;
    }
    ,initPubSub:function(bug,pfx){
      this.initPub(bug,pfx);
      this.initSub(bug);
    }
    ,seed:function(that){
      that.initPubSub=this.initPubSub;
      that.initPub=this.initPub;
      that.initSub=this.initSub;
      that._isPubSub=true;
    } //-seed
  };
  return typePubSub;
});
