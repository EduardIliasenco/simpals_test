// @flow
import React from 'react'
import styled from 'styled-components'
import {
  Form,
  Input,
  Button,
} from 'components'

const StyledFormInner = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 320px;
  height: 218px;
  padding: 24px;
  margin: auto;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0 0 10px rgba(20, 20, 20, 0.15), 0 -1px 4px rgba(20, 20, 20, 0.1);
`

const ADD_ARTICLE_FORM_NAME = 'addArticle'

const AddArticleForm = () => {
  return (
    <StyledFormInner>
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
    </StyledFormInner>
  )
}

export default AddArticleForm
