import React from 'react'
import { Flex, Span, Button, styled } from '@icstark/ui'
import { FaCertificate } from 'react-icons/fa'
import { Modal } from '@icstark/ui'
import { FormInput, FormSelect } from '../../../components/Forms/Form'

export const FormContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: 40px auto;
  @media (max-width: 540px) {
    flex-wrap: wrap;
  }
`

function CertificateForm(props: any) {
  const [modal, setModal] = React.useState({
    show: false
  })
  const [form, setForm] = React.useState<any>({
    values: {},
    errors: {}
  })
  function onchange(target: any) {
    setForm({
      ...form,
      values: { ...form.values, [target.name]: target.value }
    })
  }
  function onBlur({ target }: any) {
    if (!form.values[target.name] || form.values[target.name] === '') {
      // set error if value is empty
      setForm({
        ...form,
        errors: { ...form.errors, [target.name]: [target.name] + ' Field Cannot be Empty' }
      })
    } else if (form.values[target.name]) {
      // remove error if value exists
      setForm({
        ...form,
        errors: { ...form.errors, [target.name]: '' }
      })
    }
  }
  const isSubmitEnabled =
    form.values.Course &&
    form.values.Name &&
    form.values.Email &&
    form.values.Phone &&
    form.values.Center &&
    form.values.Qualification &&
    form.values.Percent &&
    form.values.Experience &&
    form.values.Message
  return (
    <>
      <Flex
        column
        alignItemsCenter
        style={{ cursor: 'pointer' }}
        onClick={() =>
          setModal({
            ...modal,
            show: true
          })
        }
      >
        <FaCertificate style={{ fontSize: '60px', marginBottom: '20px' }} />
        <div style={{ fontWeight: 500, color: '#676767', fontSize: '14px' }}>
          Apply to Certified
        </div>
      </Flex>
      <Modal
        variant="xl Left-Center"
        toggleModal={modal.show}
        setToggleModal={() => setModal({ ...modal, show: false })}
      >
        <FormContainer>
          <Flex width={[1, 0.8]} column>
            <div
              style={{
                textAlign: 'center',
                textDecoration: 'underline',
                fontSize: 14
              }}
            >
              Application Form
            </div>
            <Flex
              style={{
                margin: '10px 0px'
              }}
              wrap
              justifyContentSpaceBetween
              alignItemsCenter
            >
              <Flex width={[1, 0.47]}>
                <FormSelect
                  placeholder="Select Your Choice"
                  name="Course"
                  label="Course Name*"
                  onChange={onchange}
                  onBlur={onBlur}
                  list={[
                    {
                      label: 'Diploma Course in Two Wheeler Mechanism and Maintenance',
                      value: 'Diploma Course in Two Wheeler Mechanism and Maintenance'
                    }
                  ]}
                  value={form.values['Course']}
                  fieldErrors={form.errors}
                  style={{
                    formElement: {
                      fontSize: '12px',
                      fontWeight: 200,
                      border: '1px solid #d9d9d9',
                      borderRadius: 3,
                      color: '#676767'
                    }
                  }}
                />
              </Flex>
              <Flex width={[1, 0.47]}>
                <FormInput
                  label="Your Full Name*"
                  type="text"
                  placeholder="Full Name"
                  name="Name"
                  onChange={onchange}
                  onBlur={onBlur}
                  value={form.values['Name']}
                  fieldErrors={form.errors}
                  style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                />
              </Flex>
              <Flex width={[1, 0.47]}>
                <FormInput
                  label="Your Email*"
                  type="email"
                  placeholder="Email"
                  name="Email"
                  onChange={onchange}
                  onBlur={onBlur}
                  value={form.values['Email']}
                  fieldErrors={form.errors}
                  style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                />
              </Flex>
              <Flex width={[1, 0.47]}>
                <FormInput
                  label=" Your Phone Number*"
                  type="number"
                  placeholder="Phone Number"
                  name="Phone"
                  onChange={onchange}
                  onBlur={onBlur}
                  value={form.values['Phone']}
                  fieldErrors={form.errors}
                  style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                />
              </Flex>
              <Flex width={[1, 0.47]}>
                <FormSelect
                  placeholder="Select Your Choice"
                  name="Center"
                  label="Training Center*"
                  onChange={onchange}
                  onBlur={onBlur}
                  list={[{ label: 'Kashipur', value: 'Kashipur' }]}
                  value={form.values['Center']}
                  fieldErrors={form.errors}
                  style={{
                    formElement: {
                      fontSize: '12px',
                      fontWeight: 200,
                      border: '1px solid #d9d9d9',
                      borderRadius: 3,
                      color: '#676767'
                    }
                  }}
                />
              </Flex>
              <Flex width={[1, 0.47]}>
                <FormInput
                  label="Highest Qualification*"
                  type="text"
                  placeholder="Highest Qualification"
                  name="Qualification"
                  onChange={onchange}
                  onBlur={onBlur}
                  value={form.values['Qualification']}
                  fieldErrors={form.errors}
                  style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                />
              </Flex>
              <Flex width={[1, 0.47]}>
                <FormInput
                  label="Percent/CGPA*"
                  type="number"
                  placeholder="Percent/CGPA of Last Semester"
                  name="Percent"
                  onChange={onchange}
                  onBlur={onBlur}
                  value={form.values['Percent']}
                  fieldErrors={form.errors}
                  style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                />
              </Flex>
              <Flex width={[1, 0.47]}>
                <FormInput
                  label="Work Experience*"
                  type="number"
                  placeholder="Experience In Months"
                  name="Experience"
                  onChange={onchange}
                  onBlur={onBlur}
                  value={form.values['Experience']}
                  fieldErrors={form.errors}
                  style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                />
              </Flex>
              <Flex width={[1, 0.47]}>
                <FormInput
                  label="Your Message*"
                  type="textarea"
                  placeholder="Message"
                  name="Message"
                  onChange={onchange}
                  onBlur={onBlur}
                  value={form.values['Message']}
                  fieldErrors={form.errors}
                  style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                />
              </Flex>
            </Flex>
            {/* <div style={{ width: '30%', margin: '0 auto' }}>
              <Button
                variant="m primary"
                disabled={!isSubmitEnabled}
                style={{ width: '100%', margin: '0 auto' }}
              >
                REGISTER
              </Button>
            </div> */}
            <Button variant="m primary" disabled={!isSubmitEnabled} style={{ margin: '0 auto' }}>
              REGISTER
            </Button>
          </Flex>
        </FormContainer>
      </Modal>
    </>
  )
}
export default CertificateForm
