import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  let sumDigits = 0;
  if (transformToArr(n).length === 1) {
    console.log(transformToArr(n));
    console.log(+transformToArr(n).join(""));
    return +transformToArr(n).join("");
  } else {
    sumDigits = transformToArr(n).reduce((acc, curr) => acc + +(curr), 0);
    console.log(sumDigits)
    return getSumOfDigits(sumDigits);
  }
}

function transformToArr(num){
  return num.toString().split("");
}

// console.log(getSumOfDigits(96));
