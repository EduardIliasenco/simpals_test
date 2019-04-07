import { checkNested } from 'utils/checkNested';
export const getInput = (state, name, formName) => {
  if (state && state.forms && name && formName) {
    return (state.forms[formName] && state.forms[formName][name]) || {}
  }
  return {}
}

export const getInputValue = (...args) => getInput(...args).value
export const getInputIsDisabled = (...args) => getInput(...args).isDisabled
export const getInputError = (...args) => getInput(...args).error
export const getIsFieldExists = (...args) => !!getInput(...args).name
export const getForm = (state, formName) => state.forms[formName] || {}
export const getField = (state, formName, name) => {
  return checkNested(state, ['forms', formName, name], {})
}
