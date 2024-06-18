// https://leetcode.com/problems/can-place-flowers

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let count = 0;
  const size = flowerbed.length

  for (let i = 0; i < size; i++) {
    if (flowerbed[i] === 0) {
      const prev = i === 0 || flowerbed[i - 1] === 0;
      const next = i === size - 1 || flowerbed[i + 1] === 0;

      if (prev && next) {
        flowerbed[i] = 1;
        count++;
      }
    }
  }

  return count >= n;
};