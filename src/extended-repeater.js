import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (!options.separator){
    options.separator="+";
  }
  if (!options.additionSeparator){
    options.additionSeparator = "|";
  }
  // if (!checkString(str)){str.toString()};
  // if (!checkString(options.addition)){options.addition.toString();};
  const INNER_STR = createString(
    options.addition,
    options.additionRepeatTimes,
    options.additionSeparator
  );
  console.log(INNER_STR);
  const OUTER_STR = createString(
    str + INNER_STR,
    options.repeatTimes,
    options.separator
  );
  return OUTER_STR;
}
function createString(strLine, repeatTimes = 1, separator) {
  let resultArr = [];
  if (strLine === null) {
    strLine = "null";
  };
  for (let i = 0; i < repeatTimes; i++) {
    resultArr.push(strLine);
  }
  return resultArr.join(separator);
}

// function checkString(data){
// if (data && typeof data !== String) {
//   return true;
// } else {
//   return false;
// }
// }
// console.log(
//   repeater(null, {
//     repeatTimes: 3,
//     separator: "??? ",
//     addition: null,
//     additionRepeatTimes: 3,
//     additionSeparator: "!!!",
//   })
// );
