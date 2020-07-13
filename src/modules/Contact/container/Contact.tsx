import React from 'react'
import { Flex, Span, Input, Button } from '@icstark/ui'

const style = {
  color: '#333',
  fontWeight: 400,
  margin: '0.8vmax 0 0'
}

export const LabelValue = ({ label, value }: any) => {
  return (
    <Flex alignItemsFlexStart style={style}>
      <Span variant="default" fontSize={16} style={{ width: label === 'Address' ? 160 : 100 }}>
        {label}:
      </Span>
      <Span style={{ marginLeft: '1vmax' }} fontSize={16}>
        {value || null}
      </Span>
    </Flex>
  )
}

function Contact() {
  return (
    <Flex justifyContentCenter column style={{ margin: 15 }}>
      <Span variant="h1" style={{ margin: 10, alignSelf: 'center' }}>
        Contact Us
      </Span>
      <Flex wrap justifyContentCenter>
        <Flex width={[1, 0.45]} style={{ padding: 10 }} column>
          <Flex width={[1, 0.8]} column>
            <LabelValue label="Email" value="jump2join@gmail.com" />
            <LabelValue label="WhatsApp" value="+91-786060980" />
            <LabelValue label="Phone" value="+91-9027914008" />
            <LabelValue
              label="Address"
              value="Jump2Join Training Center, Aliganj Road, Tanda Ujjain, Kashipur - 244713"
            />
          </Flex>
          <Flex width={[1, 0.8]} column>
            <Input m={2} type="text" variant="m" placeholder="Name" name="name" />
            <Input m={2} type="email" variant="m" placeholder="Email" name="email" />
            <Input m={2} type="number" variant="m" placeholder="Phone" name="phone" />
            <Input m={2} type="textarea" variant="m" placeholder="Message" name="msg" rows={15} />
            <Button variant="m primary" ghost m={2}>
              Contact Us
            </Button>
          </Flex>
        </Flex>
        <Flex width={[1, 0.45]} style={{ padding: 10 }} alignItemsCenter column>
          <Flex width={[1, 0.8]} column>
            <LabelValue label="Email" value="jump2join@gmail.com" />
            <LabelValue label="WhatsApp" value="+91-786060980" />
            <LabelValue label="Phone" value="+91-9027914008" />
            <LabelValue
              label="Address"
              value="Jump2Join Training Center, Aliganj Road, Tanda Ujjain, Kashipur - 244713"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Contact
