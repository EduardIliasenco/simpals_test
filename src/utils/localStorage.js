/**
 * Loads state from localStorage by widget id
 * @returns {*}
 */
export const loadState = (localStorageName) => {
  try {
    const serializeState = localStorage.getItem(localStorageName)
    if (serializeState === null) {
      return {}
    }

    return {...JSON.parse(serializeState)}
  } catch (e) {
    return {}
  }
}

/**
 * Saves state object in localStorage if it supports
 * @param {Object} state
 */
export const saveState = (state, localStorageName = 'articles') => new Promise((resolve, reject) => {
  try {
    const serializeState = JSON.stringify({ ...state })
    localStorage.setItem(localStorageName, serializeState)
  } catch (e) {
    return reject()
  }
  return resolve()
})

/**
 *
 * @returns {boolean}
 */
export const isLocalStorageAvialable = (() => {
  try {
    localStorage.setItem('storageCheck', 1)
    return localStorage.getItem('storageCheck')
  } catch (e) {
    return false
  }
})()
