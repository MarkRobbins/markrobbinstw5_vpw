/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/28/15
 * Time: 1:45 AM
 * To change this template use File | Settings | File Templates.
 */

define(['radio'],function(radio){
  "use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  var qtip={
    _name:'qtip'
    ,_process:function(n){
      var sel=n;
      var not=sel+':not([qt])';
      var o={};
      o.mouseenter= function(){
          var me=$(this);
          me.attr('qt','1');
          //noinspection JSUnresolvedFunction
          me.qtip(qtip.qtipObjects[sel].qtipObject);
        };
      $(document).on(o, not);
    }
    ,qtipObjects:{
      '.tc-story-river .tc-tiddler-view-frame .tc-tiddler-title .tc-title':{
        type:'std'
        ,qtipObject:{
          content:{
            text:function(e){
              return $(e.target).text();
            }
          }
          ,style:{
            classes: 'qtip-dark qtip-shadow qtip-rounded'
          }
        }
      }
    }
    ,init:function(){
      console.info(this._name+'.init()');
      var n;
      for (n in this.qtipObjects) {
        if(this.qtipObjects.hasOwnProperty(n)){
          this._process(n);
        }
      }
    }

  };
  return qtip;
});

