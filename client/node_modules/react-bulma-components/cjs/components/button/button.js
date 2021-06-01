"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _buttonGroup = _interopRequireDefault(require("./components/button-group"));

var _element = _interopRequireDefault(require("../element"));

var _normalizer = require("../../services/normalizer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      renderAs = _ref.renderAs,
      color = _ref.color,
      size = _ref.size,
      outlined = _ref.outlined,
      inverted = _ref.inverted,
      submit = _ref.submit,
      reset = _ref.reset,
      fullwidth = _ref.fullwidth,
      status = _ref.status,
      loading = _ref.loading,
      disabled = _ref.disabled,
      remove = _ref.remove,
      isSelected = _ref.isSelected,
      isStatic = _ref.isStatic,
      rounded = _ref.rounded,
      onClick = _ref.onClick,
      text = _ref.text,
      props = _objectWithoutProperties(_ref, ["children", "className", "renderAs", "color", "size", "outlined", "inverted", "submit", "reset", "fullwidth", "status", "loading", "disabled", "remove", "isSelected", "isStatic", "rounded", "onClick", "text"]);

  var otherProps = {};

  if (submit) {
    otherProps = {
      type: 'submit',
      renderAs: 'button'
    };
  }

  if (reset) {
    otherProps = {
      type: 'reset',
      renderAs: 'button'
    };
  }

  if (isStatic) {
    otherProps = {
      renderAs: 'span'
    };
  }

  return /*#__PURE__*/_react["default"].createElement(_element["default"], _extends({
    tabIndex: disabled ? -1 : 0,
    renderAs: renderAs
  }, props, otherProps, {
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    className: (0, _classnames2["default"])(className, (_classnames = {}, _defineProperty(_classnames, "is-".concat(color), color), _defineProperty(_classnames, "is-".concat(size), size), _defineProperty(_classnames, 'is-selected', isSelected), _defineProperty(_classnames, 'is-static', isStatic), _defineProperty(_classnames, 'is-rounded', rounded), _defineProperty(_classnames, 'is-outlined', outlined), _defineProperty(_classnames, 'is-inverted', inverted), _defineProperty(_classnames, 'is-fullwidth', fullwidth), _defineProperty(_classnames, "is-".concat((0, _normalizer.normalizeStatus)(status)), status), _defineProperty(_classnames, 'is-loading', loading), _defineProperty(_classnames, 'is-text', text), _defineProperty(_classnames, "delete", remove), _defineProperty(_classnames, "button", !remove), _classnames))
  }), children);
};

Button.Group = _buttonGroup["default"];
Button.defaultProps = {
  renderAs: 'button'
};
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=button.js.map