import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import { palette } from 'styled-theme'
import routes from 'routes'

import { AddArticleForm, ArticlesList } from 'components'

import theme from './themes/default'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&subset=cyrillic-ext');
  body {
    display: block;
    padding: 0;
    margin: 0;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    min-height: 100vh;
  }
  #app {
    min-height: 100vh;
  }
`

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  padding: 14px 10px;
  box-shadow: 0 0 4px rgba(20, 20, 20, 0.15);
  box-sizing: border-box;
  background-color: white;
`

const StyledNav = styled.nav`
  display: block;
  width: 100%;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none !important;
  color: ${palette(0)};
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover, &:active, &.active {
    color: ${palette(1)};
  }
  
  & + * {
    margin-left: 14px;
  }
`

StyledNavLink.defaultProps = {
  palette: 'link',
}

const StyledPage = styled.div`
  position: relative;
  padding-top: 50px;
  min-height: 100vh;
  box-sizing: border-box;
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <StyledHeader>
          <StyledNav>
            <StyledNavLink to={routes.form}>
              Добавить статью
            </StyledNavLink>
            <StyledNavLink to={routes.articles}>
              Статьи
            </StyledNavLink>
          </StyledNav>
        </StyledHeader>
        <Switch>
          <Route path="/" component={ArticlesList} exact />
          <Route path={routes.articles} component={ArticlesList} exact />
          <Route path={routes.form} component={AddArticleForm} exact />
        </Switch>
      </StyledPage>
    </ThemeProvider>
  )
}

export default App
