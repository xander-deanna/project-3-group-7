"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.useElementClassNames = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _normalizer = require("../../services/normalizer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var buildResponsiveness = function buildResponsiveness(currentViewport) {
  var _classnames;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      display = _ref.display,
      textAlign = _ref.textAlign,
      textSize = _ref.textSize,
      only = _ref.only,
      invisible = _ref.invisible;

  var suffix = only ? '-only' : '';
  return (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, "is-".concat(display, "-").concat(currentViewport).concat(suffix), display), _defineProperty(_classnames, "has-text-".concat((0, _normalizer.normalizeAlign)(textAlign), "-").concat(currentViewport).concat(suffix), textAlign), _defineProperty(_classnames, "is-size-".concat(textSize, "-").concat(currentViewport).concat(suffix), textSize), _defineProperty(_classnames, "is-invisible-".concat(currentViewport).concat(suffix), invisible), _classnames));
};

var useElementClassNames = function useElementClassNames(_ref2) {
  var _classnames2;

  var textColor = _ref2.textColor,
      backgroundColor = _ref2.backgroundColor,
      colorVariant = _ref2.colorVariant,
      flexDirection = _ref2.flexDirection,
      flexWrap = _ref2.flexWrap,
      justifyContent = _ref2.justifyContent,
      alignContent = _ref2.alignContent,
      alignItems = _ref2.alignItems,
      flexGrow = _ref2.flexGrow,
      ratio = _ref2.ratio,
      clearfix = _ref2.clearfix,
      paddingless = _ref2.paddingless,
      pull = _ref2.pull,
      marginless = _ref2.marginless,
      overlay = _ref2.overlay,
      clipped = _ref2.clipped,
      radiusless = _ref2.radiusless,
      shadowless = _ref2.shadowless,
      unselectable = _ref2.unselectable,
      invisible = _ref2.invisible,
      clickable = _ref2.clickable,
      srOnly = _ref2.srOnly,
      display = _ref2.display,
      m = _ref2.m,
      mt = _ref2.mt,
      mr = _ref2.mr,
      mb = _ref2.mb,
      ml = _ref2.ml,
      mx = _ref2.mx,
      my = _ref2.my,
      p = _ref2.p,
      pt = _ref2.pt,
      pr = _ref2.pr,
      pb = _ref2.pb,
      pl = _ref2.pl,
      px = _ref2.px,
      py = _ref2.py,
      textWeight = _ref2.textWeight,
      textTransform = _ref2.textTransform,
      italic = _ref2.italic,
      textSize = _ref2.textSize,
      textAlign = _ref2.textAlign,
      textFamily = _ref2.textFamily,
      mobile = _ref2.mobile,
      tablet = _ref2.tablet,
      desktop = _ref2.desktop,
      widescreen = _ref2.widescreen,
      fullhd = _ref2.fullhd,
      touch = _ref2.touch,
      untilWidescreen = _ref2.untilWidescreen,
      untilFullhd = _ref2.untilFullhd,
      props = _objectWithoutProperties(_ref2, ["textColor", "backgroundColor", "colorVariant", "flexDirection", "flexWrap", "justifyContent", "alignContent", "alignItems", "flexGrow", "ratio", "clearfix", "paddingless", "pull", "marginless", "overlay", "clipped", "radiusless", "shadowless", "unselectable", "invisible", "clickable", "srOnly", "display", "m", "mt", "mr", "mb", "ml", "mx", "my", "p", "pt", "pr", "pb", "pl", "px", "py", "textWeight", "textTransform", "italic", "textSize", "textAlign", "textFamily", "mobile", "tablet", "desktop", "widescreen", "fullhd", "touch", "untilWidescreen", "untilFullhd"]);

  return [(0, _classnames3["default"])((_classnames2 = {}, _defineProperty(_classnames2, "has-text-".concat(textColor), textColor), _defineProperty(_classnames2, "has-background-".concat(backgroundColor), backgroundColor), _defineProperty(_classnames2, "is-".concat(colorVariant), colorVariant), _defineProperty(_classnames2, "is-flex-direction-".concat(flexDirection), flexDirection), _defineProperty(_classnames2, "is-flex-wrap-".concat(flexWrap), flexWrap), _defineProperty(_classnames2, "is-justify-content-".concat(justifyContent), justifyContent), _defineProperty(_classnames2, "is-align-content-".concat(alignContent), alignContent), _defineProperty(_classnames2, "is-align-items-".concat(alignItems), alignItems), _defineProperty(_classnames2, "is-flex-grow-".concat(flexGrow), flexGrow), _defineProperty(_classnames2, 'is-clearfix', clearfix), _defineProperty(_classnames2, "is-pulled-".concat(pull), pull), _defineProperty(_classnames2, 'is-marginless', marginless), _defineProperty(_classnames2, 'is-paddingless', paddingless), _defineProperty(_classnames2, 'is-overlay', overlay), _defineProperty(_classnames2, 'is-clipped', clipped), _defineProperty(_classnames2, 'is-radiusless', radiusless), _defineProperty(_classnames2, 'is-shadowless', shadowless), _defineProperty(_classnames2, 'is-unselectable', unselectable), _defineProperty(_classnames2, "is-".concat(display), display), _defineProperty(_classnames2, 'is-invisible', invisible), _defineProperty(_classnames2, 'is-sr-only', srOnly), _defineProperty(_classnames2, 'is-clickable', clickable), _defineProperty(_classnames2, "m-".concat(m), m), _defineProperty(_classnames2, "mt-".concat(mt), mt), _defineProperty(_classnames2, "mr-".concat(mr), mr), _defineProperty(_classnames2, "mb-".concat(mb), mb), _defineProperty(_classnames2, "ml-".concat(ml), ml), _defineProperty(_classnames2, "mx-".concat(mx), mx), _defineProperty(_classnames2, "my-".concat(my), my), _defineProperty(_classnames2, "p-".concat(p), p), _defineProperty(_classnames2, "pt-".concat(pt), pt), _defineProperty(_classnames2, "pr-".concat(pr), pr), _defineProperty(_classnames2, "pb-".concat(pb), pb), _defineProperty(_classnames2, "pl-".concat(pl), pl), _defineProperty(_classnames2, "px-".concat(px), px), _defineProperty(_classnames2, "py-".concat(py), py), _defineProperty(_classnames2, "has-text-".concat((0, _normalizer.normalizeAlign)(textAlign)), textAlign), _defineProperty(_classnames2, "has-text-weight-".concat(textWeight), textWeight), _defineProperty(_classnames2, "is-size-".concat(textSize), textSize), _defineProperty(_classnames2, "is-".concat(textTransform), textTransform), _defineProperty(_classnames2, "is-family-".concat(textFamily), textFamily), _defineProperty(_classnames2, 'is-italic', italic), _classnames2), buildResponsiveness('mobile', mobile), buildResponsiveness('tablet', tablet), buildResponsiveness('desktop', desktop), buildResponsiveness('widescreen', widescreen), buildResponsiveness('fullhd', fullhd), buildResponsiveness('touch', touch), buildResponsiveness('until-widescreen', untilWidescreen), buildResponsiveness('until-fullhd', untilFullhd)), props];
};

exports.useElementClassNames = useElementClassNames;

var Element = function Element(_ref3) {
  var className = _ref3.className,
      renderAs = _ref3.renderAs,
      domRef = _ref3.domRef,
      children = _ref3.children,
      allProps = _objectWithoutProperties(_ref3, ["className", "renderAs", "domRef", "children"]);

  var RenderAs = renderAs;

  var _useElementClassNames = useElementClassNames(allProps),
      _useElementClassNames2 = _slicedToArray(_useElementClassNames, 2),
      classNames = _useElementClassNames2[0],
      props = _useElementClassNames2[1];

  return /*#__PURE__*/_react["default"].createElement(RenderAs, _extends({
    ref: domRef,
    className: (0, _classnames3["default"])(className, classNames) || undefined
  }, props), children);
};

Element.defaultProps = {
  renderAs: 'div'
};
var _default = Element;
exports["default"] = _default;
//# sourceMappingURL=element.js.map