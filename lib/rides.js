module.exports = {
  isTallEnough: function(child, ride) {
    if (child.height >= ride.minHeight && child.height <= ride.maxHeight) {
      return true;
    } else {
      return false;
    };
  }
};
