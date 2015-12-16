/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/30/15
 * Time: 1:05 AM
 * To change this template use File | Settings | File Templates.
 */
define([],function(){
  "use strict";
  var keys={
    _name:'keys'
    ,add:function(code,cas,dup,fn){
      cas=cas||'';
      dup=dup||'';
      var id='k_'+cas+dup+code;
    }
    ,init:function(){
    }
  };
  return keys;
});
