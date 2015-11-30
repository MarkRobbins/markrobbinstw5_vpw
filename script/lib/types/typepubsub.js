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
    ,initPubSub:function(bug,pfx){
      // xmp bc this.__topicName({});
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
      //noinspection JSUnresolvedVariable
      if (this._subs!==undefined) {
        if(bug){console.log('initPubSub,have subs');}
        //noinspection JSUnresolvedVariable
        for (i in this._subs) {
          //noinspection JSUnresolvedVariable
          if(this._subs.hasOwnProperty(i)){
            if(bug){//noinspection JSUnresolvedVariable
              console.log('initPubSub, subscribing to msg:'+i+' with ',this._subs[i]);
            }
            //noinspection JSUnresolvedVariable
            radio(i).subscribe([this._subs[i],this]);
          }
        }
      }
    }
    ,seed:function(that){
      that.initPubSub=this.initPubSub;
      that._isPubSub=true;
    } //-seed
  };
  return typePubSub;
});
