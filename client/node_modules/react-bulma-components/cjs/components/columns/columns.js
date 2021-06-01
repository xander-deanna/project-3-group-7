"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _column = _interopRequireDefault(require("./components/column"));

var _constants = _interopRequireDefault(require("./constants"));

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Columns = function Columns(_ref) {
  var _classNames;

  var className = _ref.className,
      breakpoint = _ref.breakpoint,
      gap = _ref.gap,
      multiline = _ref.multiline,
      centered = _ref.centered,
      vCentered = _ref.vCentered,
      variableGap = _ref.variableGap,
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
      props = _objectWithoutProperties(_ref, ["className", "breakpoint", "gap", "multiline", "centered", "vCentered", "variableGap", "mobile", "tablet", "desktop", "widescreen", "fullhd", "touch"]);

  return /*#__PURE__*/_react["default"].createElement(_element["default"], _extends({}, props, {
    mobile: mobile,
    tablet: tablet,
    desktop: desktop,
    widescreen: widescreen,
    fullhd: fullhd,
    touch: touch,
    className: (0, _classnames["default"])(className, 'columns', (_classNames = {}, _defineProperty(_classNames, "is-".concat(breakpoint), breakpoint), _defineProperty(_classNames, "is-".concat(gap), gap !== undefined), _defineProperty(_classNames, 'is-multiline', multiline), _defineProperty(_classNames, 'is-centered', centered), _defineProperty(_classNames, 'is-vcentered', vCentered), _defineProperty(_classNames, 'is-variable', gap !== undefined || [touch, mobile, tablet, desktop, widescreen, fullhd].find(function (b) {
      return b.gap !== undefined;
    })), _defineProperty(_classNames, "is-".concat(touch.gap, "-touch"), touch.gap !== undefined), _defineProperty(_classNames, "is-".concat(mobile.gap, "-mobile"), mobile.gap !== undefined), _defineProperty(_classNames, "is-".concat(tablet.gap, "-tablet"), tablet.gap !== undefined), _defineProperty(_classNames, "is-".concat(desktop.gap, "-desktop"), desktop.gap !== undefined), _defineProperty(_classNames, "is-".concat(widescreen.gap, "-widescreen"), widescreen.gap !== undefined), _defineProperty(_classNames, "is-".concat(fullhd.gap, "-fullhd"), fullhd.gap !== undefined), _classNames))
  }));
};

Columns.Column = _column["default"];
Columns.CONSTANTS = _constants["default"];
Columns.defaultProps = {
  multiline: true
};
var _default = Columns;
exports["default"] = _default;
//# sourceMappingURL=columns.js.map