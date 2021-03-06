/* */ 
"format cjs";
"use strict";

exports.__esModule = true;
exports.TaggedTemplateExpression = TaggedTemplateExpression;
exports.TemplateElement = TemplateElement;
exports.TemplateLiteral = TemplateLiteral;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _lodashCollectionEach = require("lodash/collection/each");

var _lodashCollectionEach2 = _interopRequireDefault(_lodashCollectionEach);

function TaggedTemplateExpression(node, print) {
  print(node.tag);
  print(node.quasi);
}

function TemplateElement(node) {
  this._push(node.value.raw);
}

function TemplateLiteral(node, print) {
  this.push("`");

  var quasis = node.quasis;
  var len = quasis.length;

  for (var i = 0; i < len; i++) {
    print(quasis[i]);

    if (i + 1 < len) {
      this.push("${ ");
      print(node.expressions[i]);
      this.push(" }");
    }
  }

  this._push("`");
}