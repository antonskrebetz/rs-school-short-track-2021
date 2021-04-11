/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const groups = n.split('-');
  let count = 0;
  for (let i = 0; i < groups.length; i++) {
    if (/[A-F\d]{2}/.test(groups[i])) {
      count += 1;
    }
  }
  return count === 6;
}

module.exports = isMAC48Address;
