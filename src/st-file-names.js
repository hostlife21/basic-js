import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default  function renameFiles(names) {
  const DICT = {};
  return names.reduce((acc, name) => {
    if (!DICT[name]) {
      DICT[name] = fileNameCounter();
    }
    acc.push(acc.includes(name) ? `${name}(${DICT[name]()})` : name);
    return acc;
  }, []);
}
function fileNameCounter() {
  let num = 1;
  return function addition() {
    return num++;
  };
}
// console.log(renameFiles(["doc", "doc", "image", "doc(1)", "doc"]));
