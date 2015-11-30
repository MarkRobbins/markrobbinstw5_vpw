/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/28/15
 * Time: 9:49 AM
 * To change this template use File | Settings | File Templates.
 */

define(['types/typepubsub','types/typecog'],function(typePubSub,typeCog){
  "use strict";
  var types={
    _name:'types'
    ,typePubSub:typePubSub
    ,typeCog:typeCog
  };
  return types;
});
