import {
  FORM_FIELD_CHANGE,
  FORM_FIELD_INIT,
  FORM_FIELD_ERROR,
  FORM_FIELD_DISABLED,
  FORM_VALIDATE_ERROR,
} from 'store/actionTypes'
import { createReducer } from 'store/reducerUtils'
import { checkNested } from 'utils/checkNested'

export const initialState = {}

export const handlers = {
  [FORM_FIELD_CHANGE]: (state, { formName, name, value }) => ({
    ...state,
    [formName]: {
      ...state[formName],
      [name]: {
        ...checkNested(state, [formName, name], {}),
        value,
      },
    },
  }),
  [FORM_FIELD_INIT]: (state, { init }) => ({
    ...state,
    [init.formName]: {
      ...state[init.formName],
      [init.name]: {
        ...checkNested(state, [init.formName, init.name], {}),
        ...init,
      },
    },
  }),
  [FORM_FIELD_ERROR]: (state, { formName, name, error }) => {
    const errors = {
      [formName]: {
        ...state[formName],
        [name]: {
          ...checkNested(state, [formName, name], {}),
          error: {
            ...(error && error.length ? { error } : {}),
          },
        },
      },
    }

    return {
      ...state,
      ...errors,
    }
  },
  [FORM_FIELD_DISABLED]: (state, { formName, name, value }) => ({
    ...state,
    [formName]: {
      ...state[formName],
      [name]: {
        ...checkNested(state, [formName, name], {}),
        disabled: value,
      },
    },
  }),
  [FORM_VALIDATE_ERROR](state, { formName, errors = {} }) {
    const keys = state[formName] ? Object.keys(state[formName]) : {}
    const fields = { ...state[formName] }
    keys.forEach((field) => {
      const valisationError = errors[field]

      fields[field] = {
        ...state[formName][field],
        error: errors[field] ? { error: valisationError } : {},
      }
    })
    return {
      ...state,
      [formName]: { ...fields },
    }
  },
}

export default createReducer(initialState, handlers)
