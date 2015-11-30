/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/28/15
 * Time: 8:46 AM
 * To change this template use File | Settings | File Templates.
 */
define([],function(){
  "use strict";
  var stackTraceParser={
    _name:'stackTraceParser'
    ,UNKNOWN_FUNCTION : '<unknown>'
    ,parse: function(stackString) {
      /**
       * This parses the different stack traces and puts them into one format
       * This borrows heavily from TraceKit (https://github.com/occ/TraceKit)
       */
      var chrome = /^\s*at (?:(?:(?:Anonymous function)?|((?:\[object object\])?\S+(?: \[as \S+\])?)) )?\(?((?:file|http|https):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        gecko = /^(?:\s*(\S*)(?:\((.*?)\))?@)?((?:file|http|https).*?):(\d+)(?::(\d+))?\s*$/i,
        node  = /^\s*at (?:((?:\[object object\])?\S+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        lines = stackString.split('\n'),
        stack = [],
        parts,
        element;
      for (var i = 0, j = lines.length; i < j; ++i) {
        if ((parts = gecko.exec(lines[i]))) {
          element = {
            'file': parts[3],
            'methodName': parts[1] || this.UNKNOWN_FUNCTION,
            'lineNumber': +parts[4],
            'column': parts[5] ? +parts[5] : null
          };
        } else if ((parts = chrome.exec(lines[i]))) {
          element = {
            'file': parts[2],
            'methodName': parts[1] || this.UNKNOWN_FUNCTION,
            'lineNumber': +parts[3],
            'column': parts[4] ? +parts[4] : null
          };
        } else if ((parts = node.exec(lines[i]))) {
          element = {
            'file': parts[2],
            'methodName': parts[1] || this.UNKNOWN_FUNCTION,
            'lineNumber': +parts[3],
            'column': parts[4] ? +parts[4] : null
          };
        } else {
          continue;
        }
        stack.push(element);
      }
      return stack;
    } //-parse
  };
  return stackTraceParser;
});
