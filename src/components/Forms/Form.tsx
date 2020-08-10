import React from 'react'
import { Flex, Input, Span, styled } from '@icstark/ui'
import { keyframes } from 'styled-components'

export const Form = styled(Flex)`
  position: relative;
  flex-direction: ${(props: any) =>
    ['row', 'rowToColumn'].includes(props.variant)
      ? 'row'
      : ['column', 'columnToRow'].includes(props.variant)
      ? 'column'
      : 'column'};
  align-items: ${(props: any) =>
    ['row', 'rowToColumn'].includes(props.variant)
      ? 'center'
      : ['column', 'columnToRow'].includes(props.variant)
      ? 'flex-start'
      : 'flex-start'};

  justify-content: ${(props: any) =>
    ['row', 'rowToColumn'].includes(props.variant)
      ? 'space-between'
      : ['column', 'columnToRow'].includes(props.variant)
      ? 'flex-start'
      : 'flex-start'};

  @media screen and (max-width: 540px) {
    flex-direction: ${(props: any) =>
      ['rowToColumn'].includes(props.variant)
        ? 'column'
        : ['columnToRow'].includes(props.variant)
        ? 'row'
        : 'column'};
    align-items: ${(props: any) =>
      ['row', 'rowToColumn'].includes(props.variant)
        ? 'flex-start'
        : ['column', 'columnToRow'].includes(props.variant)
        ? 'center'
        : 'flex-start'};

    justify-content: ${(props: any) =>
      ['row', 'rowToColumn'].includes(props.variant)
        ? 'flex-start'
        : ['column', 'columnToRow'].includes(props.variant)
        ? 'space-between'
        : 'flex-start'};
  }
`

const pulse = keyframes`
  from {
    height: 2px;
    width: 2px;
    border: 1px solid rgba(0, 0, 0, 0.6);
  }
  to {
    top: 5px;
    right: 5px;
    height: 6px;
    width: 6px;
    border: 4px solid rgba(0, 0, 0, 0.2);
  }
`

export const LoaderForm = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  &:before,
  &:after {
    content: '';
    position: absolute;
    display: block;
    border-radius: 50%;
    height: 2px;
    width: 2px;
    right: 10px;
    top: 10px;
    animation-name: ${pulse};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
    border: 1px solid rgba(0, 0, 0, 0.6);
  }
  &:after {
    animation-delay: 0.5s;
  }
`

interface IForm {
  name: string
  label?: string
  className?: string
  isLoading?: boolean
  style?: {
    container?: React.CSSProperties
    label?: React.CSSProperties
    formElement?: React.CSSProperties
  }
  min?: number
  max?: number
  variant?: 'row' | 'column' | 'rowToColumn' | 'columnToRow'
  onChange?: (item: any) => void
  onBlur?: (item: any) => void
  placeholder?: string
  fieldErrors?: any
  disabled?: boolean
  value?: string | undefined
}

interface IFormInput extends IForm {
  type: string
  checked?: boolean
}

interface IFormSelect extends IForm {
  list: any[]
}

export function FormInput({
  type,
  name,
  min,
  max,
  label,
  style = {},
  value,
  onBlur,
  variant,
  checked,
  onChange,
  disabled,
  isLoading,
  placeholder,
  fieldErrors
}: IFormInput) {
  const styles = {
    ...(['checkbox', 'radio'].includes(type) ? {} : { flexGrow: 1 }),
    ...style.container
  }
  return (
    <Form variant={variant} alignItemsFlexStart style={{ ...styles, margin: '5px 0px' }}>
      {label && (
        <Span variant="secondary" style={{ ...style.label, paddingBottom: 5, fontSize: 12 }}>
          {label}
        </Span>
      )}
      <Input
        type={type}
        name={name}
        onBlur={onBlur}
        style={{
          ...style.formElement,
          width: '100%',
          padding: '6px 11px',
          cursor: 'pointer'
        }}
        value={value}
        disabled={disabled}
        checked={checked}
        placeholder={placeholder}
        onChange={(e: any) => onChange && onChange(e.target)}
      />
      {isLoading ? <LoaderForm /> : null}
      {fieldErrors[name] && (
        <Span p={2} style={{ color: '#e21515', height: '15px' }} variant="secondary">
          {'*' + fieldErrors[name]}
        </Span>
      )}
    </Form>
  )
}

export function FormSelect({
  list,
  name,
  label,
  style = {},
  value,
  onBlur,
  variant,
  disabled,
  onChange,
  className,
  placeholder,
  fieldErrors
}: IFormSelect) {
  return (
    <Form variant={variant} style={{ flexGrow: 1, margin: '5px 0px', ...style.container }}>
      {label && (
        <Span variant="secondary" style={{ ...style.label, paddingBottom: 5, fontSize: 12 }}>
          {label}
        </Span>
      )}
      <select
        name={name}
        value={value}
        className={className}
        style={{
          // width: '100%',
          ...style.formElement,
          padding: '6px 11px',
          cursor: 'pointer',
          width: '100%'
        }}
        disabled={disabled}
        onBlur={onBlur}
        onChange={(e: any) => onChange && onChange(e.target)}
      >
        <option value={''}>{placeholder}</option>
        {list.map((item: any, i: number) => (
          <option value={item.value || item.id} key={i}>
            {item.label || item.name}
          </option>
        ))}
      </select>
      {fieldErrors[name] && (
        <Span p={2} style={{ color: '#e21515', height: '15px' }} variant="secondary">
          {'*' + fieldErrors[name]}
        </Span>
      )}
    </Form>
  )
}

export function MyFormSelect({
  list,
  name,
  label,
  style = {},
  value,
  onBlur,
  variant,
  disabled,
  onChange,
  className,
  placeholder,
  fieldErrors
}: IFormSelect) {
  return (
    <Form variant={variant} style={{ flexGrow: 1, margin: '5px 0px', ...style.container }}>
      {label && (
        <Span variant="secondary" style={{ ...style.label, paddingBottom: 5, fontSize: 12 }}>
          {label}
        </Span>
      )}
      <select
        name={name}
        value={value}
        className={className}
        style={{
          // width: '100%',
          ...style.formElement,
          padding: '7px 11px',
          cursor: 'pointer',
          width: '90%'
        }}
        disabled={disabled}
        onBlur={onBlur}
        onChange={(e: any) => onChange && onChange(e.target)}
      >
        <option value={''}>{placeholder}</option>
        {list.map((item: any, i: number) => (
          <option value={item.id} key={i}>
            {item.name}
          </option>
        ))}
      </select>
      {fieldErrors[name] && (
        <Span p={2} style={{ color: '#e21515', height: '15px' }} variant="secondary">
          {'*' + fieldErrors[name]}
        </Span>
      )}
    </Form>
  )
}
