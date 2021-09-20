import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  const word1 = s1.split("").sort();
  const word2 = s2.split("").sort();
  for (let letter = 0; letter < s1.length; letter++) {
    if (word2.indexOf(word1[letter]) >= 0) {
      word2.splice(word2.indexOf(word1[letter]), 1);
      counter++;
    }
  }
  return counter;
}
