import React from 'react'
import { Flex, Span, Button } from '@icstark/ui'
import { Modal } from '@icstark/ui'
import { FormInput, FormSelect } from '../../../components/Forms/Form'
import { FaUser, FaUserTie } from 'react-icons/fa'
import { FormContainer } from './CertificateForm'
function TrainerForm() {
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
      Address,
      Location,
      Qualification,
      WorkExperience,
      Expertise
    } = form.values
    let error = true
    if (
      Phone.length === 10 &&
      Name !== '' &&
      Email !== '' &&
      Address !== '' &&
      Location !== '' &&
      Qualification !== '' &&
      WorkExperience !== '' &&
      Expertise !== ''
    ) {
      error = false
      setForm({
        ...form,
        errors: {
          ...form.errors,
          Phone: '',
          Name: '',
          Email: '',
          Address: '',
          Location: '',
          Qualification: '',
          WorkExperience: '',
          Expertise: ''
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
    form.values.Name &&
    form.values.Email &&
    form.values.Phone &&
    form.values.Address &&
    form.values.Location &&
    form.values.Qualification &&
    form.values.WorkExperience &&
    form.values.Expertise
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
        <FaUserTie style={{ fontSize: '60px', marginBottom: '20px', color: '#727272' }} />
        <div style={{ fontWeight: 500, color: '#676767', fontSize: '14px' }}>Apply For Trainer</div>
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
              Trainer Registration Form
            </div>
            <Flex
              style={{
                margin: '10px 0px',
                minHeight: '375px'
              }}
              wrap
              justifyContentSpaceBetween
              alignItemsCenter
            >
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
                <FormInput
                  label="Address*"
                  type="textarea"
                  placeholder="Enter full Address"
                  name="Address"
                  onChange={onchange}
                  // onBlur={onBlur}
                  value={form.values['Address']}
                  fieldErrors={form.errors}
                  style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                />
              </Flex>
              <Flex width={[1, 0.47]}>
                <FormSelect
                  placeholder="Select Your Choice"
                  name="Qualification"
                  label="Academic Qualification*"
                  onChange={onchange}
                  // onBlur={onBlur}
                  list={[
                    {
                      label: 'Diploma',
                      value: 'Diploma'
                    },
                    {
                      label: 'ITI',
                      value: 'ITI'
                    },
                    {
                      label: 'B-Tech',
                      value: 'B-Tech'
                    }
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
                <FormSelect
                  placeholder="Select Your Choice"
                  name="WorkExperience"
                  label="Have Work Experience?*"
                  onChange={onchange}
                  // onBlur={onBlur}
                  list={[
                    {
                      label: 'Yes',
                      value: 'yes'
                    },
                    {
                      label: 'No',
                      value: 'no'
                    }
                  ]}
                  value={form.values['WorkExperience']}
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
              {form.values.WorkExperience === 'yes' ? (
                <>
                  <Flex width={[1, 0.47]}>
                    <FormInput
                      label="Company Name*"
                      type="text"
                      placeholder="Company Name"
                      name="Company"
                      onChange={onchange}
                      // onBlur={onBlur}
                      value={form.values['Company']}
                      fieldErrors={form.errors}
                      style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                    />
                  </Flex>
                  <Flex width={[1, 0.47]}>
                    <FormInput
                      label="Position*"
                      type="text"
                      placeholder="Working Position In The Company"
                      name="Position"
                      onChange={onchange}
                      // onBlur={onBlur}
                      value={form.values['Position']}
                      fieldErrors={form.errors}
                      style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                    />
                  </Flex>
                  <Flex width={[1, 0.47]}>
                    <FormInput
                      label="Duration*"
                      type="number"
                      placeholder="Working Duration With The Company In month"
                      name="Experience"
                      onChange={onchange}
                      // onBlur={onBlur}
                      value={form.values['Experience']}
                      fieldErrors={form.errors}
                      style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                    />
                  </Flex>
                </>
              ) : null}
              <Flex width={[1, 0.47]}>
                <FormInput
                  label="Area of Expertise*"
                  type="textarea"
                  placeholder="Enter The Topics In Which You Have Good Knowledge"
                  name="Expertise"
                  onChange={onchange}
                  // onBlur={onBlur}
                  value={form.values['Expertise']}
                  fieldErrors={form.errors}
                  style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                />
              </Flex>
              <Flex width={[1, 0.47]}>
                <FormSelect
                  placeholder="Select Your Choice"
                  name="Location"
                  label="Preferred Location*"
                  onChange={onchange}
                  // onBlur={onBlur}
                  list={[{ label: 'Kashipur', value: 'Kashipur' }]}
                  value={form.values['Location']}
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
export default TrainerForm
