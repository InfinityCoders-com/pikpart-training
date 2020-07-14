import React from 'react'
import { Flex, Input, styled, Span } from '@icstark/ui'
import { MInput, MBtn, MTextArea } from '../style'

const coursesData = (array: any) => {
  const data = array.map((item: any) => {
    return <MOption value={item}>{item}</MOption>
  })
  return data
}

const MOption = styled.option`
  font-weight: 600 !important;
`

const Select = ({ options, placeholder, name, value, onChange, error, my }: any) => {
  const [state, setState] = React.useState(false)

  const changeMe = ({ target }: any) => {
    if (target.value) {
      setState(true)
    } else setState(false)
  }
  return (
    <>
      <select
        className="my-select"
        style={{
          borderRadius: 18,
          fontSize: 18,
          fontWeight: placeholder ? (state ? 600 : 400) : 600,
          padding: '19px 40px',
          background: '#fff',
          outline: 'none',
          border: '1px solid rgba(179,179,179)',
          color: 'rgba(0,0,0,0.65)',
          margin: `${my * 3}px 0px`
        }}
        name={name}
        value={value}
        onChange={(target: any) => {
          onChange(target)
          changeMe(target)
        }}
      >
        {placeholder && (
          <option selected value="">
            Select {placeholder}
          </option>
        )}{' '}
        {coursesData(options)}
      </select>
      {error && <Span variant="danger">{error}</Span>}
    </>
  )
}

function MyInput({
  inputStyle,
  onFocus,
  onBlur,
  onChange,
  type,
  variant,
  placeholder,
  name,
  my,
  rows,
  ghost,
  onClick,
  children,
  options
}: any) {
  return type === 'button' ? (
    <MBtn variant={variant} ghost={ghost} onClick={onClick} my={my}>
      {children}
    </MBtn>
  ) : type === 'textarea' ? (
    <Flex style={{ position: 'relative' }} width={1}>
      <label className="textarea" style={inputStyle ? { top: 20, fontSize: 14 } : {}}>
        {placeholder}
      </label>
      <MTextArea
        width={1}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
        my={my}
        variant={variant}
        name={name}
        onChange={onChange}
        value={children}
        ghost={ghost}
        onClick={onClick}
        rows={rows || 10}
      />
    </Flex>
  ) : type === 'select' ? (
    <Select
      options={options}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      my={my}
    />
  ) : (
    <Flex style={{ position: 'relative' }} width={1}>
      <label style={inputStyle ? { top: 20, fontSize: 14 } : {}}>{placeholder}</label>
      <MInput
        width={1}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
        my={my}
        variant={variant}
        name={name}
        onChange={onChange}
        value={children}
        ghost={ghost}
        onClick={onClick}
      />
    </Flex>
  )
}

export default MyInput
