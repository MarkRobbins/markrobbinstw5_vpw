/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/30/15
 * Time: 7:43 PM
 * To change this template use File | Settings | File Templates.
 */
define(['types/typepubsub'],function(typePubSub){
  "use strict";
  //console.error('MODULE');
  var moduleBase={
    seed:function(that){
      if(typeof that.init==='function'){
        that._init=that.init;
      }
      that._pubs=that._pubs||{};
      that._pubs.moduleInit={name:String};
      that._pubs.moduleInitDone={name:String};
      typePubSub.seed(that);
      that.init=this.__initfn;
      //that.init
    }
    ,__initfn:function(){
      this.initPub();
      this.moduleInit({name:this._name});
      this._init();
      this.moduleInitDone({name:this._name});
    }
  };
  //console.error('MODULE',moduleBase);
  return moduleBase;
});
