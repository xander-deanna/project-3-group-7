"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _content = _interopRequireDefault(require("./components/content"));

var _card = _interopRequireDefault(require("./components/card"));

var _context = require("./context");

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var KEYCODES = {
  ESCAPE: 27
};

var Modal = function Modal(_ref) {
  var domRef = _ref.domRef,
      children = _ref.children,
      className = _ref.className,
      show = _ref.show,
      closeOnBlur = _ref.closeOnBlur,
      showClose = _ref.showClose,
      onClose = _ref.onClose,
      closeOnEsc = _ref.closeOnEsc,
      props = _objectWithoutProperties(_ref, ["domRef", "children", "className", "show", "closeOnBlur", "showClose", "onClose", "closeOnEsc"]);

  var ref = (0, _react.useRef)(domRef);

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      portalContainer = _useState2[0],
      setPortalContainer = _useState2[1];

  (0, _react.useEffect)(function () {
    if (!show) {
      return undefined;
    }

    var doc = props.document || document;
    var container = doc.createElement('div');
    container.setAttribute('class', 'modal-container');
    doc.body.appendChild(container);
    setPortalContainer(container);

    var handleKeydown = function handleKeydown(evt) {
      if (evt.keyCode === KEYCODES.ESCAPE && show) {
        onClose();
      }
    };

    if (closeOnEsc) {
      doc.addEventListener('keydown', handleKeydown);
    }

    return function () {
      doc.removeEventListener('keydown', handleKeydown);
      container.parentNode.removeChild(container);
    };
  }, [show]);

  if (!portalContainer) {
    return null;
  }

  return /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement(_context.ModalContext.Provider, {
    value: {
      onClose: onClose
    }
  }, /*#__PURE__*/_react["default"].createElement(_element["default"], {
    domRef: ref,
    className: (0, _classnames["default"])('modal', className, {
      'is-active': show
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    role: "presentation",
    className: "modal-background",
    onClick: closeOnBlur ? onClose : undefined
  }), children, showClose && /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: onClose,
    className: "modal-close is-large",
    "aria-label": "close"
  }))), portalContainer);
};

Modal.Content = _content["default"];
Modal.Card = _card["default"];
Modal.defaultProps = {
  closeOnEsc: true,
  showClose: true,
  // Expose mount point for testing
  document: undefined
};
var _default = Modal;
exports["default"] = _default;
//# sourceMappingURL=modal.js.map