module.exports = {
  isTallEnough: function(child, ride) {
    if (child.height >= ride.minHeight) {
      return false;
    } else {
      return true;
    };
  }
};
