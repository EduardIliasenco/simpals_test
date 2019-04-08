import {
  CLEAR_FORM,
  FORM_FIELD_INIT,
  FORM_FIELD_ERROR,
  FORM_FIELD_CHANGE,
} from 'store/actionTypes'

export const formFieldChange = (value, name, formName) => ({
  type: FORM_FIELD_CHANGE,
  payload: {
    name,
    value,
    formName,
  },
})

export const inputSetInit = (init = {}) => ({
  type: FORM_FIELD_INIT,
  payload: {
    init,
  },
})

export function setFormFieldError(error: {} = {}, formName, name) {
  return {
    type: FORM_FIELD_ERROR,
    payload: {
      formName,
      name,
      error,
    },
  }
}


export function clearForm(formName) {
  return {
    type: CLEAR_FORM,
    payload: { formName },
  }
}
