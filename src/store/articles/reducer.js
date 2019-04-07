import { SET_ARTICLES, ARTICLE_ADD } from 'store/actionTypes'
import { createReducer } from 'store/reducerUtils'

export const initialState = {}

export const handlers = {
  [SET_ARTICLES]: (state, { articles }) => ({
    ...state,
    entities: [...articles],
  }),
  [ARTICLE_ADD]: (state, { article }) => ({
    ...state,
    entities: [
      article,
      ...state.entities,
    ],
  }),
}

export default createReducer(initialState, handlers)
