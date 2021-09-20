import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default  function encodeLine(str) {
  
  let tempStr = [];
  if(!str){
    return "";
  }
  for (let i = 0; i < str.length; i++) {
    let regExp = new RegExp(`[${str[i]}]*`, "gi");
    str.match(regExp).map((item, index) => {
      if (item) {
        tempStr[index] = item;
      }
    });
  }
  console.log(tempStr);
  return tempStr.reduce((acc, curr) => acc + ((curr.length>1)?curr.length:"") + curr[0], "");
}

// console.log(encodeLine("abbcca"));

