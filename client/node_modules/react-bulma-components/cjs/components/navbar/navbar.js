"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _brand = _interopRequireDefault(require("./components/brand"));

var _burger = _interopRequireDefault(require("./components/burger"));

var _menu = _interopRequireDefault(require("./components/menu"));

var _item = _interopRequireDefault(require("./components/item"));

var _dropdown = _interopRequireDefault(require("./components/dropdown"));

var _divider = _interopRequireDefault(require("./components/divider"));

var _link = _interopRequireDefault(require("./components/link"));

var _container = _interopRequireDefault(require("./components/container"));

var _context = require("./context");

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Navbar = function Navbar(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      fixed = _ref.fixed,
      transparent = _ref.transparent,
      color = _ref.color,
      active = _ref.active,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["children", "className", "fixed", "transparent", "color", "active", "size"]);

  (0, _react.useEffect)(function () {
    var html = window.document.querySelector('html');

    if (!html.classList.contains("has-navbar-fixed-".concat(fixed))) {
      html.classList.remove('has-navbar-fixed-top');
      html.classList.remove('has-navbar-fixed-bottom');
    }

    if (fixed) {
      html.classList.add("has-navbar-fixed-".concat(fixed));
    }

    return function () {
      return window.document.querySelector('html').classList.remove("has-navbar-fixed-".concat(fixed));
    };
  }, [fixed]);
  return /*#__PURE__*/_react["default"].createElement(_context.ShowContext.Provider, {
    value: active
  }, /*#__PURE__*/_react["default"].createElement(_element["default"], _extends({}, props, {
    role: "navigation",
    className: (0, _classnames2["default"])('navbar', className, (_classnames = {
      'is-transparent': transparent
    }, _defineProperty(_classnames, "is-fixed-".concat(fixed), fixed), _defineProperty(_classnames, "is-".concat(color), color), _defineProperty(_classnames, "is-spaced", size === 'large'), _classnames))
  }), children));
};

Navbar.defaultProps = {
  renderAs: 'nav'
};
Navbar.Brand = _brand["default"];
Navbar.Burger = _burger["default"];
Navbar.Menu = _menu["default"];
Navbar.Item = _item["default"];
Navbar.Dropdown = _dropdown["default"];
Navbar.Link = _link["default"];
Navbar.Divider = _divider["default"];
Navbar.Container = _container["default"];
var _default = Navbar;
exports["default"] = _default;
//# sourceMappingURL=navbar.js.map