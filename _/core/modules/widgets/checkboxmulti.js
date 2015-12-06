/*\
title: $:/core/modules/widgets/checkboxmulti.js
type: application/javascript
module-type: widget

CheckboxMulti widget, uses filter instead of tiddler to do multiple actions

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var Widget = require("$:/core/modules/widgets/widget.js").widget;

var CheckboxMultiWidget = function(parseTreeNode,options) {
	this.initialise(parseTreeNode,options);
};

/*
Inherit from the base widget class
*/
CheckboxMultiWidget.prototype = new Widget();

/*
Render this widget into the DOM
*/
CheckboxMultiWidget.prototype.render = function(parent,nextSibling) {
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
  this.showChecked();
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
};


CheckboxMultiWidget.prototype.showChecked = function() {
  var val=this.getValue();// tf-1
  var dechecked='dechecked';
  if (val==-1) {
    if (!hasClass(this.labelDomNode,dechecked)) {addClass(this.labelDomNode,dechecked);}
    if (!hasClass(this.inputDomNode,dechecked)) {addClass(this.inputDomNode,dechecked);}
		this.inputDomNode.setAttribute("checked","true");
  }else if (val===true) {
    if (hasClass(this.labelDomNode,dechecked)) {removeClass(this.labelDomNode,dechecked);}
    if (hasClass(this.inputDomNode,dechecked)) {removeClass(this.inputDomNode,dechecked);}
		this.inputDomNode.setAttribute("checked","true");
  }else{
    if (hasClass(this.labelDomNode,dechecked)) {removeClass(this.labelDomNode,dechecked);}
    if (hasClass(this.inputDomNode,dechecked)) {removeClass(this.inputDomNode,dechecked);}
		this.inputDomNode.setAttribute("checked","false");
  }
};

function hasClass(el, className) {
  if (el.classList){
    return el.classList.contains(className);
  } else{
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }
}

function addClass(el, className) {
  if (el.classList){
    el.classList.add(className);
  } else if (!hasClass(el, className)) {
    el.className += " " + className;
  }
}

function removeClass(el, className) {
  if (el.classList){
    el.classList.remove(className);
  } else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

CheckboxMultiWidget.prototype.getValue = function() {
	var tiddlers = this.getTiddlerList();
  var checked=-1;
  var x;
  for (x=0;x<tiddlers.length;x++) {
    var tiddler=this.wiki.getTiddler(tiddlers[x]);
    var tf=this.getTiddlerValue(tiddler);
    if (checked!==-1) {
      if (tf!==checked) {
        return -1;
      }
    }else{
      checked=tf;
    }
  }
  return checked;
};


CheckboxMultiWidget.prototype.getTiddlerValue = function(tiddler) {
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



CheckboxMultiWidget.prototype.getTiddlerList = function() {
    var defaultFilter = "[!is[system]sort[title]]";
    return this.wiki.filterTiddlers(this.getAttribute("filter",defaultFilter),this);
};

CheckboxMultiWidget.prototype.handleChangeEvent = function(event) {
  var tiddlers=this.getTiddlerList();
  var x;
  for (x=0;x<tiddlers.length;x++) {
    this.updateTiddler(tiddlers[x]);
  }
};

CheckboxMultiWidget.prototype.updateTiddler = function(title) {
  var checked = this.inputDomNode.checked,
    tiddler = this.wiki.getTiddler(title),
    fallbackFields = {text: ""},
    newFields = {title: title},
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
    this.wiki.addTiddler(new $tw.Tiddler(fallbackFields,tiddler,newFields,this.wiki.getModificationFields()));
  }
};
/*
Compute the internal state of the widget
*/
CheckboxMultiWidget.prototype.execute = function() {
	// Get the parameters from the attributes
  var defaultFilter = "[!is[system]sort[title]]";
	this.checkboxFilter = this.getAttribute("filter",defaultFilter);
	this.checkboxTag = this.getAttribute("tag");
	this.checkboxField = this.getAttribute("field");
	this.checkboxChecked = this.getAttribute("checked");
	this.checkboxUnchecked = this.getAttribute("unchecked");
	this.checkboxDefault = this.getAttribute("default");
	this.checkboxClass = this.getAttribute("class","");
	this.checkboxInvertTag = this.getAttribute("invertTag","");
	// Make the child widgets
	this.makeChildWidgets();
};

/*
Selectively refreshes the widget if needed. Returns true if the widget or any of its children needed re-rendering
*/
CheckboxMultiWidget.prototype.refresh = function(changedTiddlers) {
	var changedAttributes = this.computeAttributes();
	if(changedAttributes.filter || changedAttributes.tag || changedAttributes.invertTag || changedAttributes.field || changedAttributes.checked || changedAttributes.unchecked || changedAttributes["default"] || changedAttributes["class"]) {
		this.refreshSelf();
		return true;
	} else {
		var refreshed = false;
		if(this.anyInChanged(changedTiddlers)) {
      this.showChecked();
			refreshed = true;
		}
		return this.refreshChildren(changedTiddlers) || refreshed;
	}
};
CheckboxMultiWidget.prototype.anyInChanged = function(changedTiddlers) {
  var tiddlers=this.getTiddlerList();
  var x;
  for (x=0;x<tiddlers.length;x++) {
    if(changedTiddlers[tiddlers[x]]) {
      return true;
    }
  }
  return false;
};

exports.checkboxmulti = CheckboxMultiWidget;

})();
