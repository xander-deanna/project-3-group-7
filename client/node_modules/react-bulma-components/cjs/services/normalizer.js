"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeStatus = exports.normalizeAlign = void 0;

var normalizeAlign = function normalizeAlign(align) {
  var map = {
    justify: 'justifyed',
    center: 'centered'
  };
  return map[align] || align;
};

exports.normalizeAlign = normalizeAlign;

var normalizeStatus = function normalizeStatus(status) {
  var map = {
    focus: 'focused',
    hover: 'hovered',
    active: 'active'
  };
  return map[status] || status;
};

exports.normalizeStatus = normalizeStatus;
//# sourceMappingURL=normalizer.js.map