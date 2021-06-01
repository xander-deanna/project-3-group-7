"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _element = _interopRequireDefault(require("../../element"));

var _context = _interopRequireDefault(require("./field/context"));

var _normalizer = require("../../../services/normalizer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InputFile = function InputFile(_ref) {
  var _classnames;

  var className = _ref.className,
      style = _ref.style,
      onChange = _ref.onChange,
      color = _ref.color,
      size = _ref.size,
      fullwidth = _ref.fullwidth,
      align = _ref.align,
      boxed = _ref.boxed,
      name = _ref.name,
      label = _ref.label,
      icon = _ref.icon,
      inputProps = _ref.inputProps,
      filename = _ref.filename,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["className", "style", "onChange", "color", "size", "fullwidth", "align", "boxed", "name", "label", "icon", "inputProps", "filename", "value"]);

  var ref = (0, _react.useRef)();
  var context = (0, _context["default"])();
  var calculatedSize = size || context.size;
  (0, _react.useEffect)(function () {
    if (!ref.current) {
      return;
    }

    if (value) {
      ref.current.files = value;
    } else {
      ref.current.value = '';
    }
  }, [value]);
  return /*#__PURE__*/_react["default"].createElement(_element["default"], _extends({
    style: style
  }, props, {
    className: (0, _classnames2["default"])('file', className, (_classnames = {}, _defineProperty(_classnames, "is-".concat(calculatedSize), calculatedSize), _defineProperty(_classnames, "is-".concat(color), color), _defineProperty(_classnames, "is-".concat((0, _normalizer.normalizeAlign)(align)), align), _defineProperty(_classnames, 'has-name', !!filename), _defineProperty(_classnames, 'is-boxed', boxed), _defineProperty(_classnames, 'is-fullwidth', fullwidth), _classnames))
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "file-label"
  }, /*#__PURE__*/_react["default"].createElement("input", _extends({}, inputProps, {
    name: name,
    type: "file",
    className: "file-input",
    onChange: onChange,
    ref: ref
  })), /*#__PURE__*/_react["default"].createElement("span", {
    className: "file-cta"
  }, icon && /*#__PURE__*/_react["default"].createElement("span", {
    className: "file-icon"
  }, icon), /*#__PURE__*/_react["default"].createElement("span", {
    className: "file-label"
  }, label)), filename && /*#__PURE__*/_react["default"].createElement("span", {
    className: "file-name"
  }, filename)));
};

InputFile.defaultProps = {
  label: 'Choose a file...',
  inputProps: {}
};
var _default = InputFile;
exports["default"] = _default;
//# sourceMappingURL=input-file.js.map