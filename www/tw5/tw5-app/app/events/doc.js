/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/28/15
 * Time: 3:25 AM
 * To change this template use File | Settings | File Templates.
 */
define(['modulebase','radio','app/keys','app/state'],function(moduleBase,radio,keys,state){
  "use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  function unused(dummy){return dummy;}
  function __lib(dummy){return dummy;}
  unused(__lib);
  //noinspection FunctionWithInconsistentReturnsJS
  var doc={
    _name:'doc'
    ,_hooks:{
      keydown:null
      ,keyup:null
      ,keypress:null
    }
    ,_keysDown:{
    }
    ,_isDown:function(n){
      return doc._keysDown['_'+n]!==undefined;
    }
    ,_checkCall:function(fo){
      //noinspection JSUnresolvedVariable
      if (fo.me===undefined) {
        return true;
      }
      /*
      keys[code].me={
        k:{
         j:<string> has cas, has ?code when no cas
        }
        ,W:<csv> of states, possibly prefixed by !
      }
      */

      //noinspection JSUnresolvedVariable
      console.log('_checkCall:j:'+fo.me.k.j);
      //noinspection JSUnresolvedVariable,JSValidateTypes
      if (fo.me.k.j.indexOf("c")===-1&&fo.me.k.j.indexOf('a')===-1&&fo.me.k.j.indexOf('s')===-1) {
        //noinspection JSUnresolvedVariable
        console.log('_checkCall:plainkey?:'+fo.me.k.j);
        // plain key
        //noinspection JSUnresolvedVariable
        var kc=fo.me.k.j.substr(1);
        kc=parseInt(kc,10);
        console.log('_checkCall:plainkey?:kc:'+kc);
        // enter esc space 0-9
        var aa=[13,27,32,48,49,50,51,52,53,54,55,56
          // - = bs
          ,189,187,8
          // a-z
          ,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90
          // [ ] \
          ,219,221,220
          // ; '
          ,186,222
          // ,./
          ,188,190,191
          // ins hom pu del end pd
          ,45,36,33,46,35,34
          // left right up down
          ,37,39,38,40
          // f1-f12  3  4  5    6   7   8   9  10   11  12
          //,112,113,114,115,116,117,118,119,120,121,122,123
          // num / * - + .
          ,111,106,109,107,110
          // num 0-9    5   6   7   8   9
          ,96,97,98,99,100,101,102,103,104
        ];
        //noinspection JSValidateTypes
        console.log('_checkCall:aa.indexOf('+kc+'):'+aa.indexOf(kc));
        //noinspection JSValidateTypes
        if (aa.indexOf(kc)!==-1) {
          if (state.isInEditor()) {
            //noinspection JSUnresolvedVariable
            console.log('exit inEditor:'+kc+' '+fo.me.n);
            return false;
          }
        }
      }
      // return true if should call
      //noinspection JSUnresolvedVariable
      var w=fo.me.W;
      //console.log('fo,fo.me:',fo,fo.me);
      if (w===undefined) {
        return true;
      }
      //console.log('w',w);
      w=w.split(',');
      //console.log('w',w);
      //w=__.utils.cleanFor(w,'string');
      //console.log('w',w);
      //console.log('w.length',w.length);
      var ay=[];
      var an=[];
      var x;
      for (x=0;x<w.length;x=x+1) {
        var i=w[x];
        if (typeof i === 'string') {
          if (i.substr(0, 1) === '!') {
            an.push(i.substr(1));
          } else {
            ay.push(i);
          }
        }
      }
      //console.log('ay',ay,'an',an);
      //ay=__.utils.cleanFor(ay,'string');
      //an=__.utils.cleanFor(an,'string');
      //console.log('ay',ay,'an',an);
      function tryIt(s){
        var f=state['is'+s];
        if (typeof f!=='function') {
          console.error('state Fn not found:is'+s+'()');
          return false;
        }
        return state['is' + s]();
      }
      var yy=false;
      for (x=0;x<ay.length;x=x+1) {
        if (tryIt(ay[x])) {
          yy=true;
        }
      }
      if (ay.length===0) {
        yy=true;
      }
      var nn=false;
      for (x=0;x<an.length;x=x+1) {
        if (tryIt(an[x])) {
          nn=true;
        }
      }
      if (yy&&(!nn)) {
        //console.log(fo,'yy:'+yy+' nn:'+nn+' rv:true');
        return true;
      }
      //console.log(fo,'yy:'+yy+' nn:'+nn+' rv:false');
      return false;
    } //-_checkCall
    ,_doCall:function(code,evt){
      //if (__.data.showkeys) {console.log('code:'+code);}
      //console.log('code:'+code);
      code._bc({evt:evt});
      if (typeof keys[code]==='function') {
        //console.log('press:'+code);
        if (this._checkCall(keys[code])) {
          return keys[code](evt);
        }
        return;
      }
      if ($.isArray(keys[code])) {
        var a=keys[code];
        var x;
        for (x=0;x<a.length;x=x+1) {
          if (typeof a[x]==='function') {
            console.log('press:'+x+' '+code);
            if (!this._checkCall(a[x])) {
              console.log('item failed _checkCall :'+x+' '+code);
            }else{
              var rv=a[x](evt);
              if (rv!==undefined) {
                if (rv===false) {
                  // return 'continue'
                  return rv;
                }
              }
            }
          }
        }
      }
    } //-_do_call
    ,casEvent:function (e){
      var s = '';
      if (e.ctrlKey) {s += 'c';}
      if (e.altKey) {s += 'a';}
      if (e.shiftKey) {s += 's';}
      return s;
    } //-casEvent
    ,cas:function(){
      var cas='';
      if (doc._isDown(17)!==undefined) {cas+='c';}
      if (doc._isDown(18)!==undefined) {cas+='a';}
      if (doc._isDown(16)!==undefined) {cas+='s';}
      return cas;
    } //-cas
    ,mousemove:function(evt){
    }
    ,mousedown:function(evt){
    }
    ,mouseup:function(evt){
    }
    ,mouseenter:function(evt){
    }
    ,mouseleave:function(evt){
    }
    ,mouseover:function(evt){
    }
    ,mouseout:function(evt){
    }
    ,focusin:function(evt){
    }
    ,focusout:function(evt){
    }
    ,textchange:function(evt){
    }
    ,hastext:function(evt){
    }
    ,notext:function(evt){
    }
    ,keypress:function(evt){
      //if (__.data.showkeys) {console.log('document.keypress',evt.keyCode);}
      var cas=this.casEvent(evt);
      var foc=$(':focus');
      if (foc.length===1&&foc.prop('tagName')==='TEXTAREA') {return;}
      var code='k_'+cas+'p'+evt.keyCode;
      return this._doCall(code,evt);
    } //-keypress
    ,keyup:function(evt){
      //if (__.data.showkeys) {console.log('document.keyup',evt.keyCode);}
      //var foc=$(':focus');
      //console.log('document.keyup.tagName',foc.prop('tagName'));
      var cas=this.casEvent(evt);
      if (this._keysDown['_'+evt.keyCode]!==undefined) {
        delete this._keysDown['_'+evt.keyCode];
      }
      var code='k_'+cas+'u'+evt.keyCode;
      return this._doCall(code,evt);
    } //-keyup
    ,keydown:function(evt){
      //if (__.data.showkeys) {console.log('document.keydown',evt.keyCode);}
      // var foc=$(':focus');
      // if (0) {
      //   if (foc.length===1&&foc.prop('tagName')==='TEXTAREA') {
      //     if (evt.keyCode!==17&&evt.keyCode!==18&&evt.keyCode!==16) {
      //       return;
      //     }
      //   }
      // }
      if (this._keysDown['_'+evt.keyCode]!==undefined) {return;}
      //if (document.sk) {console.log('document.keydown',evt.keyCode);}
      this._keysDown['_'+evt.keyCode]=new Date();
      var cas=this.casEvent(evt);
      var code='k_'+cas+'d'+evt.keyCode;
      return this._doCall(code,evt);
    } //-keydown
    ,init:function(){
    }
  };
  moduleBase.seed(doc);
  return doc;
});

