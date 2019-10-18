const urlJoin = require("./url-join");

function isAbsolute(url) {
  return url.indexOf("://") > 0;
}

module.exports = function(first, second) {
  if (typeof second === "undefined") {
    return first;
  }

  // Reverse engineering how url.resolve is supposed to work, this is brutal
  if (isAbsolute(first)) {
    if (isAbsolute(second)) {
      return second; // Second is also absolute
    }
    // First absolute, second not
    return urlJoin(first, second);
  }
  if (isAbsolute(second)) {
    return second; // Second is absolute
  }
  // Neither absolute, combine somehow
  if (first.indexOf("/") === 0) {
    return first;
  }

  return first + second;
};
