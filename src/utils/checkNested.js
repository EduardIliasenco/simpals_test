/* eslint-disable */

/**
 * Checks if each key of nestedKeys{Array} or String (in dot notation) exists in targetObject{Object}
 *   if one of key doesn't then replaceUnexist{Any} will be returned
 *   in else cases will be returned false or last key value of nestedKeys{Array}
 *   in targetObject{Object}
 * @param {Object} targetObject Any Object or Array that must (or not) contain nested keys
 * @param {Array|String|Array<Array<String>>} nestedKeys Array of strings, names of nested keys
 * @param replaceUnexist Any type that will be returned if there is no match or key doesn't exist
 *
 * @example
 *  const targetObject = { one: { two: { three: 'ok' } } };
 *
 *  checkNested(targetObject, ['one', 'two', 'three'], {}) // 'ok'
 *  checkNested(targetObject, 'one.two.four', {}) // {}
 *  checkNested(targetObject, ['one', 'two', 'four']) // false
 * @returns {*}
 */
export const checkNested = (targetObject, nestedKeys = [], replaceUnexist) => {
  let result = targetObject;
  let keys = nestedKeys;
  if (typeof keys === 'string') keys = keys.split('.');
  if (
    typeof nestedKeys === 'object'
    && nestedKeys.length
    && typeof nestedKeys[0] === 'object'
  ) return checkNestedObjects(targetObject, nestedKeys);

  if (!result) return false;

  for (let i = 0; i < keys.length; i++) {
    if (!result || !Object.hasOwnProperty.call(result, keys[i])) {
      if (replaceUnexist !== undefined) return replaceUnexist;
      return false;
    }
    result = result[keys[i]];
  }
  return result;
};

/**
 * Checks and return nestedKeys in targetObject (checkNested function helper)
 * @param {Object} targetObject
 * @param {Array<Array<String>>} nestedKeys
 */
export function checkNestedObjects (targetObject, nestedKeys) {
  let result = {};

  nestedKeys.forEach((itm) => {
    const foundedItm = checkNested(targetObject, itm.join('.'), {});
    result = {
      ...result,
      ...(typeof foundedItm === 'string' ? { [itm[itm.length - 1]]: foundedItm } : foundedItm)
    };
  });

  return result;
}

/**
 * Checks prop existing in obj object
 * @param {Object} obj
 * @param {String} name
 * @returns {boolean}
 */
export const hasProp = (obj = {}, name = '') => Object.prototype.hasOwnProperty.call(obj, name);

export default checkNested;
/* eslint-enable */
