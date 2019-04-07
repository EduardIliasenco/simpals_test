// @flow
import React from 'react'
import styled from 'styled-components'
import nanoid from 'nanoid'

import { HashTag } from 'components'

const StyledHashTagSet = styled.figure`
  padding: 14px 0 14px;
  margin: 0;
`

export const HashTagSetComponent = ({ tags }: { tags: Array<string> }) => (
  <StyledHashTagSet>
    {tags && !!tags.length && tags.map(tag => <HashTag key={nanoid()}>#{tag}</HashTag>)}
  </StyledHashTagSet>
)

export default HashTagSetComponent
