const urlJoin = require("./url-join");

module.exports = function(source, relative) {
  var base;
  if (source.indexOf("://") > 0) {
    base = urlJoin(source, relative);
  } else {
    if (relative.indexOf("://") > 0) {
      base = relative;
    } else {
      base = source + relative;
    }
  }
  return base;
};
