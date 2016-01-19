module.exports = function round(value, accuracy, keep) {
  let fixed = value.toFixed(accuracy);

  while (!keep && !+fixed.slice(-1)) {
    fixed = fixed.slice(0, -1);
  }

  return value;
};
