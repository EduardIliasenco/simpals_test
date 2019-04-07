// @flow
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getArticlesId } from 'store/articles/selectors'
import nanoid from 'nanoid'

import { Article } from 'components'

const StyledArticlesList = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: auto; 
`

export const ArticlesComponent = ({ articlesId }: { articlesId: Array<number> }) => (
  <StyledArticlesList>
    {[...articlesId].map(id => <Article {...{ id, key: nanoid() }} />)}
  </StyledArticlesList>
)

const mapStateToProps = state => ({
  articlesId: getArticlesId(state),
})

export default connect(mapStateToProps)(ArticlesComponent)
