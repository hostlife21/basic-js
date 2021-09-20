import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const appearance = [];

  domains.forEach((domain) => {
    appearance.push(
      domain
        .split(".")
        .reverse()
        .reduce((acc, d) => {
          appearance.push(acc);
          return `${acc}.${d}`;
        })
    );
  });
  const count = appearance
    .map((item) => `.${item}`)
    .reduce((acc, dom) => {
      acc[dom] = (acc[dom] || 0) + 1;
      return acc;
    }, {});
  

  return count;
}
