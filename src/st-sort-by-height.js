import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let arrNew = arr.filter((height) => height > 0).sort((a, b) => a - b);
  let arrNewIndex = 0;
  for (let arrIndex = 0; arrIndex < arr.length; arrIndex++) {
    if (arr[arrIndex] > 0) {
      arr[arrIndex] = arrNew[arrNewIndex];
      arrNewIndex++;
    }
  }
  return arr;
}

// sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
