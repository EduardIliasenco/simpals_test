// @flow
import React from 'react'
import styled from 'styled-components'
import { Articles } from 'components'

const StyledHomeWrapper = styled.div`
  display: block;
  padding: 0;
  margin: 0;
`

const StyledArticlesWrapper = styled.section`
  width: 100%;
  min-height: min-content;
  max-height: calc(100% - 50px);
  padding: 0;
  margin: auto;
  box-sizing: border-box;
  
  &::before {
    content: '';
    position: absolute;
    z-index: 999;
    top: -24px;
    left: 0;
    display: block;
    width: 100%;
    height: 24px;
    box-shadow: 0 0 35px 8px white, 0 0 20px 2px white, 0 0 10px white, 0 0 4px white;
  } 
`

const ArticlesList = () => {
  return (
    <StyledHomeWrapper>
      <StyledArticlesWrapper>
        <Articles />
      </StyledArticlesWrapper>
    </StyledHomeWrapper>
  )
}

export default ArticlesList
