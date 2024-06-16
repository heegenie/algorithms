// https://leetcode.com/problems/greatest-common-divisor-of-strings

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  if (str1 === str2) return str1;

  const long = str1.length >= str2.length ? str1 : str2;
  const short = str1.length < str2.length ? str1 : str2;

  if (long.startsWith(short)) {
    return gcdOfStrings(long.slice(short.length), short);
  }

  return "";
};

