import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const ARR_FROM_N = n.toString().split("");
  const MIN_DIGIT = Math.min(...ARR_FROM_N);
  for(let i=0; i<ARR_FROM_N.length; i++){
    if(ARR_FROM_N[i]==MIN_DIGIT){
      ARR_FROM_N[i] = "";
      return Number(ARR_FROM_N.join(""));
    }
  }
  
}

// deleteDigit(152);
