/*\
title: $:/core/modules/widgets/checkbox.js
type: application/javascript
module-type: widget

Checkbox widget

\*/
(function(){
  "use strict";

function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}


  function removeClass(el, cls) {
  if (!hasClass(el,cls)) {
    return;
  }
  var newClassName = "";
  var s = el.className;
  s = s.replace(/  +/g, ' ');
  var classes = s.split(" ");
  var i;
  for(i = 0; i < classes.length; i++) {
    if(classes[i] !== cls) {
      if (newClassName==="") {
        newClassName += classes[i];
      }else{
        newClassName += " " + classes[i];
      }
    }
  }
  el.setAttribute('class',newClassName);
  //el.className = newClassName;
}
function addClass(el, cls) {
  if (!hasClass(el,cls)) {
    var s=el.className;
    s = s.replace(/  +/g, ' ');
    var a=s.split(' ');
    a.push(cls);
    el.setAttribute('class',a.join(' '));
  }
}


  /*jslint node: true, browser: true */
  /*global $tw: false */

var Widget = require("$:/core/modules/widgets/widget.js").widget;

var CheckboxWidget = function(parseTreeNode,options) {
	this.initialise(parseTreeNode,options);
};

/*
Inherit from the base widget class
*/
CheckboxWidget.prototype = new Widget();

/*
Render this widget into the DOM
*/
CheckboxWidget.prototype.render = function(parent,nextSibling) {
	// Save the parent dom node
	this.parentDomNode = parent;
	// Compute our attributes
	this.computeAttributes();
	// Execute our logic
	this.execute();
	// Create our elements
	this.labelDomNode = this.document.createElement("label");
	this.labelDomNode.setAttribute("class",this.checkboxClass);
	this.inputDomNode = this.document.createElement("input");
	this.inputDomNode.setAttribute("type","checkbox");
	if(this.getValue()) {
		this.inputDomNode.setAttribute("checked","true");
	}
	this.labelDomNode.appendChild(this.inputDomNode);
	this.spanDomNode = this.document.createElement("span");
	this.labelDomNode.appendChild(this.spanDomNode);
	// Add a click event handler
	$tw.utils.addEventListeners(this.inputDomNode,[
		{name: "change", handlerObject: this, handlerMethod: "handleChangeEvent"}
	]);
	// Insert the label into the DOM and render any children
	parent.insertBefore(this.labelDomNode,nextSibling);
	this.renderChildren(this.spanDomNode,null);
	this.domNodes.push(this.labelDomNode);
  //
  //console.log('.render,this.checkboxVerb',this.checkboxVerb);
  if (this.checkboxVerb==='toggleClass') {
    //setFor(that,type,selector,hasField)
    // hasField - does field value match val if true
    //console.log('.render,this.checkboxVerb',this.checkboxVerb);
    this.setFor('init');
  }
};

CheckboxWidget.prototype.getValue = function() {
	var tiddler = this.wiki.getTiddler(this.checkboxTitle);
	if(tiddler) {
		if(this.checkboxTag) {
			if(this.checkboxInvertTag) {
				return !tiddler.hasTag(this.checkboxTag);
			} else {
				return tiddler.hasTag(this.checkboxTag);
			}
		}
		if(this.checkboxField) {
			var value = tiddler.fields[this.checkboxField] || this.checkboxDefault || "";
			if(value === this.checkboxChecked) {
				return true;
			}
			if(value === this.checkboxUnchecked) {
				return false;
			}
		}
	} else {
		if(this.checkboxTag) {
			return false;
		}
		if(this.checkboxField) {
			if(this.checkboxDefault === this.checkboxChecked) {
				return true;
			}
			if(this.checkboxDefault === this.checkboxUnchecked) {
				return false;
			}
		}
	}
	return false;
};


CheckboxWidget.prototype.hasField = function() {
  // hasField - does field value match val if true
	var tiddler = this.wiki.getTiddler(this.checkboxTitle);
	if(tiddler) {
		if(this.checkboxField) {
      if (tiddler.fields[this.checkboxField]===undefined) {
        return tiddler.fields[this.checkboxField];
      }
			var value = tiddler.fields[this.checkboxField];
			if(value === this.checkboxChecked) {
				return true;
			}
			if(value === this.checkboxUnchecked) {
				return false;
			}
		}
	}
};



// INIT
// hasClass hasField setField setClass
// 0        u        default  default
// 1        u        value    -
// 0        0        -        -
// 1        0        value    -
// 0        1        -        value
// 1        1        -        -


// CHG
// hasClass hasField setField setClass
// 0        u        default  -
// 1        u        value    -
// 0        0        -        -
// 1        0        -        !value
// 0        1        -        value
// 1        1        -        -


// CHG
// hasClass hasField setField setClass
 // 0        u        default  -
 // 1        u        value    -
 // 0        0        -        value
 // 1        0        -        -
 // 0        1        -        !value
 // 1        1        -        value



function askSets(type,obj){
  if (type==='change') {
    if (obj.hasClass===false&&obj.hasField===undefined) {
      return {setField:'default',setClass:'-'};
    }
    if (obj.hasClass===true&&obj.hasField===undefined) {
      return {setField:'value',setClass:'-'};
    }
    if (obj.hasClass===false&&obj.hasField===false) {
      return {setField:'-',setClass:'value'};
    }
    if (obj.hasClass===true&&obj.hasField===false) {
      return {setField:'-',setClass:'-'};
    }
    if (obj.hasClass===false&&obj.hasField===true) {
      return {setField:'-',setClass:'!value'};
    }
    if (obj.hasClass===true&&obj.hasField===true) {
      return {setField:'-',setClass:'!value'};
    }
  }
  if (type==='init') {
    if (obj.hasClass===false&&obj.hasField===undefined) {
      return {setField:'default',setClass:'default'};
    }
    if (obj.hasClass===true&&obj.hasField===undefined) {
      return {setField:'value',setClass:'-'};
    }
    if (obj.hasClass===false&&obj.hasField===false) {
      return {setField:'-',setClass:'-'};
    }
    if (obj.hasClass===true&&obj.hasField===false) {
      return {setField:'value',setClass:'-'};
    }
    if (obj.hasClass===false&&obj.hasField===true) {
      return {setField:'-',setClass:'value'};
    }
    if (obj.hasClass===true&&obj.hasField===true) {
      return {setField:'-',setClass:'-'};
    }
  }
}

CheckboxWidget.prototype.classVal=function(){
  if(this.checkboxChecked===""&&this.checkboxUnchecked!==""){
    return this.checkboxUnchecked;
  }
  if(this.checkboxChecked!==""&&this.checkboxUnchecked===""){
    return this.checkboxChecked;
  }
  return this.checkboxChecked;
};


CheckboxWidget.prototype.setFor=function(type){
  var selector=this.checkboxValue;
  var hasField=this.hasField();
  // hasField - does field value match val if true
  var obj={};
  var el=document.querySelector(selector);
  if (el) {
    obj.hasClass = hasClass(el, this.checkboxChecked);
  }else{
    obj.hasClass=false;
  }
  obj.hasField=hasField;
  //console.log('setFor,type:',type);
  //console.log('setFor,obj:',obj);
  var ro=askSets(type,obj);
  //console.log('setFor,ro:',ro);
  var fieldVal;
  if (ro.setField==='-') {// default value -
  }else if (ro.setField==='default') {
    fieldVal=this.checkboxDefault;
  }else if (ro.setField==='value') {
    fieldVal=this.checkboxChecked;
  }
  var cv=this.classVal();
  var classVal;
  if (ro.setClass==='-') {// default value - !value
  }else if (ro.setClass==='default') {
    classVal=this.checkboxDefault;
  }else if (ro.setClass==='value') {
    classVal=cv;
  }else if (ro.setClass==='!value') {
    classVal=cv;
  }
  //console.log('setFor,classVal:',classVal,'fieldVal',fieldVal);
  if (classVal!==undefined) {
    if (ro.setClass==='default') {
      if (this.classVal()!==""){
        if (classVal===""){
          removeClass(el,classVal);
        }else{
          addClass(el,classVal);
        }
      }
    }
    if (ro.setClass==='!value') {
      removeClass(el,classVal);
    }
    if (ro.setClass==='value') {
      addClass(el,classVal);
    }
  }
  if (type==='init') {
    if (ro.setField==='default'&&ro.setClass==='default') {
      this.setTheField(this.checkboxDefault);
    }
  }
  return fieldVal;
};


CheckboxWidget.prototype.setTheField = function(val) {
  var tiddler = this.wiki.getTiddler(this.checkboxTitle),
      fallbackFields = {text: ""},
      newFields = {title: this.checkboxTitle};
  newFields[this.checkboxField]=val;
  this.wiki.addTiddler(new $tw.Tiddler(fallbackFields,tiddler,newFields,this.wiki.getModificationFields()));
};


// checked inverted  hasClass setField setClass removeClass
// 1       0         0        1        1        0
// 0       0         0        0

CheckboxWidget.prototype.handleChangeEvent = function(event) {
	var checked = this.inputDomNode.checked,
		tiddler = this.wiki.getTiddler(this.checkboxTitle),
		fallbackFields = {text: ""},
		newFields = {title: this.checkboxTitle},
		hasChanged = false,
		tagCheck = false,
		hasTag = tiddler && tiddler.hasTag(this.checkboxTag);
	if(this.checkboxTag && this.checkboxInvertTag === "yes") {
		tagCheck = hasTag === checked;
	} else {
		tagCheck = hasTag !== checked;
	}
	// Set the tag if specified
	if(this.checkboxTag && (!tiddler || tagCheck)) {
		newFields.tags = tiddler ? (tiddler.fields.tags || []).slice(0) : [];
		var pos = newFields.tags.indexOf(this.checkboxTag);
		if(pos !== -1) {
			newFields.tags.splice(pos,1);
		}
		if(this.checkboxInvertTag === "yes" && !checked) {
			newFields.tags.push(this.checkboxTag);
		} else if(this.checkboxInvertTag !== "yes" && checked) {
			newFields.tags.push(this.checkboxTag);
		}
		hasChanged = true;
	}
	// Set the field if specified
	if(this.checkboxField) {
		var value = checked ? this.checkboxChecked : this.checkboxUnchecked;
		if(!tiddler || tiddler.fields[this.checkboxField] !== value) {
			newFields[this.checkboxField] = value;
			hasChanged = true;
		}
	}
	if(hasChanged) {
    if (this.checkboxVerb==='toggleClass') {
      //setFor(that,type,selector,hasField)
      // hasField - does field value match val if true
      //console.log('handleChangeEvent');
      var val=this.setFor('change');
      //console.log('handleChangeEvent,val:',val);
      if (val!==undefined) {
        newFields[this.checkboxField]=val;
      }
    }
		this.wiki.addTiddler(new $tw.Tiddler(fallbackFields,tiddler,newFields,this.wiki.getModificationFields()));
	}
};

/*
Compute the internal state of the widget
*/
CheckboxWidget.prototype.execute = function() {
	// Get the parameters from the attributes
	//noinspection JSCheckFunctionSignatures
  this.checkboxTitle = this.getAttribute("tiddler",this.getVariable("currentTiddler"));
	this.checkboxTag = this.getAttribute("tag");
	this.checkboxField = this.getAttribute("field");
	this.checkboxChecked = this.getAttribute("checked");
	this.checkboxUnchecked = this.getAttribute("unchecked");
	this.checkboxDefault = this.getAttribute("default");
	this.checkboxClass = this.getAttribute("class","");
	this.checkboxInvertTag = this.getAttribute("invertTag","");
	this.checkboxVerb = this.getAttribute("verb","");
	this.checkboxValue = this.getAttribute("value","");
  //
  //selector
  //verb toggleClass
  //value
	// Make the child widgets
	this.makeChildWidgets();
};

/*
Selectively refreshes the widget if needed. Returns true if the widget or any of its children needed re-rendering
*/
CheckboxWidget.prototype.refresh = function(changedTiddlers) {
	var changedAttributes = this.computeAttributes();
	//noinspection JSUnresolvedVariable
  if(changedAttributes.tiddler || changedAttributes.tag || changedAttributes.invertTag || changedAttributes.field || changedAttributes.checked || changedAttributes.unchecked || changedAttributes["default"] || changedAttributes["class"] || changedAttributes.verb || changedAttributes.value) {
		//noinspection JSUnresolvedFunction
    this.refreshSelf();
		return true;
	} else {
		var refreshed = false;
		if(changedTiddlers[this.checkboxTitle]) {
			this.inputDomNode.checked = this.getValue();
			refreshed = true;
		}
		//noinspection JSUnresolvedFunction
    return this.refreshChildren(changedTiddlers) || refreshed;
	}
};

exports.checkbox = CheckboxWidget;

})();
