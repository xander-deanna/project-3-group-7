"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Heading = function Heading(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      size = _ref.size,
      subtitle = _ref.subtitle,
      weight = _ref.weight,
      spaced = _ref.spaced,
      heading = _ref.heading,
      props = _objectWithoutProperties(_ref, ["children", "className", "size", "subtitle", "weight", "spaced", "heading"]);

  return /*#__PURE__*/_react["default"].createElement(_element["default"], _extends({}, props, {
    className: (0, _classnames2["default"])(className, (_classnames = {
      title: !subtitle && !heading,
      subtitle: subtitle,
      heading: heading
    }, _defineProperty(_classnames, "is-".concat(size), size), _defineProperty(_classnames, "has-text-weight-".concat(weight), weight), _defineProperty(_classnames, 'is-spaced', spaced && !subtitle), _classnames))
  }), children);
};

Heading.defaultProps = {
  renderAs: 'h1'
};
var _default = Heading;
exports["default"] = _default;
//# sourceMappingURL=heading.js.map