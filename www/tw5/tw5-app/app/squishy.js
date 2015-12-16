define(['modulebase','u'],function(moduleBase,U){
  "use strict";
  function unused(dummy){return dummy;}
  function __lib(dummy){return dummy;}
  function $tw(){return window.$tw;}
  unused(__lib);
  unused($tw);
  //noinspection JSUnresolvedVariable
  var $=window.$;
  var squishy={
    _name:'squishy'
    ,_subs:{
      domNodeInserted:function(d,o){
        unused(o);
        var t=d.event.target;
       if(t.nodeType===1){
         var q=$(t);
         var cl=q.attr('class');
         if (cl) {
           if (q.hasClass('tc-tiddler-title')) {
             var dp=$(t).getDomPath();
             if (dp.indexOf('#qtip-')===-1) {
               //console.log('class',cl);
               //console.log('dompath',dp);
               squishy.refreshDebounce();
             }
           }
         }
         //squishy.refreshDebounce();
        }
      }
    }
    ,refresh:function(){
      var q=$('h2.tc-title');
      q.squishy({maxSize:25});
      q.squishy({maxSize:25});
    }
    ,init:function(){
      var that=this;
      function upd(){
        //console.warn('update '+that._name);
        squishy.refresh();
      }
      squishy.refreshDebounce= U.debounce(upd,500);
      //this._newbs();
      this.refresh();
      this.initPubSub();
    }
  };
  moduleBase.seed(squishy);
  return squishy;
});

