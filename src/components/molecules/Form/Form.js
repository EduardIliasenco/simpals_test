// @flow
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getKeysAndValues } from 'utils/formHelpers'
import { getForm } from 'store/forms/selectors'
import * as actions from 'store/actions'

const StyledForm = styled.form`
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
`

type Props = {
  children?: any,
  form?: {},
  name: string,
  actionName?: string,
  dispatch: Function,
}

export const Form = ({ name, actionName, children, form, ...props }: Props) => (
  <StyledForm
    onSubmit={(e) => {
      e.preventDefault()
      if (actionName && actions[actionName] instanceof Function) {
        props.dispatch(actions[actionName](getKeysAndValues(form, true), name))
      }
    }}
  >
    {children}
  </StyledForm>
)

const mapStateToProps = (state, ownProps) => ({
  form: getForm(state, ownProps.name),
})

export default connect(mapStateToProps)(Form)
