// @flow
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Button, HashTagSet } from 'components'
import { getArticle } from 'store/articles/selectors'
import { articleDelete } from 'store/articles/actions'

const StyledArticle = styled.article`
  display: block;
  width: calc(100% - 48px);
  margin: 0 auto;
  padding: 18px;
  background-color: ${palette(0)};
  border: 1px solid ${palette(1)};
  border-radius: 8px;
  box-sizing: border-box;
  font-family: inherit;
  
  & + * {
    margin-top: 20px;
  }
  
  &:first-child {
    margin-top: 14px;
  }
  
  &:last-child {
    margin-bottom: 14px;
  }
`

const StyledHeader = styled.h1`
  padding: 0 0 8px;
  margin: 0;
  color: ${palette(0)};
  
  &:first-letter {
    text-transform: uppercase;
  }
`

const StyledBody = styled.p`
  padding: 12px 0 6px;
  margin: 0;
  
  &:first-letter {
    text-transform: uppercase;
  }
`

type Props = {
  body: any,
  id: number,
  title: string,
  tags: Array<string>,
  articleDelete: Function,
}

export const ArticleComponent = ({ id, title, body, tags, ...props }: Props) => (
  <StyledArticle palette="article">
    <StyledHeader palette="mainText">{title}</StyledHeader>
    <StyledBody>{body}</StyledBody>
    {tags && !!tags.length && (
      <HashTagSet tags={tags} />
    )}
    <Button palette="delete" text="Удалить" onClick={() => props.articleDelete(id)} />
  </StyledArticle>
)

ArticleComponent.defaultProps = {
  title: '',
  body: '',
}

const mapStateToProps = (state, ownProps) => {
  const { title, body, tags } = getArticle(state, ownProps.id)

  return {
    title,
    body,
    tags,
  }
}

const mapDispatchToProps = {
  articleDelete,
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleComponent);
