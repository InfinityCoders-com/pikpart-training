import React from 'react'
import { Flex, Span, Button, styled } from '@icstark/ui'
import { FaCertificate, FaGraduationCap } from 'react-icons/fa'
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
export const AvatarContainer = styled(Flex)`
  cursor: pointer;
  border: 5px solid #deac26;
  padding: 40px 0px;
  border-radius: 100px;
  height: 200px;
  width: 200px;
  @media (max-width: 768px) {
    margin: 10px 0px;
  }
`

export const Courses = [
  {
    label: 'Diploma Course in Two Wheeler Mechanism and Maintenance',
    value: 'Diploma Course in Two Wheeler Mechanism and Maintenance'
  },
  {
    label: 'Training Course In Electric Vehicle Technologies',
    value: 'Training Course In Electric Vehicle Technologies'
  },
  {
    label: 'Training Course In Data Entry Operator',
    value: 'Training Course In Data Entry Operator'
  },
  {
    label: 'Training Course In Maintenance Supervisor',
    value: 'Training Course In Maintenance Supervisor'
  }
]

function CertificateForm(props: any) {
  const [modal, setModal] = React.useState({
    show: false
  })
  const [form, setForm] = React.useState<any>({
    values: {
      // Course: 'Diploma Course in Two Wheeler Mechanism and Maintenance'
    },
    errors: {}
  })
  function onchange(target: any) {
    setForm({
      ...form,
      values: { ...form.values, [target.name]: target.value }
    })
  }
  // function onBlur({ target }: any) {
  //   if (!form.values[target.name] || form.values[target.name] === '') {
  //     // set error if value is empty
  //     setForm({
  //       ...form,
  //       errors: { ...form.errors, [target.name]: [target.name] + ' Field Cannot be Empty' }
  //     })
  //   } else if (form.values[target.name]) {
  //     // remove error if value exists
  //     setForm({
  //       ...form,
  //       errors: { ...form.errors, [target.name]: '' }
  //     })
  //   }
  // }
  function onSubmit() {
    const {
      Name,
      Email,
      Phone,
      Center,
      Course,
      Qualification,
      Percent,
      Experience,
      Message
    } = form.values
    let error = true
    if (
      Phone.length === 10 &&
      Name !== '' &&
      Email !== '' &&
      Center !== '' &&
      Course !== '' &&
      Qualification !== '' &&
      Percent !== '' &&
      Experience !== '' &&
      Message !== ''
    ) {
      error = false
      setForm({
        ...form,
        errors: {
          ...form.errors,
          Phone: '',
          Name: '',
          Email: '',
          Center: '',
          Course: '',
          Qualification: '',
          Percent: '',
          Experience: '',
          Message: ''
        }
      })
    } else {
      if (Phone.length !== 10) {
        error = true
        setForm({
          ...form,
          errors: {
            ...form.errors,
            Phone: 'Phone number must be of 10 digit'
          }
        })
      }
    }
    console.log(form.values)
    console.log(form.errors)
    if (!error) {
      console.log(form)
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
      <AvatarContainer
        column
        alignItemsCenter
        onClick={() =>
          setModal({
            ...modal,
            show: true
          })
        }
      >
        <FaGraduationCap style={{ fontSize: '60px', marginBottom: '20px', color: '#727272' }} />
        <div style={{ fontWeight: 500, color: '#676767', fontSize: '14px' }}>
          Apply to Get Certified
        </div>
      </AvatarContainer>
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
              Candidate Registration Form
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
                  // onBlur={onBlur}
                  list={[
                    {
                      label: 'Diploma Course in Two Wheeler Mechanism and Maintenance',
                      value: 'Diploma Course in Two Wheeler Mechanism and Maintenance'
                    },
                    {
                      label: 'Training Course In Electric Vehicle Technologies',
                      value: 'Training Course In Electric Vehicle Technologies'
                    },
                    {
                      label: 'Training Course In Data Entry Operator',
                      value: 'Training Course In Data Entry Operator'
                    },
                    {
                      label: 'Training Course In Maintenance Supervisor',
                      value: 'Training Course In Maintenance Supervisor'
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
                  label="Full Name*"
                  type="text"
                  placeholder="John Doe"
                  name="Name"
                  onChange={onchange}
                  // onBlur={onBlur}
                  value={form.values['Name']}
                  fieldErrors={form.errors}
                  style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                />
              </Flex>
              <Flex width={[1, 0.47]}>
                <FormInput
                  label="Email*"
                  type="email"
                  placeholder="abc@xyz.com"
                  name="Email"
                  onChange={onchange}
                  // onBlur={onBlur}
                  value={form.values['Email']}
                  fieldErrors={form.errors}
                  style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                />
              </Flex>
              <Flex width={[1, 0.47]}>
                <FormInput
                  label="Phone Number*"
                  type="number"
                  placeholder="9999999999"
                  name="Phone"
                  onChange={onchange}
                  // onBlur={onBlur}
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
                  // onBlur={onBlur}
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
                <FormSelect
                  placeholder="Select Your Choice"
                  name="Qualification"
                  label="Highest Qualification*"
                  onChange={onchange}
                  // onBlur={onBlur}
                  list={[
                    { label: 'Diploma', value: 'Diploma' },
                    { label: 'ITI', value: 'ITI' },
                    { label: 'B-Tech', value: 'B-Tech' }
                  ]}
                  value={form.values['Qualification']}
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
                  label="Percent/CGPA*"
                  type="number"
                  placeholder="Percent/CGPA of Last Semester"
                  name="Percent"
                  onChange={onchange}
                  // onBlur={onBlur}
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
                  // onBlur={onBlur}
                  value={form.values['Experience']}
                  fieldErrors={form.errors}
                  style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                />
              </Flex>
              <Flex width={[1, 0.47]}>
                <FormInput
                  label="Message*"
                  type="textarea"
                  placeholder="Message for Enquiry"
                  name="Message"
                  onChange={onchange}
                  // onBlur={onBlur}
                  value={form.values['Message']}
                  fieldErrors={form.errors}
                  style={{ formElement: { fontSize: '12px', fontWeight: 400 } }}
                />
              </Flex>
            </Flex>

            <Button
              variant="m primary"
              disabled={!isSubmitEnabled}
              style={{ margin: '0 auto' }}
              onClick={onSubmit}
            >
              REGISTER
            </Button>
          </Flex>
        </FormContainer>
      </Modal>
    </>
  )
}
export default CertificateForm
