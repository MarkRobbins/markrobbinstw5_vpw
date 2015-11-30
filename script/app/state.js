/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/28/15
 * Time: 4:50 AM
 * To change this template use File | Settings | File Templates.
 */
define([],function(){
  "use strict";
  var state={
    _name:'state'
    ,isInEditor:function(){
      //noinspection JSUnresolvedVariable
      var q=':focus'.q;
      var tn=q.prop('tagName');
      if (['INPUT','TEXTAREA'].indexOf(tn)!==-1) {
        return true;
      }
      q='div.mce-tinymce'.q;
      if(q.length>0 && q.is(':visible')){
        return true;
      }
      return false;
    } //-inEditor
    ,init:function(){
    }
   };
});
