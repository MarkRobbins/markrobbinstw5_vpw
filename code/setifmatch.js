/*\
title: $:/core/modules/widgets/setifmatch.js
type: application/javascript
module-type: widget

Set variable conditionally on regex match widget

name,value,matches,opts,then,else

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var Widget = require("$:/core/modules/widgets/widget.js").widget;

var SetIfMatchWidget = function(parseTreeNode,options) {
	this.initialise(parseTreeNode,options);
};

/*
Inherit from the base widget class
*/
SetIfMatchWidget.prototype = new Widget();

/*
Render this widget into the DOM
*/
SetIfMatchWidget.prototype.render = function(parent,nextSibling) {
	this.parentDomNode = parent;
	this.computeAttributes();
	this.execute();
	this.renderChildren(parent,nextSibling);
};

/*
Compute the internal state of the widget
*/
SetIfMatchWidget.prototype.execute = function() {
	// Get our parameters
	this.setName = this.getAttribute("name","currentTiddler");
	this.setValue = this.getAttribute("value");
	this.setMatches = this.getAttribute("matches");
	this.setOpts = this.getAttribute("opts","g");
	this.setThen = this.getAttribute("then","true");
	this.setElse = this.getAttribute("else","false");
	// Set context variable
	var value = this.setThen;
  var re=new RegExp(this.setMatches,this.setOpts);
  if(!re.test(this.setValue)) value=this.setElse;
	this.setVariable(this.setName,value,this.parseTreeNode.params);
	// Construct the child widgets
	this.makeChildWidgets();
};

/*
Selectively refreshes the widget if needed. Returns true if the widget or any of its children needed re-rendering
*/
SetIfMatchWidget.prototype.refresh = function(changedTiddlers) {
	var changedAttributes = this.computeAttributes();
	if(changedAttributes.name || changedAttributes.value || changedAttributes.matches || changedAttributes.opts || changedAttributes.then || changedAttributes.else) {
		this.refreshSelf();
		return true;
	} else {
		return this.refreshChildren(changedTiddlers);
	}
};

exports.setifmatchvariable = SetIfMatchWidget;
exports.setifmatch = SetIfMatchWidget;

})();

