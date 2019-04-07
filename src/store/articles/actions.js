// @flow
import { ARTICLE_ADD, ARTICLE_DELETE, SET_ARTICLES, ARTICLE_SAVE } from 'store/actionTypes'

type Action = {
  type: string,
  payload?: {},
}

export const articleDelete = (id: number): Action => ({
  type: ARTICLE_DELETE,
  payload: { id },
})


export const articleAdd = (article: {}): Action => ({
  type: ARTICLE_ADD,
  payload: { article },
})

export const setArticles = (articles: Array<{}> = []): Action => ({
  type: SET_ARTICLES,
  payload: { articles: [...articles] },
})

export const articleSave = (article: {}, formName: string) => ({
  type: ARTICLE_SAVE,
  payload: { article, formName },
})
