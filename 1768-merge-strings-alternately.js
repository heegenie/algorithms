// https://leetcode.com/problems/merge-strings-alternately

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  const arr = [];
  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    arr.push(word1[i], word2[i])
  }

  return arr.join('');
};