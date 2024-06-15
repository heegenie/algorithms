// https://leetcode.com/problems/merge-strings-alternately

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let result = "";
  const minLength = Math.min(word1.length, word2.length);

  for (let i = 0; i < minLength; i++) {
    result += word1[i] + word2[i]
  }

  if (word1.length > minLength) {
    result += word1.slice(minLength);
  } else if (word2.length > minLength) {
    result += word2.slice(minLength);
  }

  return result;
};