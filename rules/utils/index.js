'use strict';

const {
	isParenthesized,
	getParenthesizedTimes,
	getParentheses,
	getParenthesizedRange,
	getParenthesizedText,
} = require('./parentheses.js');
const {
	isArrayPrototypeProperty,
	isObjectPrototypeProperty,
} = require('./array-or-object-prototype-property.js');
const {isNodeMatches, isNodeMatchesNameOrPath} = require('./is-node-matches.js');

module.exports = {
	getParentheses,
	getParenthesizedRange,
	getParenthesizedText,
	getParenthesizedTimes,
	getVariableIdentifiers: require('./get-variable-identifiers.js'),
	isArrayPrototypeProperty,
	isNodeMatches,
	isNodeMatchesNameOrPath,
	isNodeValueNotDomNode: require('./is-node-value-not-dom-node.js'),
	isNodeValueNotFunction: require('./is-node-value-not-function.js'),
	isObjectPrototypeProperty,
	isParenthesized,
	isSameIdentifier: require('./is-same-identifier.js'),
	isValueNotUsable: require('./is-value-not-usable.js'),
	needsSemicolon: require('./needs-semicolon.js'),
	shouldAddParenthesesToMemberExpressionObject: require('./should-add-parentheses-to-member-expression-object.js'),
};

