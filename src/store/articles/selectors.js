import { checkNested } from 'utils/checkNested'

export const getArticle = (state, id) => {
  return checkNested(state, ['articles', 'entities'], []).find(itm => itm.id === id) || {}
}
export const getArticles = state => state.articles.entities || [];
export const getArticlesId = state => (state.articles.entities || []).map(article => article.id)
