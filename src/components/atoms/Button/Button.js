// @flow
import React from 'react'
import styled from 'styled-components'
import { bool2num } from 'utils/styledHelpers'
import { palette } from 'styled-theme'

const StyledButton = styled.button`
  outline: none!important;
  appearance: none;
  padding: 8px 14px;
  border: 0;
  border-radius: 4px;
  color: ${palette(1)};
  background: ${palette(0)};
  box-sizing: border-box;
  box-shadow: none;
  font-family: inherit;
  font-weight: bold;
  
  &:hover {
    ${props => props.theme ? 'red' : 'darkslateblue'};
  }
`

type Props = {
  type?: string,
  text?: string,
  theme?: string,
  palette?: string,
  onClick?: Function,
  disabled: boolean,
  children?: any,
}

export default ({
  type,
  text,
  theme,
  onClick,
  children,
  disabled,
  palette = 'normal',
}: Props) => (
  <StyledButton
    {...{
      type,
      theme,
      onClick,
      palette,
      disabled: bool2num(disabled),
    }}
  >
    {children || text || ''}
  </StyledButton>
)
