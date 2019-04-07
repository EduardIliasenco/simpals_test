// @flow
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import nanoid from 'nanoid'
import {
  getInputError,
  getInputValue,
  getIsFieldExists,
  getInputIsDisabled,
} from 'store/forms/selectors'
import { formFieldChange, inputSetInit } from 'store/forms/actions'

const StyledWrapper = styled.div`
  display: flow;
  flex-direction: column;
  width: 100%;
  min-width: 140px;
  
  & + * {
    margin-top: 12px;
  }
`

const StyledInput = styled.input.attrs({ type: 'text' })`
  outline: none;
  appearance: none;
  display: block;
  width: 100%;
  height: 34px;
  padding: 0 8px 1px;
  border: 1px solid ${props => props.error ? 'red' : '#ccc'};
  border-radius: 8px;
  background: transparent;
  font-family: inherit;
  color: rgb(20, 20, 20);
  box-shadow: 0 0 0 ${props => props.error ? 'red' : 'rgba(0, 0, 0, .075)'};
  transition: box-shadow 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    box-shadow: 0 0 5px ${props => props.error ? 'red' : 'rgba(0, 0, 0, .075)'};
  }
`

const StyledLabel = styled.label`
  color: ${props => props.error ? 'red' : 'rgb(20, 20, 20)'};
`

type Props = {
  name: string,
  type?: string,
  value?: string,
  label?: string,
  error?: boolean,
  disabled: boolean,
  formName?: string,
  placeholder?: string,
  isFieldExists: boolean,
  inputSetInit: Function,
  formFieldChange: Function,
}

export class InputComponent extends PureComponent<Props> {
  static defaultProps = {
    name: '',
    error: undefined,
    disabled: false,
    placeholder: '',
    type: 'text',
    value: '',
  }

  componentDidMount() {
    this.id = nanoid()
    const {
      name, formName, value, isFieldExists, error, disabled,
    } = this.props

    if (!isFieldExists) {
      this.props.inputSetInit({
        name,
        value,
        error,
        disabled,
        formName,
      })
    }
  }

  onChange = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    const { name, formName } = this.props
    const { value = '' } = event.target

    if (this.props.formFieldChange instanceof Function) this.props.formFieldChange(value, name, formName)
  }

  render() {
    const { id, onChange } = this
    const {
      name,
      label,
      value,
      error,
      disabled,
      placeholder,
      type = 'text',
    } = this.props
    const fieldError = error ? error.error : ''

    return (
      <StyledWrapper>
        {!!label && (
          <StyledLabel error={fieldError} htmlFor={id}>
            {fieldError || label}
          </StyledLabel>
        )}
        <StyledInput
          error={fieldError}
          id={label && id}
          name={name}
          type={type}
          value={value}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
        />
      </StyledWrapper>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  isFieldExists: getIsFieldExists(state, ownProps.name, ownProps.formName),
  value: ownProps.formName ? getInputValue(state, ownProps.name, ownProps.formName) : ownProps.value,
  error: ownProps.formName ? getInputError(state, ownProps.name, ownProps.formName) : ownProps.error,
  disabled: getInputIsDisabled(state, ownProps.name, ownProps.formName) || ownProps.disabled,
})

const mapDispatchToProps = {
  formFieldChange,
  inputSetInit,
}

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent)
