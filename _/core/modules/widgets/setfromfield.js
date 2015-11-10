/*\
title: $:/core/modules/widgets/setfromfield.js
type: application/javascript
module-type: widget

Set variable from tiddler field widget

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var Widget = require("$:/core/modules/widgets/widget.js").widget;

var SetFromFieldWidget = function(parseTreeNode,options) {
	this.initialise(parseTreeNode,options);
};

/*
Inherit from the base widget class
*/
SetFromFieldWidget.prototype = new Widget();

/*
Render this widget into the DOM
*/
SetFromFieldWidget.prototype.render = function(parent,nextSibling) {
	this.parentDomNode = parent;
	this.computeAttributes();
	this.execute();
	this.renderChildren(parent,nextSibling);
};

/*
Compute the internal state of the widget
*/
SetFromFieldWidget.prototype.execute = function() {
	// Get our parameters
	this.setName = this.getAttribute("name");
	this.setTiddler = this.getAttribute("tiddler","currentTiddler");
	this.setField = this.getAttribute("field");
	this.setEmptyValue = this.getAttribute("emptyValue");
	this.setMissingValue = this.getAttribute("missingValue");
	// Set context variable
	var value = getFieldValue(this.setTiddler,this.setField,this.setEmptyValue,this.setMissingValue);
	this.setVariable(this.setName,value,this.parseTreeNode.params);
	// Construct the child widgets
	this.makeChildWidgets();
};
function getFieldValue(tiddler_,field_,defaultVal_,defaultValNoTiddler_) {
	if (!defaultVal_||defaultVal_===null) defaultVal_='';
	if (!defaultValNoTiddler_||defaultValNoTiddler_===null) defaultValNoTiddler_=defaultVal_;
	if (!field_||field_===null||field_==='') field_='text';
	if (!tiddler_||tiddler_===null||tiddler_==='') return defaultValNoTiddler_;
    var tiddler=$tw.wiki.getTiddler(tiddler_);
	if (!tiddler||tiddler===null||tiddler==='') return defaultValNoTiddler_;
    if($tw.utils.hop(tiddler.fields,field_)) {
      return tiddler.getFieldString(field_);
    }
    return defaultVal_;
};
/*
Selectively refreshes the widget if needed. Returns true if the widget or any of its children needed re-rendering
*/
SetFromFieldWidget.prototype.refresh = function(changedTiddlers) {
	var changedAttributes = this.computeAttributes();
	if(changedAttributes.name || changedAttributes.tiddler || changedAttributes.field || changedAttributes.missingValue || changedAttributes.emptyValue) {
		this.refreshSelf();
		return true;
	} else {
		return this.refreshChildren(changedTiddlers);
	}
};

exports.setfromfieldvariable = SetFromFieldWidget;
exports.setfromfield = SetFromFieldWidget;

})();

