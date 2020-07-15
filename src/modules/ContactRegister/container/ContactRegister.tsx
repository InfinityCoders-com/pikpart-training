import React from 'react'
import { Flex, Span, Input, Button, styled } from '@icstark/ui'
import { MyInput } from '../component'
import { FaRegEnvelope, FaMobileAlt, FaWhatsapp, FaMapMarkedAlt } from 'react-icons/fa'

const style = {
  color: '#333',
  fontWeight: 400,
  marginBottom: '11px'
}

const Phone = styled(FaMobileAlt)`
  color: ${(props: any) => props.theme.colors.primary};
`
const Email = styled(FaRegEnvelope)`
  color: ${(props: any) => props.theme.colors.primary};
`
const WhatsApp = styled(FaWhatsapp)`
  color: ${(props: any) => props.theme.colors.primary};
`
const Map = styled(FaMapMarkedAlt)`
  color: ${(props: any) => props.theme.colors.primary};
`

export const LabelValue = ({ label, value, icon }: any) => {
  return (
    <Flex style={style} alignItemsCenter>
      <Flex style={{ width: 50 }}>
        {icon || (
          <Span
            variant="default"
            fontSize={18}
            color={`rgba(0,0,0,0.65)`}
            style={{ fontWeight: 600 }}
          >
            {label + `:`}
          </Span>
        )}
      </Flex>
      <Flex column>
        {label === 'Address'
          ? value.split(',').map((item: any, i: any) => {
              return (
                <Span color={`#676767`} fontSize={18} key={`${i}`}>
                  {item}
                  {i < value.split(',').length - 1 && ','}
                </Span>
              )
            })
          : (
              <Span color={`#676767`} fontSize={18}>
                {value}
              </Span>
            ) || null}
      </Flex>
    </Flex>
  )
}

