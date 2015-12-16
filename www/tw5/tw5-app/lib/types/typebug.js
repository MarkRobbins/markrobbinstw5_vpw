define([],function(){
  //"use strict";
  var typeBug={
    _name:'typeBug'
    ,_bug:false
    ,_bugs:{
    }
    ,_bugConsole:false
    ,_bugRadio:false
    ,bugOn:function(v){
      if (v===undefined) {
        v=true;
      }
      this._bug=v;
      return this;
    }
    ,bugBoth:function(v){
      if (v===undefined) {
        v=true;
      }
      this._bugConsole=v;
      this._bugRadio=v;
      return this;
    }
    ,bugFn:function(n){
      this._bugs[n]=true;
    }
    ,unbugFn:function(n){
      delete this._bugs[n];
    }
    ,bug:function(){
      //console.log(arguments.callee.toString());
      if (!this._bug) {
        return;
      }
      var callerName='unk';
      try { throw new Error(); }
      catch (e) {
          //var re = /(\w+)@|at (\w+) \(/g, st = e.stack, m;
          var re = /\s? at \s?([a-zA-Z_0-9\.]+) \(/g, st = e.stack, m;
          //\s? at \s?([a-zA-Z_0-9\.]+) \(
          re.exec(st), m = re.exec(st);
          //console.log('m',m);
          if (m!==null) {
            callerName = m[1];// || m[2];
          }
      }
      if (this._bugs[callerName]===false) {
        return;
      }
      //arguments.callee = arguments.callee.caller;
      var args = [].slice.call(arguments);
      var now=new Date();
      var dts=now.format('hh.MM.ss.l');
      args.unshift(dts,callerName);
      if (this._bugRadio) {
        var o={};
        o.when=new Date();
        o['arguments']=args;
        'bug'._bc(o,this);
      }
      if (console&&this._bugConsole) {
        console.debug.apply(console,args);
      }
    }
  };
  return typeBug;
});
