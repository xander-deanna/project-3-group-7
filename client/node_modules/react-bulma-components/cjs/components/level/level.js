"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _levelSide = _interopRequireDefault(require("./components/level-side"));

var _levelItem = _interopRequireDefault(require("./components/level-item"));

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Level = function Level(_ref) {
  var children = _ref.children,
      className = _ref.className,
      breakpoint = _ref.breakpoint,
      props = _objectWithoutProperties(_ref, ["children", "className", "breakpoint"]);

  return /*#__PURE__*/_react["default"].createElement(_element["default"], _extends({}, props, {
    className: (0, _classnames2["default"])('level', className, _defineProperty({}, "is-".concat(breakpoint), breakpoint))
  }), children);
};

Level.Side = _levelSide["default"];
Level.Item = _levelItem["default"];
Level.defaultProps = {
  renderAs: 'nav'
};
var _default = Level;
exports["default"] = _default;
//# sourceMappingURL=level.js.map