// @flow
import React from 'react'
import styled from 'styled-components'
import {
  Form,
  Input,
  Button,
  Articles,
} from 'components'

const FORM_HEIGHT: number = 240

const StyledHomeWrapper = styled.div`
  display: block;
  padding: 0;
  margin: 0;
`

const StyledFormWrapper = styled.section`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: ${FORM_HEIGHT}px;
  padding: 24px;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0 0 10px rgba(20, 20, 20, 0.15), 0 -1px 4px rgba(20, 20, 20, 0.1);
`

const StyledArticlesWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - ${FORM_HEIGHT}px);
  min-height: min-content;
  padding: 0;
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

const ADD_ARTICLE_FORM_NAME = 'addArticle'

const HomePage = () => {
  return (
    <StyledHomeWrapper>
      <StyledArticlesWrapper>
        <Articles />
      </StyledArticlesWrapper>
      <StyledFormWrapper>
        <Form
          name={ADD_ARTICLE_FORM_NAME}
          actionName="articleSave"
        >
          <Input
            name="title"
            formName={ADD_ARTICLE_FORM_NAME}
            placeholder="Заголовок"
          />
          <Input
            name="body"
            formName={ADD_ARTICLE_FORM_NAME}
            placeholder="Запись"
          />
          <Input
            name="tags"
            formName={ADD_ARTICLE_FORM_NAME}
            placeholder="Тег, ещё тег"
          />
          <Button type="submit" text="Добавить" />
        </Form>
      </StyledFormWrapper>
    </StyledHomeWrapper>
  )
}

export default HomePage
