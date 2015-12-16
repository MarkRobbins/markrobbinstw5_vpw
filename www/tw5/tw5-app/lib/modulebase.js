/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/30/15
 * Time: 7:43 PM
 * To change this template use File | Settings | File Templates.
 */
define(['types/typepubsub','types/typebug'],function(typePubSub,typeBug){
  "use strict";
  var $=window.$;
  var moduleBase={
    seed:function(that){
      if(window[that._name]===undefined){
        window[that._name]=that;
      }
      if(typeof that.init==='function'){
        that._init=that.init;
        // function (){
        //   if (!that.init.initialized) {
        //     that.init();
        //     that.init.initialized=true;
        //   }else{
        //     console.debug('double seed',that._name);
        //     return;
        //   }
        // };
      }
      that._pubs=that._pubs||{};
      that._pubs.moduleInit={name:String};
      that._pubs.moduleInitDone={name:String};
      typePubSub.seed(that);
      that.init=this.__initfn;
      var bug=$.extend(true,{},typeBug);
      var keys=Object.keys(bug);
      $.each(keys,function(i,v){
        //console.log('v',v);
        if (that[v]===undefined) {
          that[v]=bug[v];
        }
      });
    }
    ,typeInherit:function(typ,tgt){
      var i;
      //console.log('inheritFrom..........'+arguments.callee.caller.name);
      var a=[];
      for (i in typ) {
        if (typ.hasOwnProperty(i)) {
          if (typeof typ[i]==='function') {
            tgt[i]=typ[i];
            a[a.length]=i;
          }
        }else{
          console.log('not inheriting "'+i+'" in '+obj.name);
        }
      }
      //console.log('inheritedFrom '+obj.name,a);
    }
    ,__initfn:function(){
      this.initPub();
      this.moduleInit({name:this._name});
      if (!this._init.initialized) {
        this._init.initialized=true;
        this._init();
      }
      delete this.init;
      this.moduleInitDone({name:this._name});
    }
  };
  //console.error('MODULE',moduleBase);
  return moduleBase;
});
