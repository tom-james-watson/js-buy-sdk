"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (array, searchElement) {
  var ObjectifiedArray = Object(array);
  var length = parseInt(ObjectifiedArray.length, 10) || 0;

  if (length === 0) {
    return false;
  }

  var startIndex = parseInt(arguments[2], 10) || 0;
  var index = void 0;

  if (startIndex >= 0) {
    index = startIndex;
  } else {
    index = length + startIndex;

    if (index < 0) {
      index = 0;
    }
  }

  while (index < length) {
    var currentElement = ObjectifiedArray[index];

    /* eslint no-self-compare:0 */
    if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
      // NaN !== NaN
      return true;
    }
    index++;
  }

  return false;
};