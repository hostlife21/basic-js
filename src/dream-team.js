import { NotImplementedError } from "../extensions/index.js";

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

export default function createDreamTeam(members) {
  let arr = [];
  if (members === "" || members === undefined || !Array.isArray(members)) {
    return false;
  } else {
    members.map((item) => {
      if (typeof item === "string") {
        arr.push(item.trim()[0].toUpperCase());
        arr.sort();
      } else {
        return false;
      }
    });
  }
  return arr.join("");
}
