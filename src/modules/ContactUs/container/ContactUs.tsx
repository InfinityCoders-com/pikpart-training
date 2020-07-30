import React from 'react'
import { Flex, Span, Input, Button, styled } from '@icstark/ui'
import { FaPhone } from 'react-icons/fa'
import { Modal } from '@icstark/ui'
import { LabelValue } from '../../ContactRegister/container/ContactRegister'
import { FaRegEnvelope, FaMobileAlt, FaWhatsapp, FaMapMarkedAlt } from 'react-icons/fa'
import { FormInput } from '../../../components/Forms/Form'

const ContactUsButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: #61dafb;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
  opacity: 0.7;
`
const ContactUsContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: 40px auto;
  @media (max-width: 540px) {
    flex-wrap: wrap;
  }
`
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

function ContactUs() {
  const [modal, setModal] = React.useState({
    show: false
  })
  const [contact, setContact] = React.useState<any>({
    values: {},
    errors: {}
  })
  function onchange(target: any) {
    setContact({
      ...contact,
      values: { ...contact.values, [target.name]: target.value }
    })
  }
  function onBlur({ target }: any) {
    if (!contact.values[target.name] || contact.values[target.name] === '') {
      // set error if value is empty
      setContact({
        ...contact,
        errors: { ...contact.errors, [target.name]: [target.name] + ' Field Cannot be Empty' }
      })
    } else if (contact.values[target.name]) {
      // remove error if value exists
      setContact({
        ...contact,
        errors: { ...contact.errors, [target.name]: '' }
      })
    }
  }
  const isSubmitEnabled =
    contact.values.Name && contact.values.Phone && contact.values.Email && contact.values.Message
  return (
    <>
      <ContactUsButton
        onClick={() =>
          setModal({
            ...modal,
            show: true
          })
        }
      >
        Contact Us
      </ContactUsButton>
      <Modal
        variant="l Left-Center"
        toggleModal={modal.show}
        setToggleModal={() => setModal({ ...modal, show: false })}
      >
        <ContactUsContainer>
          <Flex width={[1, 0.8]} column>
            <LabelValue label="Email" value="jump2join@gmail.com" icon={<Email size={35} />} />
            <LabelValue label="WhatsApp" value="+91-786060980" icon={<WhatsApp size={35} />} />
            <LabelValue label="Phone" value="+91-9027914008" icon={<Phone size={35} />} />
            <LabelValue
              label="Address"
              icon={<Map size={35} />}
              value="Jump2Join Training Center, Aliganj Road Tanda Ujjain, Kashipur - 244713"
            />
          </Flex>
          <Flex width={[1, 0.8]} column>
            <div
              style={{
                textAlign: 'center',
                // margin: '10px',
                textDecoration: 'underline',
                fontSize: 14
              }}
            >
              DROP US A LINE
            </div>
            <div style={{ margin: '10px 0px' }}>
              <FormInput
                label="Name"
                type="text"
                placeholder="Full Name"
                name="Name"
                onChange={onchange}
                onBlur={onBlur}
                value={contact.values['Name']}
                fieldErrors={contact.errors}
                style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
              />
              <FormInput
                label="Phone"
                type="number"
                placeholder="Phone Number"
                name="Phone"
                onChange={onchange}
                onBlur={onBlur}
                value={contact.values['Phone']}
                fieldErrors={contact.errors}
                style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
              />
              <FormInput
                label="Your Email"
                type="email"
                placeholder="Email"
                name="Email"
                onChange={onchange}
                onBlur={onBlur}
                value={contact.values['Email']}
                fieldErrors={contact.errors}
                style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
              />
              <FormInput
                label="Your Message"
                type="textarea"
                placeholder="Message"
                name="Message"
                onChange={onchange}
                onBlur={onBlur}
                value={contact.values['Message']}
                fieldErrors={contact.errors}
                style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
              />
            </div>
            <div>
              <Button variant="m primary" disabled={!isSubmitEnabled} style={{ margin: '0 auto' }}>
                CONTACT US
              </Button>
            </div>
            {/* <Button variant="m primary" disabled={!isSubmitEnabled}>
              CONTACT US
            </Button> */}
          </Flex>
        </ContactUsContainer>
      </Modal>
    </>
  )
}

export default ContactUs
