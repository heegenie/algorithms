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


/**
 * using two pointers
 */
var mergeAlternately = function(word1, word2) {
  let result = '';
  let i = 0;
  let j = 0;

  while (i < word1.length || j < word.length) {
    if (i < word1.length) {
      result += word1[i];
      i++;
    }

    if (j < word2.length) {
      result += word2[j];
      j++;
    }
  }

  return result;
}
