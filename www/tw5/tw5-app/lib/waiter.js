/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/27/15
 * Time: 5:38 PM
 * To change this template use File | Settings | File Templates.
 */

define(function () {
  //"use strict";
  function deepValue(obj, path){
    var i,len;
    for (i=0, path=path.split('.'), len=path.length; i<len; i=i+1){
      obj = obj[path[i]];
    }
    return obj;
  }
  function haveNeeds(need){
    var x;
    for (x = 0; x < need.length; x=x+1) {
      var name = need[x];
      console.info('need name:',name);
      var to=typeof deepValue(window,name);
      console.info(to);
      //noinspection JSValidateTypes
      if(to==='undefined') {
        console.log('need:'+name);
        return false;
      }
    }
    return true;
  }
  function missingNeeds(need){
    var x;
    var a=[];
    for (x = 0; x < need.length; x=x+1) {
      var name = need[x];
      var to=typeof deepValue(window,name);
      if(to==='undefined') {
        a.push(name);
      }
    }
    return a;
  }
  var me= {
    ct:0
    ,wait:function wait(needs,every,limit,cb,err) {
      console.info('needs',needs);
      //console.warn('cb',cb);
      //cb();
      //return;
      var need=needs.split(',');
      if (!haveNeeds(need)) {
        //addCt();
        me.ct=me.ct+1;
        console.info('NOT '+me.ct);
        if(me.ct>limit){
          err(missingNeeds(need));
          return;
        }
        setTimeout(function(){me.wait(needs,every,limit,cb,err);},every);
        return;
      }
      cb();
    }
  };
  return me;
});

