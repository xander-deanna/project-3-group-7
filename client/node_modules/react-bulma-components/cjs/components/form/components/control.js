"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _element = _interopRequireDefault(require("../../element"));

var _icon = _interopRequireDefault(require("../../icon"));

var _context = _interopRequireDefault(require("./field/context"));

var _button = _interopRequireDefault(require("../../button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Control = function Control(_ref) {
  var children = _ref.children,
      className = _ref.className,
      fullwidth = _ref.fullwidth,
      loading = _ref.loading,
      iconType = _ref.iconType,
      props = _objectWithoutProperties(_ref, ["children", "className", "fullwidth", "loading", "iconType"]);

  var context = (0, _context["default"])();

  var isIcon = function isIcon(child) {
    return child.type === (iconType || _icon["default"]) && (child.props.align === 'left' || child.props.align === 'right');
  };

  var updatedChildren = _react["default"].Children.map(children, function (child) {
    if (!child || !isIcon(child) && child.type !== _button["default"]) {
      return child;
    }

    return /*#__PURE__*/_react["default"].cloneElement(child, {
      size: child.props.size || context.size
    });
  });

  var icons = _react["default"].Children.toArray(updatedChildren).filter(isIcon).reduce(function (acc, icon) {
    return {
      iconLeft: acc.iconLeft || icon.props.align === 'left',
      iconRight: acc.iconRight || icon.props.align === 'right'
    };
  }, {
    iconLeft: false,
    iconRight: false
  });

  return /*#__PURE__*/_react["default"].createElement(_element["default"], _extends({}, props, {
    className: (0, _classnames["default"])('control', className, {
      'is-expanded': fullwidth,
      'has-icons-left': icons.iconLeft,
      'has-icons-right': icons.iconRight,
      'is-loading': loading
    })
  }), updatedChildren);
};

Control.defaultProps = {};
var _default = Control;
exports["default"] = _default;
//# sourceMappingURL=control.js.map