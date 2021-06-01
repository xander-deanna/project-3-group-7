"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _element = _interopRequireDefault(require("../../element"));

var _context = _interopRequireDefault(require("./field/context"));

var _normalizer = require("../../../services/normalizer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Textarea = function Textarea(_ref) {
  var _classnames;

  var className = _ref.className,
      size = _ref.size,
      color = _ref.color,
      status = _ref.status,
      fixedSize = _ref.fixedSize,
      props = _objectWithoutProperties(_ref, ["className", "size", "color", "status", "fixedSize"]);

  var context = (0, _context["default"])();
  var calculatedSize = size || context.size;
  return /*#__PURE__*/_react["default"].createElement(_element["default"], _extends({}, props, {
    className: (0, _classnames2["default"])('textarea', className, (_classnames = {}, _defineProperty(_classnames, "is-".concat((0, _normalizer.normalizeStatus)(status)), status), _defineProperty(_classnames, 'has-fixed-size', fixedSize), _defineProperty(_classnames, "is-".concat(calculatedSize), calculatedSize), _defineProperty(_classnames, "is-".concat(color), color), _classnames))
  }));
};

Textarea.defaultProps = {
  renderAs: 'textarea'
};
var _default = Textarea;
exports["default"] = _default;
//# sourceMappingURL=textarea.js.map