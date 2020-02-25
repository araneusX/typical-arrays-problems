
exports.min = function min (array) {
  return !array || array.length === 0 ? 0 : array.reduce((min, current) => current < min ? current : min, array[0]);
}

exports.max = function max (array) {
  return !array || array.length === 0 ? 0 : array.reduce((max, current) => current > max ? current : max, array[0]);
}

exports.avg = function avg (array) {
  return !array || array.length === 0 ? 0 : (array.reduce((sum, current) => sum + current, 0)) / array.length;
}
