import { checkNested } from 'utils/checkNested';

/**
 * Returns formObject keys with value from their objects
 * @param {Object} formObject Form object from Redux Store
 * @param {Boolean} emptyKeys If this option is specified, it will set empty keys in result object. Else it will return object without keys that are empty
 */
export const getKeysAndValues = (formObject, emptyKeys = false, filter = []) => {
  if (formObject && typeof formObject === 'object') {
    let keys = Object.keys(formObject);
    const result = {};

    if (filter.length) keys = keys.filter(itm => filter.indexOf(itm) >= 0);

    keys.forEach((itm) => {
      if (
        typeof formObject[itm] === 'string'
        || typeof formObject[itm] === 'number'
      ) {
        result[itm] = formObject[itm];
      } else {
        const value = checkNested(formObject, [itm, 'value']);

        if (value || emptyKeys) {
          result[itm] = value || '';
        }
      }
    });

    return result;
  } else {
    throw Error('Form object should be specified.');
  }
};

/**
 * Turns object to a FormData instance
 * @param {Object} object Any plain object with 1 nested level keys
 * @returns {FormData}
 */
export const object2Form = (object) => {
  const form = new FormData();

  if (object) {
    const keys = Object.keys(object);

    keys.forEach((field) => {
      form.append(field, typeof object[field] === 'object' ? JSON.stringify(object[field]) : object[field]);
    });
  }

  return form;
};

export default getKeysAndValues;
