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
      (function() {
        var fnNamePrefixRegex = /^[\S\s]*?function\s*/;
        var fnNameSuffixRegex = /[\s\(\/][\S\s]+$/;
        function _name() {
          var name = "";
          if (this === Function || this === Function.prototype.constructor) {
            name = "Function";
          }
          else if (this !== Function.prototype) {
            name = (this.toString()).replace(fnNamePrefixRegex, "").replace(fnNameSuffixRegex, "");
          }
          return name;
        }
        // Inspect the polyfill-ability of this browser
        var needsPolyfill = !("name" in Function.prototype && "name" in (function x() {}));
        var canDefineProp = typeof Object.defineProperty === "function" &&
          (function() {
            var result;
            try {
              Object.defineProperty(Function.prototype, "_xyz", {
                get: function() {
                  return "blah";
                },
                configurable: true
              });
              result = Function.prototype._xyz === "blah";
              delete Function.prototype._xyz;
            }
            catch (e) {
              result = false;
            }
            return result;
          }());
        // Add the "private" property for testing, even if the real property can be polyfilled
        Function.prototype._name = _name;
        // Polyfill it!
        if (canDefineProp && needsPolyfill) {
          Object.defineProperty(Function.prototype, "name", {
            get: _name
          });
        }
      }());
      (function(){
        /*
         * http://blog.stevenlevithan.com/archives/date-time-format
         * Date Format 1.2.3
         * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
         * MIT license
         *
         * Includes enhancements by Scott Trenda <scott.trenda.net>
         * and Kris Kowal <cixar.com/~kris.kowal/>
         *
         * Accepts a date, a mask, or a date and a mask.
         * Returns a formatted version of the given date.
         * The date defaults to the current date/time.
         * The mask defaults to dateFormat.masks.default.
         */
        var dateFormat = function () {
        	var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        		timezoneClip = /[^-+\dA-Z]/g,
        		pad = function (val, len) {
        			val = String(val);
        			len = len || 2;
        			while (val.length < len) val = "0" + val;
        			return val;
        		};
        	// Regexes and supporting functions are cached through closure
        	return function (date, mask, utc) {
        		var dF = dateFormat;
        		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
        			mask = date;
        			date = undefined;
        		}
        		// Passing date through Date applies Date.parse, if necessary
        		date = date ? new Date(date) : new Date;
        		if (isNaN(date)) throw SyntaxError("invalid date");
        		mask = String(dF.masks[mask] || mask || dF.masks["default"]);
        		// Allow setting the utc argument via the mask
        		if (mask.slice(0, 4) == "UTC:") {
        			mask = mask.slice(4);
        			utc = true;
        		}
        		var	_ = utc ? "getUTC" : "get",
        			d = date[_ + "Date"](),
        			D = date[_ + "Day"](),
        			m = date[_ + "Month"](),
        			y = date[_ + "FullYear"](),
        			H = date[_ + "Hours"](),
        			M = date[_ + "Minutes"](),
        			s = date[_ + "Seconds"](),
        			L = date[_ + "Milliseconds"](),
        			o = utc ? 0 : date.getTimezoneOffset(),
        			flags = {
        				d:    d,
        				dd:   pad(d),
        				ddd:  dF.i18n.dayNames[D],
        				dddd: dF.i18n.dayNames[D + 7],
        				m:    m + 1,
        				mm:   pad(m + 1),
        				mmm:  dF.i18n.monthNames[m],
        				mmmm: dF.i18n.monthNames[m + 12],
        				yy:   String(y).slice(2),
        				yyyy: y,
        				h:    H % 12 || 12,
        				hh:   pad(H % 12 || 12),
        				H:    H,
        				HH:   pad(H),
        				M:    M,
        				MM:   pad(M),
        				s:    s,
        				ss:   pad(s),
        				l:    pad(L, 3),
        				L:    pad(L > 99 ? Math.round(L / 10) : L),
        				t:    H < 12 ? "a"  : "p",
        				tt:   H < 12 ? "am" : "pm",
        				T:    H < 12 ? "A"  : "P",
        				TT:   H < 12 ? "AM" : "PM",
        				Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
        				o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
        				S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
        			};
        		return mask.replace(token, function ($0) {
        			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        		});
        	};
        }();
        // Some common format strings
        dateFormat.masks = {
        	"default":      "ddd mmm dd yyyy HH:MM:ss",
        	shortDate:      "m/d/yy",
        	mediumDate:     "mmm d, yyyy",
        	longDate:       "mmmm d, yyyy",
        	fullDate:       "dddd, mmmm d, yyyy",
        	shortTime:      "h:MM TT",
        	mediumTime:     "h:MM:ss TT",
        	longTime:       "h:MM:ss TT Z",
        	isoDate:        "yyyy-mm-dd",
        	isoTime:        "HH:MM:ss",
        	isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
        	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        };
        // Internationalization strings
        dateFormat.i18n = {
        	dayNames: [
        		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
        		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        	],
        	monthNames: [
        		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        	]
        };
        // For convenience...
        Date.prototype.format = function (mask, utc) {
        	return dateFormat(this, mask, utc);
        };
      }());
      (function($){
          $.fn.getStyleObject = function(){
              var dom = this.get(0);
              var style;
              var returns = {};
              if(window.getComputedStyle){
                  var camelize = function(a,b){
                      return b.toUpperCase();
                  }
                  style = window.getComputedStyle(dom, null);
                  for(var i=0;i<style.length;i++){
                      var prop = style[i];
                      var camel = prop.replace(/\-([a-z])/g, camelize);
                      var val = style.getPropertyValue(prop);
                      returns[camel] = val;
                  }
                  return returns;
              }
              if(dom.currentStyle){
                  style = dom.currentStyle;
                  for(var prop in style){
                      returns[prop] = style[prop];
                  }
                  return returns;
              }
              return this.css();
          }
          $.fn.cloneWithCSS = function() {
              styles = {};
              $this = $(this);
              $clone = $this.clone();
              $clone.css( $this.getStyleObject() );
              children = $this.children().toArray();
              var i = 0;
              while( children.length ) {
                  $child = $( children.pop() );
                  styles[i++] = $child.getStyleObject();
                  $child.children().each(function(i, el) {
                      children.push(el);
                  })
              }
              cloneChildren = $clone.children().toArray()
              var i = 0;
              while( cloneChildren.length ) {
                  $child = $( cloneChildren.pop() );
                  $child.css( styles[i++] );
                  $child.children().each(function(i, el) {
                      cloneChildren.push(el);
                  })
              }
              return $clone
          }
      })(jQuery);
      (function($) {
       $.extend($.expr[":"], {
        scrollable: function(element) {
         var vertically_scrollable, horizontally_scrollable;
         if ($(element).css('overflow') == 'scroll' || $(element).css('overflowX') == 'scroll' || $(element).css('overflowY') == 'scroll') return true;
         vertically_scrollable = (element.clientHeight < element.scrollHeight) && (
         $.inArray($(element).css('overflowY'), ['scroll', 'auto']) != -1 || $.inArray($(element).css('overflow'), ['scroll', 'auto']) != -1);
         if (vertically_scrollable) return true;
         horizontally_scrollable = (element.clientWidth < element.scrollWidth) && (
         $.inArray($(element).css('overflowX'), ['scroll', 'auto']) != -1 || $.inArray($(element).css('overflow'), ['scroll', 'auto']) != -1);
         return horizontally_scrollable;
        }
       });
      }(jQuery));
    } //-init
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
