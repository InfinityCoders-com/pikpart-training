import React from 'react'
import { Flex, Span, Input, Button } from '@icstark/ui'
import { MyInput } from '../component'
import { FaRegEnvelope, FaMobileAlt, FaWhatsapp, FaMapMarked, FaMapMarkedAlt } from 'react-icons/fa'

const style = {
  color: '#333',
  fontWeight: 400,
  margin: '0.8vmax 0 0'
}

export const LabelValue = ({ label, value, icon }: any) => {
  return (
    <Flex style={style} width={1}>
      <Flex>
        <Span
          variant="default"
          fontSize={18}
          color={`rgba(0,0,0,0.65)`}
          style={{ width: 120, fontWeight: 600 }}
        >
          {icon || label + `:`}
        </Span>
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
  const [register, setRegister] = React.useState({ values: {}, errors: {} })
  const [contact, setContact] = React.useState({ values: {}, errors: {} })
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
    console.log(target)
    setInputStyleContact({ ...inputStyleContact, [target.name]: true })
  }
  function onBlurContact({ target }: any) {
    if (!target.value) setInputStyleContact({ ...inputStyleContact, [target.name]: false })
  }

  const changePlacholderRegister = ({ target }: any) => {
    console.log(target)
    setInputStyleRegister({ ...inputStyleRegister, [target.name]: true })
  }
  function onBlurRegister({ target }: any) {
    if (!target.value) setInputStyleRegister({ ...inputStyleRegister, [target.name]: false })
  }

  const onChangeRegister = ({ target }: any) => {
    setRegister({ ...register, values: { ...register.values, [target.name]: target.value } })
  }

  const onChangeContact = ({ target }: any) => {
    setContact({ ...contact, values: { ...contact.values, [target.name]: target.value } })
  }

  const onSubmitContact = () => {
    alert(JSON.stringify(contact.values))
  }
  const onSubmitRegister = () => {
    alert(JSON.stringify(register.values))
  }

  return (
    <Flex justifyContentCenter column>
      <Flex wrap justifyContentCenter>
        <Flex width={[1, 0.45]} style={{ padding: 10 }} alignItemsCenter column>
          <Span
            color={`#808184`}
            variant="h1"
            style={{ marginTop: '7vmax', marginBottom: '2vmax', alignSelf: 'center' }}
          >
            Contact Us
          </Span>
          <Flex
            width={[0.7]}
            justifyContentCenter
            style={{ margin: '45px 10px', padding: '6px 10px' }}
            column
          >
            <LabelValue
              label="Email"
              value="jump2join@gmail.com"
              icon={<FaRegEnvelope color={`#808184`} size={35} />}
            />
            <LabelValue
              label="WhatsApp"
              value="+91-786060980"
              icon={<FaWhatsapp color={`#808184`} size={35} />}
            />
            <LabelValue
              label="Phone"
              value="+91-9027914008"
              icon={<FaMobileAlt color={`#808184`} size={35} />}
            />
            <LabelValue
              label="Address"
              icon={<FaMapMarkedAlt color={`#808184`} size={35} />}
              value="Jump2Join Training Center, Aliganj Road Tanda Ujjain, Kashipur - 244713"
            />
          </Flex>
          <Flex width={[1, 0.8]} column>
            <MyInput
              m={2}
              type="text"
              variant="m"
              placeholder="Name"
              name="name"
              onChange={onChangeContact}
              inputStyle={inputStyleContact.name}
              onFocus={changePlacholderContact}
              onBlur={onBlurContact}
            />
            <MyInput
              m={2}
              type="email"
              variant="m"
              placeholder="Email"
              name="email"
              onChange={onChangeContact}
              inputStyle={inputStyleContact.email}
              onFocus={changePlacholderContact}
              onBlur={onBlurContact}
            />
            <MyInput
              m={2}
              type="number"
              variant="m"
              placeholder="Phone"
              name="phone"
              onChange={onChangeContact}
              inputStyle={inputStyleContact.phone}
              onFocus={changePlacholderContact}
              onBlur={onBlurContact}
            />
            <MyInput
              m={2}
              type="textarea"
              variant="m"
              placeholder="Message"
              name="msg"
              rows={9}
              onChange={onChangeContact}
              inputStyle={inputStyleContact.msg}
              onFocus={changePlacholderContact}
              onBlur={onBlurContact}
            />
            <MyInput type="button" variant="m primary" ghost m={2} onClick={onSubmitContact}>
              Contact Us
            </MyInput>
          </Flex>
        </Flex>
        <Flex width={[1, 0.45]} style={{ padding: 10 }} alignItemsCenter column>
          <Span
            color={`#808184`}
            variant="h1"
            style={{ marginTop: '7vmax', marginBottom: '2vmax', alignSelf: 'center' }}
          >
            Register Now
          </Span>
          <Flex width={[1, 0.8]} column>
            <MyInput
              type="select"
              m={2}
              options={props.courses}
              placeholder="Course Name"
              name="courseName"
              onChange={onChangeRegister}
            />
            <MyInput
              m={2}
              type="text"
              variant="m"
              placeholder="Name"
              name="name"
              onChange={onChangeRegister}
              onFocus={changePlacholderRegister}
              onBlur={onBlurRegister}
              inputStyle={inputStyleRegister.name}
            />
            <MyInput
              m={2}
              type="email"
              variant="m"
              placeholder="Email"
              name="email"
              onChange={onChangeRegister}
              onFocus={changePlacholderRegister}
              onBlur={onBlurRegister}
              inputStyle={inputStyleRegister.email}
            />
            <MyInput
              m={2}
              type="number"
              variant="m"
              placeholder="Phone"
              name="phone"
              onChange={onChangeRegister}
              onFocus={changePlacholderRegister}
              onBlur={onBlurRegister}
              inputStyle={inputStyleRegister.phone}
            />
            <MyInput
              type="select"
              m={2}
              options={props.traningLocations}
              placeholder="Traning Center"
              name="traningCenter"
              onChange={onChangeRegister}
            />
            <MyInput
              m={2}
              type="text"
              variant="m"
              placeholder="Highest Qualification"
              name="qualification"
              onChange={onChangeRegister}
              onFocus={changePlacholderRegister}
              onBlur={onBlurRegister}
              inputStyle={inputStyleRegister.qualification}
            />
            <MyInput
              m={2}
              type="number"
              variant="m"
              placeholder="Percent/CGPA"
              name="perCGPA"
              onChange={onChangeRegister}
              onFocus={changePlacholderRegister}
              onBlur={onBlurRegister}
              inputStyle={inputStyleRegister.perCGPA}
            />
            <MyInput
              m={2}
              type="number"
              variant="m"
              placeholder="Work Experience (Months)"
              name="exp"
              onChange={onChangeRegister}
              onFocus={changePlacholderRegister}
              onBlur={onBlurRegister}
              inputStyle={inputStyleRegister.exp}
            />
            <MyInput
              m={2}
              type="textarea"
              variant="m"
              placeholder="Message"
              name="msg"
              rows={8}
              onChange={onChangeRegister}
              onFocus={changePlacholderRegister}
              onBlur={onBlurRegister}
              inputStyle={inputStyleRegister.msg}
            />
            <MyInput type="button" variant="m primary" ghost m={2} onClick={onSubmitRegister}>
              Register Now
            </MyInput>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ContactRegister
