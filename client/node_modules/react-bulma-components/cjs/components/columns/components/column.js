"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _element = _interopRequireDefault(require("../../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Column = function Column(_ref) {
  var _classNames;

  var children = _ref.children,
      className = _ref.className,
      size = _ref.size,
      offset = _ref.offset,
      narrow = _ref.narrow,
      _ref$mobile = _ref.mobile,
      mobile = _ref$mobile === void 0 ? {} : _ref$mobile,
      _ref$tablet = _ref.tablet,
      tablet = _ref$tablet === void 0 ? {} : _ref$tablet,
      _ref$desktop = _ref.desktop,
      desktop = _ref$desktop === void 0 ? {} : _ref$desktop,
      _ref$widescreen = _ref.widescreen,
      widescreen = _ref$widescreen === void 0 ? {} : _ref$widescreen,
      _ref$fullhd = _ref.fullhd,
      fullhd = _ref$fullhd === void 0 ? {} : _ref$fullhd,
      _ref$touch = _ref.touch,
      touch = _ref$touch === void 0 ? {} : _ref$touch,
      props = _objectWithoutProperties(_ref, ["children", "className", "size", "offset", "narrow", "mobile", "tablet", "desktop", "widescreen", "fullhd", "touch"]);

  return /*#__PURE__*/_react["default"].createElement(_element["default"], _extends({}, props, {
    mobile: mobile,
    tablet: tablet,
    desktop: desktop,
    widescreen: widescreen,
    fullhd: fullhd,
    touch: touch,
    className: (0, _classnames["default"])(className, 'column', (_classNames = {}, _defineProperty(_classNames, "is-".concat(size), size), _defineProperty(_classNames, "is-".concat(touch.size, "-mobile"), touch.size), _defineProperty(_classNames, "is-".concat(mobile.size, "-mobile"), mobile.size), _defineProperty(_classNames, "is-".concat(tablet.size, "-tablet"), tablet.size), _defineProperty(_classNames, "is-".concat(desktop.size, "-desktop"), desktop.size), _defineProperty(_classNames, "is-".concat(widescreen.size, "-widescreen"), widescreen.size), _defineProperty(_classNames, "is-".concat(fullhd.size, "-fullhd"), fullhd.size), _defineProperty(_classNames, "is-offset-".concat(touch.offset, "-mobile"), touch.offset), _defineProperty(_classNames, "is-offset-".concat(mobile.offset, "-mobile"), mobile.offset), _defineProperty(_classNames, "is-offset-".concat(tablet.offset, "-tablet"), tablet.offset), _defineProperty(_classNames, "is-offset-".concat(desktop.offset, "-desktop"), desktop.offset), _defineProperty(_classNames, "is-offset-".concat(widescreen.offset, "-widescreen"), widescreen.offset), _defineProperty(_classNames, "is-offset-".concat(fullhd.offset, "-fullhd"), fullhd.offset), _defineProperty(_classNames, "is-offset-".concat(offset), offset), _defineProperty(_classNames, 'is-narrow', narrow), _defineProperty(_classNames, 'is-narrow-touch', touch.narrow), _defineProperty(_classNames, 'is-narrow-mobile', mobile.narrow), _defineProperty(_classNames, 'is-narrow-tablet', tablet.narrow), _defineProperty(_classNames, 'is-narrow-desktop', desktop.narrow), _defineProperty(_classNames, 'is-narrow-widescreen', widescreen.narrow), _defineProperty(_classNames, 'is-narrow-fullhd', fullhd.narrow), _classNames))
  }), children);
};

Column.defaultProps = {};
var _default = Column;
exports["default"] = _default;
//# sourceMappingURL=column.js.map