import { put, takeEvery, select } from 'redux-saga/effects'
import { createBrowserHistory } from 'history'
import isArray from 'lodash/isArray'
import isObject from 'lodash/isObject'
import { loadState, saveState } from 'utils/localStorage'
import * as db from 'db/posts.json'
import * as actions from 'store/actionTypes'
import { setFormFieldError, clearForm } from 'store/actions'
import { getField } from 'store/forms/selectors'
import routes from 'routes'
import { createValidator, required } from 'services/validation'
import { customHistory } from 'index'
import { getArticles, getArticlesId } from './selectors'
import { setArticles, articleAdd } from './actions'

const articles = [...db.default]
const splitTags = tags =>
  ((tags.search(', ') >= 0 ? tags.split(',') : tags.split(' ')) || [])
    .filter(tag => !!tag)
    .map(tag => tag.trim())

export function* loadArticles() {
  let { entities } = loadState('articles')

  if (!isArray(entities) || (isArray(entities) && !entities.length)) {
    saveState({ entities: [...articles] }, 'articles')
    entities = [...articles]
  }

  yield put(setArticles(entities))
}

export function* saveArticle({ payload }) {
  if (payload.article) {
    const { article, formName } = payload
    const articlesIds = yield select(getArticlesId) || [-1]
    const id = Math.max(...articlesIds) + 1
    const validate = createValidator({
      title: [required],
      body: [required],
      tags: [required],
    })
    const errors = validate(article)

    if (isObject(errors) && Object.keys(errors).length) {
      yield put({
        type: actions.FORM_VALIDATE_ERROR,
        payload: {
          errors,
          formName,
        },
      })
    } else {
      yield put(articleAdd({ id, ...article, tags: splitTags(article.tags) }))
      const articles = yield select(getArticles)
      saveState({ entities: [...articles] })
      yield put(clearForm(formName))
      yield customHistory.push(routes.articles)
    }
  }
}

export function* fieldChangeValidation({ payload }) {
  const { name, formName } = payload

  if (payload && name && formName) {
    const { error, value } = yield select(state => getField(state, formName, name))
    if (error) {
      const validate = createValidator({ [name]: [required] })
      const errors = validate({ [name]: value })

      yield put(setFormFieldError(errors[name] || [], formName, name))
    }
  }
}

export function* deleteArticles({ payload }) {
  if (payload && typeof payload.id === 'number') {
    const { id } = payload
    const articles = yield select(getArticles)
    const filteredArticles = articles.filter(article => article.id !== id)
    yield put(setArticles(filteredArticles))
    saveState({ entities: [...filteredArticles] })
  }
}

export default function* () {
  yield takeEvery(actions.INIT, loadArticles)
  yield takeEvery(actions.ARTICLE_SAVE, saveArticle)
  yield takeEvery(actions.ARTICLE_DELETE, deleteArticles)
  yield takeEvery(actions.FORM_FIELD_CHANGE, fieldChangeValidation)
}
