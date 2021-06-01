"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _normalizer = require("../../services/normalizer");

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getFirstPage = function getFirstPage(current, last, delta) {
  if (current === 1) {
    return 1;
  }

  var minPage = last - delta * 2;
  var page = Math.min(current - delta, minPage);
  return page <= 0 ? 1 : page;
};

var getLastPage = function getLastPage(current, total, delta) {
  if (current === total) {
    return total;
  }

  var maxPage = delta * 2 + 1;
  var page = Math.max(current + delta, maxPage);
  return page > total ? total : page;
};

var Pagination = function Pagination(_ref) {
  var _classnames;

  var current = _ref.current,
      disabled = _ref.disabled,
      total = _ref.total,
      next = _ref.next,
      previous = _ref.previous,
      showPrevNext = _ref.showPrevNext,
      showFirstLast = _ref.showFirstLast,
      delta = _ref.delta,
      autoHide = _ref.autoHide,
      className = _ref.className,
      size = _ref.size,
      align = _ref.align,
      rounded = _ref.rounded,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["current", "disabled", "total", "next", "previous", "showPrevNext", "showFirstLast", "delta", "autoHide", "className", "size", "align", "rounded", "onChange"]);

  if (total <= 1 && autoHide || current > total) {
    return null;
  }

  var lastPage = getLastPage(current, total, delta);
  var firstPage = getFirstPage(current, lastPage, delta);
  var prevDisabled = current === 1 || disabled;
  var nextDisabled = current === total || disabled;
  return /*#__PURE__*/_react["default"].createElement(_element["default"], _extends({}, props, {
    className: (0, _classnames2["default"])('pagination', className, (_classnames = {}, _defineProperty(_classnames, "is-".concat(size), size), _defineProperty(_classnames, "is-".concat((0, _normalizer.normalizeAlign)(align)), align), _defineProperty(_classnames, 'is-rounded', rounded), _classnames)),
    "aria-label": "pagination"
  }), showPrevNext && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: prevDisabled ? undefined : function () {
      return onChange(current - 1);
    },
    className: "pagination-previous",
    title: "This is the first page",
    disabled: prevDisabled
  }, previous), /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    onClick: nextDisabled ? undefined : function () {
      return onChange(current + 1);
    },
    className: "pagination-next",
    disabled: nextDisabled
  }, next)), delta > 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "pagination-list"
  }, showFirstLast && current !== 1 && firstPage !== 1 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("li", {
    key: 1
  }, /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    className: "pagination-link",
    onClick: function onClick() {
      return onChange(1);
    },
    "aria-label": "Page 1",
    "aria-current": "page",
    disabled: disabled
  }, "1")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "pagination-ellipsis"
  }, "\u2026"))), Array(lastPage - firstPage + 1).fill(0).map(function (_, i) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      _react["default"].createElement("li", {
        key: i + firstPage
      }, /*#__PURE__*/_react["default"].createElement("a", {
        role: "button",
        tabIndex: 0,
        className: (0, _classnames2["default"])('pagination-link', {
          'is-current': current === i + firstPage
        }),
        onClick: current === firstPage + i ? undefined : function () {
          return onChange(firstPage + i);
        },
        "aria-label": "Page ".concat(i + firstPage),
        "aria-current": "page",
        disabled: disabled
      }, i + firstPage))
    );
  }), showFirstLast && current !== lastPage && total !== lastPage && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("li", {
    key: total
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "pagination-ellipsis"
  }, "\u2026")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    role: "button",
    tabIndex: 0,
    className: "pagination-link",
    onClick: function onClick() {
      return onChange(total);
    },
    "aria-label": "Page ".concat(total),
    "aria-current": "page",
    disabled: disabled
  }, total))))));
};

Pagination.defaultProps = {
  total: 1,
  current: 1,
  delta: 1,
  next: 'Next',
  previous: 'Previous',
  renderAs: 'nav',
  showPrevNext: true,
  autoHide: true
};
var _default = Pagination;
exports["default"] = _default;
//# sourceMappingURL=pagination.js.map