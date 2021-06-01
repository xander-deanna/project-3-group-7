"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _fieldLabel = _interopRequireDefault(require("./field-label"));

var _fieldBody = _interopRequireDefault(require("./field-body"));

var _element = _interopRequireDefault(require("../../../element"));

var _normalizer = require("../../../../services/normalizer");

var _context = _interopRequireWildcard(require("./context"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Field = function Field(_ref) {
  var _classnames;

  var className = _ref.className,
      align = _ref.align,
      multiline = _ref.multiline,
      horizontal = _ref.horizontal,
      kind = _ref.kind,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["className", "align", "multiline", "horizontal", "kind", "size"]);

  var context = (0, _context["default"])();
  var k = null;

  if (kind === 'addons') {
    k = 'has-addons';
  } else if (kind === 'group') {
    k = 'is-grouped';
  }

  return /*#__PURE__*/_react["default"].createElement(_context.FieldContext.Provider, {
    value: {
      size: size || context.size
    }
  }, /*#__PURE__*/_react["default"].createElement(_element["default"], _extends({}, props, {
    className: (0, _classnames2["default"])('field', className, (_classnames = {}, _defineProperty(_classnames, "".concat(k), k), _defineProperty(_classnames, "".concat(k, "-").concat((0, _normalizer.normalizeAlign)(align)), k === 'is-grouped' && align), _defineProperty(_classnames, "".concat(k, "-multiline"), k === 'is-grouped' && multiline), _defineProperty(_classnames, 'is-horizontal', horizontal), _classnames))
  })));
};

Field.Label = _fieldLabel["default"];
Field.Body = _fieldBody["default"];
Field.defaultProps = {};
var _default = Field;
exports["default"] = _default;
//# sourceMappingURL=field.js.map