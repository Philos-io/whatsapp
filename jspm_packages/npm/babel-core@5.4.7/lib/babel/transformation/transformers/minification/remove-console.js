/* */ 
"format cjs";
"use strict";

exports.__esModule = true;
exports.CallExpression = CallExpression;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _types = require("../../../types");

var t = _interopRequireWildcard(_types);

var metadata = {
  optional: true,
  group: "builtin-setup"
};

exports.metadata = metadata;

function CallExpression(node, parent) {
  if (this.get("callee").matchesPattern("console", true)) {
    if (t.isExpressionStatement(parent)) {
      this.parentPath.remove();
    } else {
      this.remove();
    }
  }
}