function ContactRegister(props: any) {
  const [contact, setContact] = React.useState({
    values: { name: '', email: '', phone: '', msg: '' },
    errors: { name: false, email: false, phone: false, msg: false }
  })
  const [register, setRegister] = React.useState({
    values: {
      courseName: '',
      name: '',
      email: '',
      phone: '',
      traningCenter: '',
      qualification: '',
      perCGPA: '',
      exp: '',
      msg: ''
    },
    errors: {
      courseName: false,
      name: false,
      email: false,
      phone: false,
      traningCenter: false,
      qualification: false,
      perCGPA: false,
      exp: false,
      msg: false
    }
  })

  const [inputStyleContact, setInputStyleContact] = React.useState({
    name: false,
    email: false,
    phone: false,
    msg: false
  })
  const [inputStyleRegister, setInputStyleRegister] = React.useState({
    courseName: false,
    name: false,
    email: false,
    phone: false,
    traningCenter: false,
    qualification: false,
    perCGPA: false,
    exp: false,
    msg: false
  })

  const changePlacholderContact = ({ target }: any) => {
    setInputStyleContact({ ...inputStyleContact, [target.name]: true })
  }
  function onBlurContact({ target }: any) {
    console.log(contact)
    if (!target.value) setInputStyleContact({ ...inputStyleContact, [target.name]: false })
    if (!target.value) {
      setContact({ ...contact, errors: { ...contact.errors, [target.name]: true } })
    } else {
      setContact({ ...contact, errors: { ...contact.errors, [target.name]: false } })
    }
  }

  const onChangeContact = ({ target }: any) => {
    setContact({ ...contact, values: { ...contact.values, [target.name]: target.value } })
  }

  const onSubmitContact = () => {
    alert(JSON.stringify(contact.values))
  }

  const changePlacholderRegister = ({ target }: any) => {
    setInputStyleRegister({ ...inputStyleRegister, [target.name]: true })
  }
  function onBlurRegister({ target }: any) {
    if (!target.value) setInputStyleRegister({ ...inputStyleRegister, [target.name]: false })
    if (!target.value) {
      setRegister({ ...register, errors: { ...register.errors, [target.name]: true } })
    } else {
      setRegister({ ...register, errors: { ...register.errors, [target.name]: false } })
    }
  }

  const onChangeRegister = ({ target }: any) => {
    setRegister({ ...register, values: { ...register.values, [target.name]: target.value } })
  }

  const onSubmitRegister = () => {
    alert(JSON.stringify(register.values))
  }

  return (
    <Flex
      justifyContentCenter
      column
      style={{
        background: `linear-gradient(315deg, #baecff 10%, #ffffff 60%)`
      }}
    >
      <Flex wrap justifyContentCenter>
        <Flex width={[1, 0.5]} style={{ padding: 10 }} alignItemsCenter column>
          <Span
            variant="h1 primary"
            style={{ marginTop: '7vmax', marginBottom: '2vmax', alignSelf: 'center' }}
          >
            Contact Us
          </Span>
          <Flex width={[1, 0.7]} alignItemsCenter column>
            <Flex width={[0.8, 1]} column>
              <LabelValue label="Email" value="jump2join@gmail.com" icon={<Email size={35} />} />
              <LabelValue label="WhatsApp" value="+91-786060980" icon={<WhatsApp size={35} />} />
              <LabelValue label="Phone" value="+91-9027914008" icon={<Phone size={35} />} />
              <LabelValue
                label="Address"
                icon={<Map size={35} />}
                value="Jump2Join Training Center, Aliganj Road Tanda Ujjain, Kashipur - 244713"
              />
            </Flex>
          </Flex>
          <Flex width={[1, 0.8]} column>
            <MyInput
              my={2}
              type="text"
              variant="m"
              placeholder="Name"
              name="name"
              onChange={onChangeContact}
              inputStyle={inputStyleContact.name}
              onFocus={changePlacholderContact}
              onBlur={onBlurContact}
              value={contact.values.name}
              error={contact.errors.name}
            />
            <MyInput
              my={2}
              type="email"
              variant="m"
              placeholder="Email"
              name="email"
              onChange={onChangeContact}
              inputStyle={inputStyleContact.email}
              onFocus={changePlacholderContact}
              onBlur={onBlurContact}
              value={contact.values.email}
              error={contact.errors.email}
            />
            <MyInput
              my={2}
              type="number"
              variant="m"
              placeholder="Phone"
              name="phone"
              onChange={onChangeContact}
              inputStyle={inputStyleContact.phone}
              onFocus={changePlacholderContact}
              onBlur={onBlurContact}
              value={contact.values.phone}
              error={contact.errors.phone}
            />
            <MyInput
              my={2}
              type="textarea"
              variant="m"
              placeholder="Message"
              name="msg"
              rows={12}
              onChange={onChangeContact}
              inputStyle={inputStyleContact.msg}
              onFocus={changePlacholderContact}
              onBlur={onBlurContact}
              value={contact.values.msg}
              error={contact.errors.msg}
            />
            <MyInput type="button" variant="m primary" my={2} onClick={onSubmitContact}>
              Contact Us
            </MyInput>
          </Flex>
        </Flex>
        <Flex width={[1, 0.5]} style={{ padding: 10 }} alignItemsCenter column>
          <Span
            variant="h1 primary"
            style={{ marginTop: '7vmax', marginBottom: '2vmax', alignSelf: 'center' }}
          >
            Register Now
          </Span>
          <Flex width={[1, 0.8]} column>
            <MyInput
              type="select"
              my={2}
              options={props.courses}
              placeholder="Course Name"
              name="courseName"
              onChange={onChangeRegister}
              value={register.values.courseName}
              error={register.errors.courseName}
            />
            <MyInput
              my={2}
              type="text"
              variant="m"
              placeholder="Name"
              name="name"
              onChange={onChangeRegister}
              onFocus={changePlacholderRegister}
              onBlur={onBlurRegister}
              inputStyle={inputStyleRegister.name}
              value={register.values.name}
              error={register.errors.name}
            />
            <MyInput
              my={2}
              type="email"
              variant="m"
              placeholder="Email"
              name="email"
              onChange={onChangeRegister}
              onFocus={changePlacholderRegister}
              onBlur={onBlurRegister}
              inputStyle={inputStyleRegister.email}
              value={register.values.email}
              error={register.errors.email}
            />
            <MyInput
              my={2}
              type="number"
              variant="m"
              placeholder="Phone"
              name="phone"
              onChange={onChangeRegister}
              onFocus={changePlacholderRegister}
              onBlur={onBlurRegister}
              inputStyle={inputStyleRegister.phone}
              value={register.values.phone}
              error={register.errors.phone}
            />
            <MyInput
              type="select"
              my={2}
              options={props.traningLocations}
              placeholder="Traning Center"
              name="traningCenter"
              onChange={onChangeRegister}
              value={register.values.traningCenter}
              error={register.errors.traningCenter}
            />
            <MyInput
              my={2}
              type="text"
              variant="m"
              placeholder="Highest Qualification"
              name="qualification"
              onChange={onChangeRegister}
              onFocus={changePlacholderRegister}
              onBlur={onBlurRegister}
              inputStyle={inputStyleRegister.qualification}
              value={register.values.qualification}
              error={register.errors.qualification}
            />
            <MyInput
              my={2}
              type="number"
              variant="m"
              placeholder="Percent/CGPA"
              name="perCGPA"
              onChange={onChangeRegister}
              onFocus={changePlacholderRegister}
              onBlur={onBlurRegister}
              inputStyle={inputStyleRegister.perCGPA}
              value={register.values.perCGPA}
              error={register.errors.perCGPA}
            />
            <MyInput
              my={2}
              type="number"
              variant="m"
              placeholder="Work Experience (Months)"
              name="exp"
              onChange={onChangeRegister}
              onFocus={changePlacholderRegister}
              onBlur={onBlurRegister}
              inputStyle={inputStyleRegister.exp}
              value={register.values.exp}
              error={register.errors.exp}
            />
            <MyInput
              my={2}
              type="textarea"
              variant="m"
              placeholder="Message"
              name="msg"
              rows={5}
              onChange={onChangeRegister}
              onFocus={changePlacholderRegister}
              onBlur={onBlurRegister}
              inputStyle={inputStyleRegister.msg}
              value={register.values.msg}
              error={register.errors.msg}
            />
            <MyInput type="button" variant="m primary" my={2} onClick={onSubmitRegister}>
              Register Now
            </MyInput>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ContactRegister
