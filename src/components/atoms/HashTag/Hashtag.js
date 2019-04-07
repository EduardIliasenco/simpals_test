// @flow
import React from 'react'
import styled from 'styled-components'

const StyledHashTag = styled.span`
  color: rgb(20, 20, 20);
  padding: 1px 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fff;
  font-family: inherit;
  
  & + * {
    margin-left: 5px;
  }
`

type Props = {
  text?: string,
  children?: any
}

export default ({ text, children }: Props) => (<StyledHashTag>{children || text}</StyledHashTag>)
