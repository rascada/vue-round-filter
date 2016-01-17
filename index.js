module.exports = function round(value, accuracy) {
  return value ? value.toFixed(accuracy) : value;
};
