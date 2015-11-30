/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/28/15
 * Time: 10:37 AM
 * To change this template use File | Settings | File Templates.
 */
define(['types/typecog'],function(typeCog){
  "use strict";
  var factory={
    _name:'factory'
    ,init:function(){
      var i;
      for (i in this) {
        if (this.hasOwnProperty(i)) {
          if (i!=='_name'&&i!=='init'){
            var o=this[i];
            typeCog.seed(o);
          }
        }
      }
    }
  };
  return factory;
});
