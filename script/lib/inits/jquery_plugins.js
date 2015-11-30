/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 11/28/15
 * Time: 5:18 AM
 * To change this template use File | Settings | File Templates.
 */

define([],function(){
  "use strict";
  //noinspection JSUnresolvedVariable
  var $=window.$;
  //noinspection JSUnresolvedVariable
  var jQuery=window.jQuery;
  var jqueryPlugins={
    _name:'jqueryPlugins'
    ,init:function(){
      console.info(this._name+'.init()');
      // $.replaceText
      (function($){
        $.fn.replaceText = function( search, replace, textOnly ) {
          return this.each(function(){
            var node = this.firstChild,val,newVal,remove = [];
            if ( node ) {
              do {
                if ( node.nodeType === 3 ) {
                  val = node.nodeValue;newVal = val.replace( search, replace );
                  if ( newVal !== val ) {
                    if ( !textOnly && /</.test( newVal ) ) {
                      $(node).before( newVal );remove.push( node );
                    } else {
                      node.nodeValue = newVal;
                    }
                  }
                }
                node = node.nextSibling;
              } while ( node );
            }
            if(remove.length){
              $(remove).remove();
            }
          });
        };
      }(jQuery));
      // $.visibles
      (function($){
        $.fn.visibles = function() {
          return this.filter(function(){
            //noinspection JSUnresolvedFunction
            return !this.isVisible();
          });
        };
      }(jQuery));
      // $.withText
      //noinspection JSUnresolvedVariable
      (function($){
        $.fn.withText = function( search ) { //+ text_only second arg unused
          var rv=this.contents().filter(
            function(){
              if (this.nodeType!==3) {
                return false;
              }
              //var me=$(this);
              var txt=this.nodeValue;
              if (typeof search==='object') {//re
                return search.test(txt);
              }
              return txt.indexOf(search)!==-1;
            }
          );
          return rv.parent();
        };
      }(jQuery));
      // $.getDomPath
      (function($){
        var getStringForElement = function (el) {
          var string = el.tagName.toLowerCase();
          if (el.id) {
            string += "#" + el.id;
          }
          if (el.className) {
            if (typeof el.className==='string') {
              if (el.className!=='') {
                string += "." + el.className.replace(/  */g,' ').replace(/ /g, '.');
              }
            }
          }
          string=string.replace(/\.\.*/,'.');
          return string;
        };
        $.fn.getDomPath = function(string) {
          if (string === undefined) {
            string = true;
          }
          var p = [],el = $(this).first();
          el.parents().not('html').each(function() {
            p.push(getStringForElement(this));
          });
          p.reverse();
          p.push(getStringForElement(el[0]));
          return string ? p.join(" > ") : p;
        };
      }( jQuery ));
      // simulate lib
      (function($) {
        var rkeyEvent = /^key/,
          rmouseEvent = /^(?:mouse|contextmenu)|click/;
        $.fn.simulate = function( type, options ) {
          return this.each(function() {
            new $.simulate( this, type, options );
          });
        };
        $.simulate = function( elem, type, options ) {
          var method = $.camelCase( "simulate-" + type );
          this.target = elem;
          this.options = options;
          if ( this[ method ] ) {
            this[ method ]();
          } else {
            this.simulateEvent( elem, type, options );
          }
        };
        $.extend( $.simulate, {
          keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
          },
          buttonCode: {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2
          }
        });
        $.extend( $.simulate.prototype, {
          simulateEvent: function( elem, type, options ) {
            var event = this.createEvent( type, options );
            this.dispatchEvent( elem, type, event );
          },
          createEvent:function( type, options ) {
            if ( rkeyEvent.test( type ) ) {
              return this.keyEvent( type, options );
            }
            if ( rmouseEvent.test( type ) ) {
              return this.mouseEvent( type, options );
            }
          },
          mouseEvent: function( type, options ) {
            var event, eventDoc, doc, body;
            options = $.extend({
              bubbles: true,
              cancelable: (type !== "mousemove"),
              view: window,
              detail: 0,
              screenX: 0,
              screenY: 0,
              clientX: 1,
              clientY: 1,
              ctrlKey: false,
              altKey: false,
              shiftKey: false,
              metaKey: false,
              button: 0,
              relatedTarget: undefined
            }, options );
            if ( document.createEvent ) {
              event = document.createEvent( "MouseEvents" );
              event.initMouseEvent( type, options.bubbles, options.cancelable,
                options.view, options.detail,
                options.screenX, options.screenY, options.clientX, options.clientY,
                options.ctrlKey, options.altKey, options.shiftKey, options.metaKey,
                options.button, options.relatedTarget || document.body.parentNode );
              // IE 9+ creates events with pageX and pageY set to 0.
              // Trying to modify the properties throws an error,
              // so we define getters to return the correct values.
              if ( event.pageX === 0 && event.pageY === 0 && Object.defineProperty ) {
                eventDoc = event.relatedTarget.ownerDocument || document;
                doc = eventDoc.documentElement;
                body = eventDoc.body;
                Object.defineProperty( event, "pageX", {
                  get: function() {
                    return options.clientX +
                      ( (doc && doc.scrollLeft) || (body && body.scrollLeft) || 0 ) -
                      ( (doc && doc.clientLeft) || (body && body.clientLeft) || 0 );
                  }
                });
                Object.defineProperty( event, "pageY", {
                  get: function() {
                    return options.clientY +
                      ( (doc && doc.scrollTop) || (body && body.scrollTop) || 0 ) -
                      ( (doc && doc.clientTop) || (body && body.clientTop) || 0 );
                  }
                });
              }
            } else if ( document.createEventObject ) {
              event = document.createEventObject();
              $.extend( event, options );
              // standards event.button uses constants defined here: http://msdn.microsoft.com/en-us/library/ie/ff974877(v=vs.85).aspx
              // old IE event.button uses constants defined here: http://msdn.microsoft.com/en-us/library/ie/ms533544(v=vs.85).aspx
              // so we actually need to map the standard back to oldIE
              //noinspection JSValidateTypes
              event.button = {
                0: 1,
                1: 4,
                2: 2
              }[ event.button ] || ( event.button === -1 ? 0 : event.button );
            }
            return event;
          },
          keyEvent: function( type, options ) {
            var event;
            options = $.extend({
              bubbles: true,
              cancelable: true,
              view: window,
              ctrlKey: false,
              altKey: false,
              shiftKey: false,
              metaKey: false,
              keyCode: 0,
              charCode: undefined
            }, options );
            if ( document.createEvent ) {
              try {
                event = document.createEvent( "KeyEvents" );
                //noinspection JSUnresolvedFunction
                event.initKeyEvent( type, options.bubbles, options.cancelable, options.view,
                  options.ctrlKey, options.altKey, options.shiftKey, options.metaKey,
                  options.keyCode, options.charCode );
                // initKeyEvent throws an exception in WebKit
                // see: http://stackoverflow.com/questions/6406784/initkeyevent-keypress-only-works-in-firefox-need-a-cross-browser-solution
                // and also https://bugs.webkit.org/show_bug.cgi?id=13368
                // fall back to a generic event until we decide to implement initKeyboardEvent
              } catch( err ) {
                event = document.createEvent( "Events" );
                event.initEvent( type, options.bubbles, options.cancelable );
                $.extend( event, {
                  view: options.view,
                  ctrlKey: options.ctrlKey,
                  altKey: options.altKey,
                  shiftKey: options.shiftKey,
                  metaKey: options.metaKey,
                  keyCode: options.keyCode,
                  charCode: options.charCode
                });
              }
            } else if ( document.createEventObject ) {
              event = document.createEventObject();
              $.extend( event, options );
            }
            //noinspection JSValidateTypes
            if ( !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() ) || (({}).toString.call( window.opera ) === "[object Opera]") ) {
              event.keyCode = (options.charCode > 0) ? options.charCode : options.keyCode;
              event.charCode = undefined;
            }
            return event;
          },
          dispatchEvent: function( elem, type, event ) {
            if ( elem[ type ] ) {
              elem[ type ]();
            } else if ( elem.dispatchEvent ) {
              elem.dispatchEvent( event );
            } else if ( elem.fireEvent ) {
              elem.fireEvent( "on" + type, event );
            }
          },
          simulateFocus: function() {
            var focusinEvent,
              triggered = false,
              element = $( this.target );
            function trigger() {
              triggered = true;
            }
            element.bind( "focus", trigger );
            element[ 0 ].focus();
            if ( !triggered ) {
              focusinEvent = $.Event( "focusin" );
              focusinEvent.preventDefault();
              element.trigger( focusinEvent );
              element.triggerHandler( "focus" );
            }
            element.unbind( "focus", trigger );
          },
          simulateBlur: function() {
            var focusoutEvent,
              triggered = false,
              element = $( this.target );
            function trigger() {
              triggered = true;
            }
            element.bind( "blur", trigger );
            element[ 0 ].blur();
            // blur events are async in IE
            setTimeout(function() {
              // IE won't let the blur occur if the window is inactive
              if ( element[ 0 ].ownerDocument.activeElement === element[ 0 ] ) {
                element[ 0 ].ownerDocument.body.focus();
              }
              // Firefox won't trigger events if the window is inactive
              // IE doesn't trigger events if we had to manually focus the body
              if ( !triggered ) {
                focusoutEvent = $.Event( "focusout" );
                focusoutEvent.preventDefault();
                element.trigger( focusoutEvent );
                element.triggerHandler( "blur" );
              }
              element.unbind( "blur", trigger );
            }, 1 );
          }
        });
        /** complex events **/
        function findCenter( elem ) {
          var offset,
            document = $( elem.ownerDocument );
          elem = $( elem );
          offset = elem.offset();
          return {
            x: offset.left + elem.outerWidth() / 2 - document.scrollLeft(),
            y: offset.top + elem.outerHeight() / 2 - document.scrollTop()
          };
        }
        function findCorner( elem ) {
          var offset,
            document = $( elem.ownerDocument );
          elem = $( elem );
          offset = elem.offset();
          return {
            x: offset.left - document.scrollLeft(),
            y: offset.top - document.scrollTop()
          };
        }
        $.extend( $.simulate.prototype, {
          simulateDrag: function() {
            //noinspection JSValidateTypes,JSUnresolvedVariable
            var i,
              target = this.target,
              eventDoc = target.ownerDocument,
              options = this.options,
              center = options.handle === "corner" ? findCorner( target ) : findCenter( target ),
              x = Math.floor( center.x ),
              y = Math.floor( center.y ),
              coord = { clientX: x, clientY: y },
              dx = options.dx || ( options.x !== undefined ? options.x - x : 0 ),
              dy = options.dy || ( options.y !== undefined ? options.y - y : 0 ),
              moves = options.moves || 3;
            this.simulateEvent( target, "mousedown", coord );
            for ( i=0 ; i < moves ; i=i+1 ) {
              x += dx / moves;
              y += dy / moves;
              coord = {
                clientX: Math.round( x ),
                clientY: Math.round( y )
              };
              this.simulateEvent( eventDoc, "mousemove", coord );
            }
            if ( $.contains( eventDoc, target ) ) {
              this.simulateEvent( target, "mouseup", coord );
              this.simulateEvent( target, "click", coord );
            } else {
              this.simulateEvent( eventDoc, "mouseup", coord );
            }
          }
        });
      }( jQuery ));
      $.fn.extend({ // hasClasses
        hasClasses: function (selectors) {
          var self = this;
          selectors=typeof selectors==='string'?selectors.split(' '):selectors;
          var i;
          for (i in selectors) {
            if (selectors.hasOwnProperty(i)){
              if ($(self).hasClass(selectors[i])) {
                return true;
              }
            }
          }
          return false;
        } // fn
      });
    }
  };
  return jqueryPlugins;
});
