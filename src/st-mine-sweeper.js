import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  let newMatrix = [];
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
      if (matrix[rowIndex][colIndex]!==true) {
        console.log(`rowIndex : ${rowIndex} - colIndex : ${colIndex}`);
        markCells(rowIndex, colIndex, matrix);
      } 
      // else if (typeof(matrix[rowIndex][colIndex]!=="number")){
      //   matrix[rowIndex][colIndex]=0;
      // } 
    }
  }
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    for (let colIndex = 0; colIndex < matrix.length; colIndex++) {
      if (matrix[rowIndex][colIndex] === true) {
        matrix[rowIndex][colIndex]=1;
      }
    }
  }
  
  return matrix;
}

function markCells(rowIndex, colIndex, mineArr) {
  let mineCounter = 0;
  for (let x = rowIndex - 1; x <= rowIndex + 1; x++) {
    if (x < 0||x > mineArr.length - 1) {
        continue;
      }
    for (let y = colIndex - 1; y <= colIndex + 1; y++) {
      if (y < 0||y > mineArr.length - 1) {
        
        continue;
      }
      if (mineArr[x][y]===true) {
        mineCounter++;
      }
    }
  }
  // console.log(mineCounter);
  mineArr[rowIndex][colIndex]=mineCounter;
  // console.log(mineArr[rowIndex][colIndex]);
}
// console.log(
//   minesweeper([
//     [false, false, false],
//     [false, false, false],
//   ])
// );
