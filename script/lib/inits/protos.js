/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/28/15
 * Time: 3:53 AM
 * To change this template use File | Settings | File Templates.
 */
define(['moduleBase','radio','tinycolor','vizcolors']
  ,function(moduleBase,radio,tinycolor,vizcolors){
  //"use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  function __lib(dummy){return dummy;}
  var protos={
    _name:'protos'
    ,_initialized:false
    ,init:function(){
      if(this._initialized) {
        return;
      }
      console.info(this._name+'.init()');
      this._initialized=true;
      var __entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
        };//-__entityMap
      String.prototype.escapeHTML = function() {
        return String(this).replace(/[&<>"'\/]/g, function (s) {
          return __entityMap[s];
        });
        }; //-escapeHTML
      String.prototype.qo=function(){
        var s=this.toString();
        return $(s);
        }; //-qo
      String.prototype._ropf=function(o,fn){
        var n=this.toString();
        Object.defineProperty(o,n, {
          get: fn
          ,set: function() { throw "Cannot set Read Only Property '"+n+"'"; }
          ,enumerable: true
          ,configurable: false
        });
        }; //-_ropf
      String.prototype._ropq=function(o,sel){
        var n=this.toString();
        Object.defineProperty(o, n, {
          get: function(){
            return $(sel);
          }
          ,set: function() { throw "Cannot set Read Only Property '"+n+"'"; }
          ,enumerable: true
          ,configurable: false
        });
        }; //-_ropq
      String.prototype._ropqc=function(o,sel){
        var n=this.toString();
        Object.defineProperty(o, n, {
          get: function(){
            /*jshint -W059 */
            var a=arguments;
            if (!a.callee.cache) {
              a.callee.cache=$(sel);
            }
            return a.callee.cache;
          }
          ,set: function() { throw "Cannot set Read Only Property '"+n+"'"; }
          ,enumerable: true
          ,configurable: false
        });
        }; //-_ropqc
      String.prototype._pf=function(o,getFunction,setFunction){
        var n=this.toString();
        Object.defineProperty(o, n, {
          get: getFunction
          ,set: setFunction
          ,enumerable: true
          ,configurable: false
        });
        }; //-_pf
      's'._ropf(String.prototype,function(){
        //noinspection JSUnresolvedVariable
        console.log(this.toString(),this.q[0]);
        //noinspection JSUnresolvedVariable
        return this.q;
        }); // -q
      'q'._ropf(String.prototype,function(){
        return this.qo();
        }); // -q
      'e'._ropf(String.prototype,function(){
        var q=this.qo();
        console.info(this+':',q.length);
        //noinspection JSUnresolvedFunction
        var dp=q.getDomPath();
        console.info(dp);
        var t='2px dotted red';
        //noinspection JSDeprecatedSymbols
        location.href='aip://clip/'+escape(dp);
        return q
          .css('border',t)
          .css('border-left',t)
          .css('border-top',t)
          .css('border-bottom',t)
          .css('border-right',t)
          .css('box-shadow','inset 0px 0px 10px 2px #F00')
          .css('-webkit-filter','brightness(5) contrast(1.6)');
        });
      'ee'._ropf(String.prototype,function(){
        var q=this.qo();
        console.info(this+':',q.length);
        return q
          .css('border','')
          .css('border-left','')
          .css('border-top','')
          .css('border-bottom','')
          .css('border-right','')
          .css('box-shadow','')
          .css('-webkit-filter','');
        });
      'exists'._ropf(String.prototype,function(){
        var s=this.toString();
        //noinspection JSUnresolvedVariable
        return s.q.length!==0;
        });
      '_one'._ropf(String.prototype,function(){
        var s=this.toString();
        //noinspection JSUnresolvedVariable
        return s.q.length===1;
        });
      'p'._ropf(String.prototype,function(){
        var s=this.toString();
        //noinspection JSUnresolvedVariable
        if (s.exists) {
          //noinspection JSUnresolvedVariable
          if (s.q.length===1) {
            //noinspection JSUnresolvedVariable,JSUnresolvedFunction
            return s.q.getDomPath();
          }
          var a=[];
          //noinspection JSUnresolvedVariable
          s.q.each(function(){
            var me=$(this);
            //noinspection JSUnresolvedFunction
            a.push(me.getDomPath());
          });
          return a;
        }
        return null;
        });
      'singleSpace'._ropf(String.prototype,function(){
        var s=this.toString();
        return s.replace(/\s{2,}/g, ' ');
        });
      '_trim'._ropf(String.prototype,function(){
        var s=this.toString();
        return $.trim(s);
        });
      '_abbr'._ropf(String.prototype,function(){
        var s=this.toString();
        if (s==='') {
          return '';
        }
        s=s.replace(/[^a-zA-Z0-9]/g,' ');
        var a=[];
        var x;
        var pType=null;
        var m={su:true,sl:true,sn:true,nl:true,nu:true,lu:true,uu:true,ln:true,un:true};
        for(x=0;x<s.length;x=x+1){
          var e=s.substr(x,1);
          var isType;//ulns
          if ('0123456789'.indexOf(e)>=0){isType='n';
          }else if('abcdefghijklmnopqrstuvwxyz'.indexOf(e)>=0){isType='l';
          }else if('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(e)>=0){isType='u';
          }else{isType='s';
          }
          if(pType===null){
            if(isType!=='s'){
              a.push(e);
            }
          }else{
            if (m[pType+isType]){
              a.push(e);
            }
          }
          pType=isType;
        }
        return a.join('').toUpperCase();
        });
      '_numwrap'._ropf(String.prototype,function(){
        var s=this.toString();
        return '&#9129;'+s+'&#9131;';
        });
      '_f4'._ropf(String.prototype,function(){
        var s=this.toString();
        setTimeout(function(){
          //noinspection JSUnresolvedVariable
          s.q.focus();
        },4000);
        //noinspection JSUnresolvedVariable
        return s.q[0];
        });
      '_viz'._ropf(String.prototype,function(){
        var s=this.toString();
        function comp(s){
          var co=tinycolor(s);
          var hsl=co.toHsl();
          var c=1;
          var a=0.5;
          var b=0.5;
          return Math.sqrt(a * hsl.h * a * hsl.h + b * hsl.s * b * hsl.s + c * hsl.l * c * hsl.l);
        }
        var v0=comp(s);
        var at=10000;//Number.Infinity;
        var found='';
        vizcolors.forEach(function(cc){
          var v=comp(cc.c);
          //console.log('v',v);
          var dif=Math.abs(v0-v);
          //console.log('dif',dif);
          if (dif<at) {
            //console.log('found..',cc);
            at=dif;
            found=cc;
          }
        });
        if (found===''){
          return '';
        }
        return found;
        });
      '_l'._ropf(String.prototype,function(){
        var s=this.toString();
        console.log(s);
        });
      '_i'._ropf(String.prototype,function(){
        var s=this.toString();
        console.info(s);
        });
      '_w'._ropf(String.prototype,function(){
        var s=this.toString();
        console.warn(s);
        });
      'delimiter'._ropf(String.prototype,function(){
        var s=this.toString();
        //var dels=String.fromCharCode(13)+String.fromCharCode(9)+'|:.,;_=-'+' ';
        var dels=String.fromCharCode(13)+String.fromCharCode(9)+'|,;'+' '+':.-_';
        dels=dels.split('');
        var x;
        for (x=0;x<dels.length;x=x+1) {
          var ss=dels[x];
          if (s.indexOf(ss)!==-1) {
            return ss;
          }
        }
        return '';
        });
      String.prototype.inList=function(list,del){
        var s=this.toString();
        if (typeof list==='string') {
          //noinspection JSUnresolvedVariable
          var d=list.delimiter;
          if (d==='') {
            d=' ';
          }
          del=d;
          list=list.split(del);
        }
        return list.indexOf(s)!==-1;
        };
      String.prototype.hasItem=function(item,del){
        var s=this.toString();
        return item.inList(s,del);
        };
      String.prototype._abbr2=function(allows){
        var s=this.toString();
        if (s==='') {
          return '';
        }
        var allows2=allows.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        var re=new RegExp('[^a-zA-Z0-9'+allows2+']','g');
        s=s.replace(re,' ');
        var s0=s.replace(/ /g,'');
        var a=[];
        var x;
        var pType=null;
        var m={su:true,sl:true,sn:true,nl:true,nu:true,lu:true,uu:true,ln:true,un:true};
        for(x=0;x<s.length;x=x+1){
          var e=s.substr(x,1);
          var isType;//ulns
          if ('0123456789'.indexOf(e)>=0){isType='n';
          }else if('abcdefghijklmnopqrstuvwxyz'.indexOf(e)>=0){isType='l';
          }else if('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(e)>=0){isType='u';
          }else{isType='s';
          }
          if(pType===null){
            if(isType!=='s'){
              a.push(e);
            }else{
              if (allows.indexOf(e)>=0) {a.push(e);}
            }
          }else{
            if (m[pType+isType]){
              a.push(e);
            }else{
              if (allows.indexOf(e)>=0) {a.push(e);}
            }
          }
          pType=isType;
        }
        if (a.length===1) {
          a.push(s0.substr(1,2));
        }
        return a.join('').toUpperCase();
        };
      String.prototype._bc=function(o,that){
        return radio(this.toString()).broadcast(o,that);
        };
      String.prototype._sub=function(a1,a2,a3,a4){
        return radio(this.toString()).subscribe(a1,a2,a3,a4);
        };
    }
  };
  __lib(String.prototype.escapeHTML);
  __lib(String.prototype.qo);
  __lib(String.prototype._ropf);
  __lib(String.prototype._ropq);
  __lib(String.prototype._ropqc);
  __lib(String.prototype.s);
  __lib(String.prototype.q);
  __lib(String.prototype.e);
  //noinspection JSUnresolvedVariable
  __lib(String.prototype.ee);
  //noinspection JSUnresolvedVariable
  __lib(String.prototype.exists);
  //noinspection JSUnresolvedVariable
  __lib(String.prototype._one);
  //noinspection JSUnresolvedVariable
  __lib(String.prototype.p);
  //noinspection JSUnresolvedVariable
  __lib(String.prototype.singleSpace);
  //noinspection JSUnresolvedVariable
  __lib(String.prototype._trim);
  //noinspection JSUnresolvedVariable
  __lib(String.prototype._abbr);
  //noinspection JSUnresolvedVariable
  __lib(String.prototype._numwrap);
  //noinspection JSUnresolvedVariable
  __lib(String.prototype._f4);
  //noinspection JSUnresolvedVariable
  __lib(String.prototype._viz);
  //noinspection JSUnresolvedVariable
  __lib(String.prototype._l);
  //noinspection JSUnresolvedVariable
  __lib(String.prototype._i);
  //noinspection JSUnresolvedVariable
  __lib(String.prototype._w);
  //noinspection JSUnresolvedVariable
  __lib(String.prototype.delimiter);
  __lib(String.prototype.inList);
  __lib(String.prototype.hasItem);
  __lib(String.prototype._abbr2);
  __lib(String.prototype._bc);
  __lib(String.prototype._sub);
  moduleBase.seed(protos);
  return protos;
});
