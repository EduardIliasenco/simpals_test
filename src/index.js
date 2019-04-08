// https://github.com/diegohaz/arc/wiki/Example-app
import 'react-hot-loader/patch'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import configureStore from 'store/configure'
import App from 'components/App'

export const customHistory = createBrowserHistory()

const store = configureStore({})

const renderApp = () => (
  <Provider store={store}>
    <Router history={customHistory}>
      <App />
    </Router>
  </Provider>
)

const root = document.getElementById('app')
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    render(renderApp(), root)
  })
}
