export const createReducer = (initialState, handlers) => (state = initialState, action) =>
  /* eslint-disable */
  handlers.hasOwnProperty(action.type)
    ? handlers[action.type](state, action.payload)
    : state
