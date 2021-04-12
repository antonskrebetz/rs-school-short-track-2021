/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
      count += 1;
      i--;
    } else if (count > 1) {
      arr[i] = `${count}${arr[i]}`;
      count = 1;
    }
  }
  return arr.join('');
}

module.exports = encodeLine;
