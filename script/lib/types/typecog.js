/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/28/15
 * Time: 9:02 AM
 * To change this template use File | Settings | File Templates.
 */
define([],function(){
  "use strict";
  var typeCog={
    // see https://jsbin.com/jepizosobo/edit?html,js,console
    create:function(){
      var that=this; // this is 'Instance:'
      function init(){
        if (that.ctor===undefined) { // user did not provide constructor
          //that.ctor=new Function(''); // BAD WAY
          // make a generic constructor with correct name
          that.ctor=eval('(function '+that._name+'(){})');
        }
        // preserve constructor for reuse
        that._ctor=that.ctor;
        delete that.ctor;
        var i;
        //noinspection JSUnresolvedVariable
        if (typeof that._static==='object') { // put statics on constructor
          //noinspection JSUnresolvedVariable
          for (i in that._static) {
            //noinspection JSUnresolvedVariable
            if(that._static.hasOwnProperty(i)){
              if (i!=='_name') {                // ignore convention
                that._ctor[i]=that._static[i];
              }
            }
          }
        }
        // doing it whole here, should be a cleaned-of-convention duplicate object
        that._ctor.prototype=that.template;
        that._ctor.name=that._name;
        // this line confuses me, something should be done, do I need it?
        //that._ctor.prototype.constructor=that._ctor; // produces 'constructor' in instance
      }
      // look in cache
      if (that._ctor===undefined) {
        init();
      }
      // NOW THE HARD PART - HOW TO INVOKE
      var rv;
      //rv=construct(fn,arguments);
      //rv= new fn();
      rv=new that._ctor();
      // HERE
      // fn.prototype.constructor=fn;
      // My problem at this point is getting instance.constructor to
      // not be 'Object' but if I include the line above
      // it shows 'constructor' as iterable
      // however THIS LINE WORKS, but why? BUT Why do I have to do it here, after construction?
      rv.constructor.prototype.constructor=that._ctor;
      // NO that._ctor.prototype.constructor=that._ctor; puts 'constructor' on instance
      return rv;
    } //-create
    ,seed:function(that){
      that.create=this.create;
    } //-seed
  };
  return typeCog;
});
