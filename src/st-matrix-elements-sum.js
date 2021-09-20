import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  
  let transMatrix = [];
  let elementsSum = 0;
  const transpose = (arr) => arr[0].map((col, i) => arr.map((row) => row[i]));
  // throw new Error('Not implemented');
  transMatrix = transpose(matrix);
  for (let rowCount = 0; rowCount < transMatrix.length; rowCount++) {
    for (
      let columnCount = 0;
      columnCount < transMatrix[0].length;
      columnCount++
    ) {
      if (transMatrix[rowCount][columnCount] > 0) {
        elementsSum += transMatrix[rowCount][columnCount];
      } else {
        break;
      }
    }
  }
  return elementsSum;
}

