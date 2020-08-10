import React from 'react'
import { Flex, Span, Input, SearchSelect, Button } from '@icstark/ui'
// import { LabelValue } from '../../ContactRegister/container/ContactRegister'

const selectStyle = {
  color: 'rgba(0,0,0,0.65)',
  backgroundColor: 'rgba(255,255,255,1)',
  height: 'auto',
  border: '1px solid rgba(179,179,179)',
  borderRadius: 3,
  padding: '8px 12px',
  fontSize: 12,
  margin: 6
}

const coursesData = (array: any) => {
  const data = array.map((item: any) => {
    return <option value={item}>{item}</option>
  })
  return data
}

const Select = ({ options, placeholder, name, value, onChange, onBlur, error }: any) => {
  return (
    <>
      <select
        style={selectStyle}
        name={name}
        value={value}
        onBlur={(e) => onBlur(e)}
        onChange={(target) => onChange(target)}
      >
        {placeholder && <option value="">Select {placeholder}</option>} {coursesData(options)}
      </select>
      {error && <Span variant="danger">{error}</Span>}
    </>
  )
}

function Register(props: any) {
  const [register, setRegister] = React.useState({ values: {}, errors: {} })

  const onBlur = (e: any) => {
    console.log(e)
  }

  const onChange = ({ target }: any) => {
    console.log(target.name)
  }
  return (
    <Flex justifyContentCenter column style={{ margin: 15 }}>
      <Span variant="h1" style={{ margin: 10, alignSelf: 'center' }}>
        Register Now
      </Span>
      <Flex wrap justifyContentCenter>
        <Flex width={[1, 0.45]} style={{ padding: 10 }} alignItemsCenter column>
          {/* <Flex width={[1, 0.8]} alignItemsFlexStart column>
            <LabelValue label="Email" value="jump2join@gmail.com" />
            <LabelValue label="WhatsApp" value="+91-786060980" />
            <LabelValue label="Phone" value="+91-9027914008" />
            <LabelValue
              label="Address"
              value="Jump2Join Training Center, Aliganj Road, Tanda Ujjain, Kashipur - 244713"
            />
          </Flex> */}
        </Flex>
        <Flex width={[1, 0.45]} style={{ padding: 10 }} justifyContentCenter>
          <Flex width={[1, 0.8]} column>
            <Select options={props.courses} placeholder="Course Name" />
            <Input
              m={2}
              type="text"
              variant="m"
              placeholder="Name"
              name="name"
              onChange={(t) => onChange(t)}
            />
            <Input m={2} type="email" variant="m" placeholder="Email" name="email" />
            <Input m={2} type="number" variant="m" placeholder="Phone" name="phone" />
            <Select options={props.traningLocations} />
            <Input
              m={2}
              type="text"
              variant="m"
              placeholder="Highest Qualification"
              name="qualif"
            />
            <Input m={2} type="number" variant="m" placeholder="Percent/CGPA" name="perCGP" />
            <Input
              m={2}
              type="number"
              variant="m"
              placeholder="Work Experience (Months)"
              name="exp"
            />
            <Input m={2} type="textarea" variant="m" placeholder="Message" name="msg" rows={15} />
            <Button variant="m primary" ghost m={2}>
              Register Now
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Register
