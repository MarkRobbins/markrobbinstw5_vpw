/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/29/15
 * Time: 3:07 PM
 * To change this template use File | Settings | File Templates.
 */
define([],function(){
  "use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  //noinspection JSUnresolvedVariable
  var jQuery=window.jQuery;
  function __lib(dummy){
    return dummy;
  }
  var utils={
    _name:'utils'
    ,data:{
    }
    ,delay:function(ms){
      ms += new Date().getTime();
      console.log('delaying '+ms);
      while (new Date() < ms){__lib(ms);}
      console.log('delay released');
    } //-delay
    ,inheritFrom:function(obj,tgt) {
      var i;
      //console.log('inheritFrom..........'+arguments.callee.caller.name);
      var a=[];
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          tgt[i]=obj[i];
          a[a.length]=i;
        }else{
          console.log('not inheriting "'+i+'" in '+obj.name);
        }
      }
      //console.log('inheritedFrom '+obj.name,a);
    } //-inheritedFrom
    ,perf:function(n){
      this.data.perfs=this.data.perfs===undefined?{}:this.data.perfs;
      if (this.data.perfs[n]===undefined) {
        //noinspection JSUnresolvedVariable
        this.data.perfs[n]=performance.now();
      }else{
        //noinspection JSUnresolvedVariable
        console.log('perf:'+n+' took '+(performance.now()-this.data.perfs[n])+' ms');
        delete this.data.perfs[n];
      }
    } //-perf
    ,eachNode:function(object,fn,wantTypes,re,_bag){
      /*
       * Iterate object passing its members to fn, filtered by wantTypes and regular expression.
       *
       * Parameters:
       *   object: subject object
       *   fn:     callback - optional
       *     |
       *     signature: name,item,type,object,parent,depth,path,indexes
       *              |
       *              name:      the name of the member
       *              item:      the member
       *              type:      typeof member
       *              object:    in which member resides
       *              parent:    the parent of object
       *              depth:     zero based recursion depth
       *              path:      dot path of current object relative to passed object
       *              indexes:   object of indexes
       *                     |
       itemIndex:    position item was found in containing object
       itemDidIndex: index count of items done for containing object
       didIndex:     global index count of items done for passed object
       index:        global index count of items for passed object
       *   wantTypes: array of Javascript types, defaults to ['object'] - optional
       *   re:        regular expression to filter member names
       *   _bag:      internal, do not supply, but this it will be returned
       *
       * Returns:
       *   _bag: bag containing collections
       *       |
       *
       *
       *
       *
       */
      var itemIndex= -1, itemDidIndex=-1, name, item, rv,indexes, dupe, returnItem;
      if (_bag===undefined){
        var bag={
          index:-1
          ,didIndex:-1
          ,_parents:[]
          ,_paths:[]
          ,did:[]
          ,returns:{items:[],dupes:[]}
        };
        Object.defineProperty(bag,'depth',{
          get:function(){
            return this._parents.length;
          }
          ,set:function(){}
          ,enumerable:true,configurable: false
        });
        Object.defineProperty(bag,'parent',{
          get:function(){
            return this._parents.length>0?this._parents[this._parents.length-1]:undefined;
          }
          ,set:function(v){this._parents.push(v);}
          ,enumerable:true,configurable: false
        });
        Object.defineProperty(bag,'parents',{
          get:function(){
            var a=[];var x;
            for(x=0;x<this._parents.length;x=x+1){
              a.push(this._parents[x]);
            }
            return a;
          }
          ,set:function(){}
          ,enumerable: true,configurable: false
        });
        Object.defineProperty(bag,'path',{
          get:function(){
            var p=this._paths.join('.');
            p=p===''?p:p+'.';
            return p+this._name.toString();
          }
          ,set:function(){}
          ,enumerable: true,configurable: false
        });
        bag.push=function(){
          this._parents.push(this._object);
          this._paths.push(this._name);
          return utils.eachNode(this._item,fn,wantTypes,re,this);
        };
        bag.pop=function(rv){
          this._item=this._parents.pop();
          this._paths.pop();
          this._name=this._paths.length>0?this._paths[this._paths.length-1]:'';
          if (rv===null){this._breaking=true;}
          if (this.depth===0) {
            return this;
          }
          return rv;
        };
        bag.path=function(){
          var s='';
          var x;
          for (x=0;x<this._parents.length;x=x+1){
            s+='.'+this._parents[x]._name;
          }
          return s;
        };
        _bag=bag;
      } // if no bag
      fn=fn!==undefined?fn:function(name,item,type,object,parent,depth,path,indexes){return true;};
      wantTypes=wantTypes?wantTypes:['object'];
      _bag._object=object;
      for(name in object){
        if(object.hasOwnProperty(name)){
          item=object[name];
          _bag._name=name;
          _bag._item=item;
          itemIndex=itemIndex+1;
          _bag.index=_bag.index+1;
          var type=typeof item;
          if (('function'===type||'object'===type)&&item!==null){
            if (_bag.did.indexOf(item)!==-1){
              indexes={
                itemIndex:itemIndex
                ,itemDidIndex:itemDidIndex
                ,didIndex:_bag.didIndex
                ,index:_bag.index
              };
              dupe={
                item:item
                ,name:name
                ,object:object
                ,type:type
                ,parent:_bag.parent
                ,depth:_bag.depth
                ,path:_bag.path
                ,indexes:indexes
              };
              _bag.returns.dupes.push(dupe);
              continue;
            }else{
              _bag.did.push(item);
            }
          }
          if(wantTypes.indexOf(type)!==-1){
            var doit=re===undefined?true:re.test(name);
            if (doit){
              itemDidIndex=itemDidIndex+1;
              _bag.didIndex=_bag.didIndex+1;
              // undefined: no push, true: push, false: no push, -1: no push, 'done':abort level, 'finish': abort all
              indexes={
                itemIndex:itemIndex
                ,itemDidIndex:itemDidIndex
                ,didIndex:_bag.didIndex
                ,index:_bag.index
              };
              rv=fn(name,item,type,object,_bag.parent,_bag.depth,_bag.path,indexes);
              if (rv==='done'){
                break;
              }else if (rv==='finish'){
                return _bag.pop(null);
              }
              if (rv){ // '==' is OK here
                indexes={
                  itemIndex:itemIndex
                  ,itemDidIndex:itemDidIndex
                  ,didIndex:_bag.didIndex
                  ,index:_bag.index
                };
                returnItem={
                  name:name
                  ,item:item
                  ,object:object
                  ,type:type
                  ,parent:_bag.parent
                  ,depth:_bag.depth
                  ,path:_bag.path
                  ,indexes:indexes
                };
                _bag.returns.items.push(returnItem);
              }else if (!rv||rv===-1||rv===undefined){
                // nada
              }
            }
          } // not want type
          if (type==='object'&&item!==null){
            rv=_bag.push();
            if(rv===null){
              return _bag.pop(rv);
            }
          }
          if (_bag._breaking){
            break;
          }
        }
      }
      return _bag.pop();
    } //-eachNode
    ,blackHtml:function(){
      var color = document.documentElement.style.backgroundColor;
      document.documentElement.style.backgroundColor = "black";
      //noinspection JSUnresolvedFunction
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.target.nodeName === "BODY") {
            //noinspection JSUnresolvedFunction
            observer.disconnect();
            document.documentElement.style.backgroundColor = color || "";
          }
        });
      });
      //noinspection JSUnresolvedFunction
      observer.observe(document, { childList: true, subtree: true });
    } //-blackHtml
    ,addStylesheet:function(url,id,forChromeExtension){
      var style = document.createElement('link');
      style.rel = 'stylesheet';
      style.type = 'text/css';
      if(forChromeExtension){
        //noinspection JSUnresolvedVariable,JSUnresolvedFunction
        style.href = chrome.extension.getURL(url);
      }else{
        style.href = url;
      }
      if (id) {
        style.id=id;
      }
      (document.head||document.documentElement).appendChild(style);
    } //-addStylesheet
    ,addScript:function(url,id,forChromeExtension){
      var el = document.createElement('script');
      el.type = 'text/javascript';
      if(forChromeExtension){
        //noinspection JSUnresolvedVariable,JSUnresolvedFunction
        el.src = chrome.extension.getURL(url);
      }else{
        el.src = url;
      }
      if (id) {
        el.id=id;
      }
      (document.head||document.documentElement).appendChild(el);
    } //-addScript
    ,deleteNamedStyle:function(name) {
      this.data.namedStyles=this.data.namedStyles||[];
      var i=this.data.namedStyles.indexOf(name);
      if (i!==-1) {
        this.data.namedStyles=this.data.namedStyles.splice(i,1);
        var qo=$('#'+name);
        if (qo.length===1) {
          qo.remove();
        }else{
          if (qo.length>1) {
            console.error('multiple element matches for named style:'+name);
            qo.remove();
          }else{
            console.error('zero element matches for named style:'+name);
          }
        }
      }else{
        console.warn('named style not found:'+name);
      }
    } //-deleteNamedStyle
    ,updateNamedStyle:function(styleStr,name,fn) {
      if (name===undefined) {
        name='defaultStyle';
      }
      this.data.namedStyles=this.data.namedStyles||[];
      if (this.data.namedStyles.indexOf(name)===-1) {
        this.data.namedStyles.push(name);
      }
      var st=document.getElementById(name);
      if (st!==null) {
        //st=st[0];
        st.innerHTML=styleStr;
      }else{
        var head = document.getElementsByTagName("HEAD")[0];
        var ele = head.appendChild(window.document.createElement( 'style' ));
        var $style=$(ele);
        $style.attr('id',name);
        if (fn!==undefined) {
          $style.on('load',fn);
        }
        ele.innerHTML = styleStr;
      }
    } //-updateNamedStyle
    ,addScripting:function(s,id){
      var script = document.createElement("script");
      // Add script content
      script.innerHTML = s;
      if (id!==undefined) {
        script.id=id;
      }
      // Append
      document.head.appendChild(script);
    } //-addScripting
    ,addScriptingFn:function(fn){
      var s='';
      s+='('+fn+')();';
      this.addScripting(s);
    } //-addScriptingFn
    ,qOf:function(q){
      if (typeof q==='function') {return q();}
      if (q instanceof jQuery) {return q;}
      if (typeof q==='string') {//noinspection JSUnresolvedVariable
        return q.q;}
      if (typeof q==='object') {return q;}
    } //-q
    ,isInDocument:function(el) {
      var html = document.body.parentNode;
      while (el) {
        if (el === html) {
          return true;
        }
        el = el.parentNode;
      }
      return false;
    } //-isInDocument
    ,bodyMsg:function(s){
      $('body').attr('data-msg',s);
    } //
    ,timeDifference:function(earlierDate,laterDate){
      var tot = laterDate.getTime() - earlierDate.getTime();
      var o = {};
      o.days = Math.floor(tot/1000/60/60/24);
      tot -= o.days*1000*60*60*24;
      o.hours = Math.floor(tot/1000/60/60);
      tot -= o.hours*1000*60*60;
      o.minutes = Math.floor(tot/1000/60);
      tot -= o.minutes*1000*60;
      o.seconds = Math.floor(tot/1000);
      return o;
    }
    ,findDirection:function(me,all,dir,xtol,ytol){
      //noinspection JSValidateTypes
      xtol=xtol===undefined?5:xtol;
      //noinspection JSValidateTypes
      ytol=ytol===undefined?5:ytol;
      me=typeof me==='string'?me.q:me;
      all=typeof all==='string'?all.q:all;
      var res=[];
      all.each(function(){
        var vv=$(this);
        res.push({r:this.getBoundingClientRect(),q:vv});
      });
      function center(r){
        var x=r.left+r.width/2;
        var y=r.top+r.height/2;
        return {x:x,y:y};
      }
      function dist(r1,r2){
        var cp1=center(r1);
        var cp2=center(r2);
        var xx=Math.abs(cp1.x-cp2.x);
        var yy=Math.abs(cp1.y-cp2.y);
        return Math.sqrt(xx * xx + yy * yy);
      }
      function xyc(r1,r2){
        var cp1=center(r1);
        var cp2=center(r2);
        var rv={};
        rv.x=cp2.x-cp1.x;
        rv.y=cp2.y-cp1.y;
        return rv;
      }
      var r=me.get(0).getBoundingClientRect();
      //var cp=center(r);
      // dist xc yc
      res.forEach(function(v){
        v.dist=dist(r,v.r);
        v.xyc=xyc(r,v.r);
      });
      var cur=null;
      function putcur(v,max){
        if (cur===null) {
          cur=v;
          return;
        }
        //noinspection JSValidateTypes
        max=max===undefined?false:max;
        if (!max) {
          if (v.dist<cur.dist) {cur=v;}
        }else{
          if (v.dist>cur.dist) {cur=v;}
        }
      }
      res.forEach(function(v){
        if (v.q.get(0)===me.get(0)) {
          return;
        }
        if (dir==='left') {
          if (v.xyc.y>ytol||v.xyc.y<-ytol) {return;}
          if (v.xyc.x>=0) {return;}
          putcur(v);
        }else if (dir==='right') {
          if (v.xyc.y>ytol||v.xyc.y<-ytol) {return;}
          if (v.xyc.x<=0) {return;}
          putcur(v);
        }else if (dir==='up') {
          if (v.xyc.x>xtol||v.xyc.x<-xtol) {return;}
          if (v.xyc.y>=0) {return;}
          putcur(v);
        }else if (dir==='down') {
          if (v.xyc.x>xtol||v.xyc.x<-xtol) {return;}
          if (v.xyc.y<=0) {return;}
          putcur(v);
        }else if (dir==='home') {
          if (v.xyc.y>ytol||v.xyc.y<-ytol) {return;}
          if (v.xyc.x>=0) {return;}
          putcur(v,true);
        }else if (dir==='end') {
          if (v.xyc.y>ytol||v.xyc.y<-ytol) {return;}
          if (v.xyc.x<=0) {return;}
          putcur(v,true);
        }else if (dir==='pgup') {
          if (v.xyc.x>xtol||v.xyc.x<-xtol) {return;}
          if (v.xyc.y>=0) {return;}
          putcur(v,true);
        }else if (dir==='pgdn') {
          if (v.xyc.x>xtol||v.xyc.x<-xtol) {return;}
          if (v.xyc.y<=0) {return;}
          putcur(v,true);
        }
      });
      if (cur===null) {
        return me;
      }
      return cur.q;
    }
    ,getClassOf:function(obj) {
      return Object.prototype.toString.call(obj).slice(8, -1);
    }//-getClassOf
    ,sled:function(hr){
      window.noUnloadConfirm=true;
      window.location=hr;
      delete window.noUnloadConfirm;
    }

    ,init:function(){
    }
  };
  __lib(utils.inheritFrom);
  __lib(utils.delay);
  __lib(utils.perf);
  __lib(utils.eachNode);
  __lib(utils.blackHtml);
  __lib(utils.addStylesheet);
  __lib(utils.addScript);
  __lib(utils.deleteNamedStyle);
  __lib(utils.addScriptingFn);
  __lib(utils.qOf);
  __lib(utils.isInDocument);
  __lib(utils.bodyMsg);
  __lib(utils.timeDifference);
  __lib(utils.findDirection);
  __lib(utils.getClassOf);
  __lib(utils.sled);
  return utils;
});