import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import { HomePage } from 'components'

import theme from './themes/default'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&subset=cyrillic-ext');
  body {
    margin: 0;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </ThemeProvider>
  )
}

export default App
