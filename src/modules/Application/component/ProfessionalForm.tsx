import React from 'react'
import { Flex, Span, Button } from '@icstark/ui'
import { Modal } from '@icstark/ui'
import { FormInput, FormSelect } from '../../../components/Forms/Form'
import { FaSearch, FaHandshake } from 'react-icons/fa'
import { FormContainer, AvatarContainer } from './CertificateForm'
function ProfessionalForm() {
  const [modal, setModal] = React.useState({
    show: false
  })
  const [form, setForm] = React.useState<any>({
    values: {},
    errors: {}
  })

  function onchange(target: any) {
    console.log(target.name, target.value)
    if (
      (target.name === 'MechanicBasic' && !['0', '1', '2', '3', '4', '5'].includes(target.value)) ||
      (target.name === 'MechanicAdvance' &&
        !['0', '1', '2', '3', '4', '5'].includes(target.value)) ||
      (target.name === 'MechanicExpert' &&
        !['0', '1', '2', '3', '4', '5'].includes(target.value)) ||
      (target.name === 'EVBasic' && !['0', '1', '2', '3', '4', '5'].includes(target.value)) ||
      (target.name === 'EVAdvance' && !['0', '1', '2', '3', '4', '5'].includes(target.value)) ||
      (target.name === 'EVExpert' && !['0', '1', '2', '3', '4', '5'].includes(target.value)) ||
      (target.name === 'DataEntryBasic' &&
        !['0', '1', '2', '3', '4', '5'].includes(target.value)) ||
      (target.name === 'DataEntryAdvance' &&
        !['0', '1', '2', '3', '4', '5'].includes(target.value)) ||
      (target.name === 'DataEntryExpert' &&
        !['0', '1', '2', '3', '4', '5'].includes(target.value)) ||
      (target.name === 'SupervisorBasic' &&
        !['0', '1', '2', '3', '4', '5'].includes(target.value)) ||
      (target.name === 'SupervisorAdvance' &&
        !['0', '1', '2', '3', '4', '5'].includes(target.value)) ||
      (target.name === 'SupervisorExpert' && !['0', '1', '2', '3', '4', '5'].includes(target.value))
      // !['0', '1', '2', '3', '4', '5'].includes(target.value)
    ) {
      let temp = form.values[target.name]
      // if (parseInt(target.value) > 5) {
      //   temp = 5
      // } else
      if (parseInt(target.value) < 0) {
        temp = 0
      }
      setForm({
        ...form,
        values: { ...form.values, [target.name]: temp }
      })
    } else {
      setForm({
        ...form,
        values: { ...form.values, [target.name]: target.value }
      })
    }
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
  function onSubmit() {
    const {
      CompanyName,
      CompanyMail,
      RepresentativeName,
      RepresentativePhone,
      MechanicBasic,
      MechanicAdvance,
      MechanicExpert,
      EVBasic,
      EVAdvance,
      EVExpert,
      DataEntryBasic,
      DataEntryAdvance,
      DataEntryExpert,
      SupervisorBasic,
      SupervisorAdvance,
      SupervisorExpert
    } = form.values
    let error = true
    if (
      RepresentativePhone.length === 10 &&
      CompanyName !== '' &&
      CompanyMail !== '' &&
      RepresentativeName !== '' &&
      MechanicBasic !== '' &&
      MechanicAdvance !== '' &&
      MechanicExpert !== '' &&
      EVBasic !== '' &&
      EVAdvance !== '' &&
      EVExpert !== '' &&
      DataEntryBasic !== '' &&
      DataEntryAdvance !== '' &&
      DataEntryExpert !== '' &&
      SupervisorBasic !== '' &&
      SupervisorAdvance !== '' &&
      SupervisorExpert !== ''
    ) {
      error = false
      setForm({
        ...form,
        errors: {
          ...form.errors,
          RepresentativePhone: '',
          CompanyName: '',
          CompanyMail: '',
          RepresentativeName: '',
          MechanicBasic: '',
          MechanicAdvance: '',
          MechanicExpert: '',
          EVBasic: '',
          EVAdvance: '',
          EVExpert: '',
          DataEntryBasic: '',
          DataEntryAdvance: '',
          DataEntryExpert: '',
          SupervisorBasic: '',
          SupervisorAdvance: '',
          SupervisorExpert: ''
        }
      })
    } else {
      if (RepresentativePhone.length !== 10) {
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
    form.values.CompanyName &&
    form.values.CompanyMail &&
    form.values.RepresentativeName &&
    form.values.RepresentativePhone &&
    // form.values.MechanicBasic
    (form.values.MechanicBasic ||
      form.values.MechanicAdvance ||
      form.values.MechanicExpert ||
      form.values.EVBasic ||
      form.values.EVAdvance ||
      form.values.EVExpert ||
      form.values.DataEntryBasic ||
      form.values.DataEntryAdvance ||
      form.values.DataEntryExpert ||
      form.values.SupervisorBasic ||
      form.values.SupervisorAdvance ||
      form.values.SupervisorExpert)

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
        <FaHandshake style={{ fontSize: '45px', marginBottom: '20px', color: '#727272' }} />
        <div style={{ fontWeight: 500, color: '#676767', fontSize: '14px', textAlign: 'center' }}>
          Request
          <br />
          Certified Professional
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
              Request Certified Professional Form
            </div>
            <Flex style={{ margin: '10px 0px' }} wrap justifyContentSpaceBetween alignItemsCenter>
              <Flex width={[1, 0.47]}>
                <FormInput
                  label="Company Name*"
                  type="text"
                  placeholder="Company"
                  name="CompanyName"
                  onChange={onchange}
                  // onBlur={onBlur}
                  value={form.values['CompanyName']}
                  fieldErrors={form.errors}
                  style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                />
              </Flex>
              <Flex width={[1, 0.47]}>
                <FormInput
                  label="Email*"
                  type="email"
                  placeholder="Company Email Address"
                  name="CompanyMail"
                  onChange={onchange}
                  // onBlur={onBlur}
                  value={form.values['CompanyMail']}
                  fieldErrors={form.errors}
                  style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                />
              </Flex>
              <Flex width={[1, 0.47]}>
                <FormInput
                  label="Representative Name*"
                  type="text"
                  placeholder="Person Who Represent the Company"
                  name="RepresentativeName"
                  onChange={onchange}
                  // onBlur={onBlur}
                  value={form.values['RepresentativeName']}
                  fieldErrors={form.errors}
                  style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                />
              </Flex>
              <Flex width={[1, 0.47]}>
                <FormInput
                  label="Representative Phone*"
                  type="number"
                  placeholder="Phone Number of the Representative"
                  name="RepresentativePhone"
                  onChange={onchange}
                  // onBlur={onBlur}
                  value={form.values['RepresentativePhone']}
                  fieldErrors={form.errors}
                  style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                />
              </Flex>
              <Flex width={[1]} style={{ padding: '10px 0px 20px 0px' }}>
                <Flex width={[0.3]}>
                  <div style={{ fontSize: '12px', color: '#676767' }}>Candidate Selection*</div>
                </Flex>
                <Flex width={[0.7]} justifyContentSpaceAround>
                  <div style={{ fontSize: '12px', color: '#676767' }}>
                    Check The Type(s) of Professional You Need And Enter the Number of Professional
                  </div>
                </Flex>
              </Flex>
              <Flex width={[1]}>
                <Flex width={[0.3]} alignItemsCenter>
                  <div style={{ fontSize: '12px', color: '#676767' }}>Two Wheeler Mechanic</div>
                </Flex>
                <Flex width={[0.7]} justifyContentSpaceBetween>
                  <Flex column alignItemsCenter>
                    <div style={{ fontSize: '12px', color: '#676767', padding: '5px 0px' }}>
                      Basic
                    </div>
                    <FormInput
                      type="number"
                      name="MechanicBasic"
                      placeholder="0-5"
                      onChange={onchange}
                      // onBlur={onBlur}
                      value={form.values['MechanicBasic']}
                      fieldErrors={form.errors}
                      style={{
                        container: { width: 40, flexGrow: 0 },
                        formElement: { fontSize: '12px', fontWeight: 200 }
                      }}
                    />
                  </Flex>
                  <Flex column alignItemsCenter>
                    <div style={{ fontSize: '12px', color: '#676767', padding: '5px 0px' }}>
                      Advance
                    </div>
                    <FormInput
                      type="number"
                      placeholder="0-5"
                      name="MechanicAdvance"
                      onChange={onchange}
                      // onBlur={onBlur}
                      value={form.values['MechanicAdvance']}
                      fieldErrors={form.errors}
                      style={{
                        container: { width: 40, flexGrow: 0 },
                        formElement: { fontSize: '12px', fontWeight: 200 }
                      }}
                    />
                  </Flex>
                  <Flex column alignItemsCenter>
                    <div style={{ fontSize: '12px', color: '#676767', padding: '5px 0px' }}>
                      Expert
                    </div>
                    <FormInput
                      type="number"
                      placeholder="0-5"
                      name="MechanicExpert"
                      onChange={onchange}
                      // onBlur={onBlur}
                      value={form.values['MechanicExpert']}
                      fieldErrors={form.errors}
                      style={{
                        container: { width: 40, flexGrow: 0 },
                        formElement: { fontSize: '12px', fontWeight: 200 }
                      }}
                    />
                  </Flex>
                </Flex>
              </Flex>
              <Flex width={[1]}>
                <Flex width={[0.3]} alignItemsCenter>
                  <div style={{ fontSize: '12px', color: '#676767' }}>
                    Electric Vehicle Mechanic
                  </div>
                </Flex>
                <Flex width={[0.7]} justifyContentSpaceBetween>
                  <Flex column alignItemsCenter>
                    <div style={{ fontSize: '12px', color: '#676767', padding: '5px 0px' }}>
                      Basic
                    </div>
                    <FormInput
                      type="number"
                      name="EVBasic"
                      placeholder="0-5"
                      onChange={onchange}
                      // onBlur={onBlur}
                      value={form.values['EVBasic']}
                      fieldErrors={form.errors}
                      style={{
                        container: { width: 40, flexGrow: 0 },
                        formElement: { fontSize: '12px', fontWeight: 200 }
                      }}
                    />
                  </Flex>
                  <Flex column alignItemsCenter>
                    <div style={{ fontSize: '12px', color: '#676767', padding: '5px 0px' }}>
                      Advance
                    </div>
                    <FormInput
                      type="number"
                      placeholder="0-5"
                      name="EVAdvance"
                      onChange={onchange}
                      // onBlur={onBlur}
                      value={form.values['EVAdvance']}
                      fieldErrors={form.errors}
                      style={{
                        container: { width: 40, flexGrow: 0 },
                        formElement: { fontSize: '12px', fontWeight: 200 }
                      }}
                    />
                  </Flex>
                  <Flex column alignItemsCenter>
                    <div style={{ fontSize: '12px', color: '#676767', padding: '5px 0px' }}>
                      Expert
                    </div>
                    <FormInput
                      type="number"
                      placeholder="0-5"
                      name="EVExpert"
                      onChange={onchange}
                      // onBlur={onBlur}
                      value={form.values['EVExpert']}
                      fieldErrors={form.errors}
                      style={{
                        container: { width: 40, flexGrow: 0 },
                        formElement: { fontSize: '12px', fontWeight: 200 }
                      }}
                    />
                  </Flex>
                </Flex>
              </Flex>
              <Flex width={[1]}>
                <Flex width={[0.3]} alignItemsCenter>
                  <div style={{ fontSize: '12px', color: '#676767' }}>Data Entry Operator</div>
                </Flex>
                <Flex width={[0.7]} justifyContentSpaceBetween>
                  <Flex column alignItemsCenter>
                    <div style={{ fontSize: '12px', color: '#676767', padding: '5px 0px' }}>
                      Basic
                    </div>
                    <FormInput
                      type="number"
                      name="DataEntryBasic"
                      placeholder="0-5"
                      onChange={onchange}
                      // onBlur={onBlur}
                      value={form.values['DataEntryBasic']}
                      fieldErrors={form.errors}
                      style={{
                        container: { width: 40, flexGrow: 0 },
                        formElement: { fontSize: '12px', fontWeight: 200 }
                      }}
                    />
                  </Flex>
                  <Flex column alignItemsCenter>
                    <div style={{ fontSize: '12px', color: '#676767', padding: '5px 0px' }}>
                      Advance
                    </div>
                    <FormInput
                      type="number"
                      placeholder="0-5"
                      name="DataEntryAdvance"
                      onChange={onchange}
                      // onBlur={onBlur}
                      value={form.values['DataEntryAdvance']}
                      fieldErrors={form.errors}
                      style={{
                        container: { width: 40, flexGrow: 0 },
                        formElement: { fontSize: '12px', fontWeight: 200 }
                      }}
                    />
                  </Flex>
                  <Flex column alignItemsCenter>
                    <div style={{ fontSize: '12px', color: '#676767', padding: '5px 0px' }}>
                      Expert
                    </div>
                    <FormInput
                      type="number"
                      placeholder="0-5"
                      name="DataEntryExpert"
                      onChange={onchange}
                      // onBlur={onBlur}
                      value={form.values['DataEntryExpert']}
                      fieldErrors={form.errors}
                      style={{
                        container: { width: 40, flexGrow: 0 },
                        formElement: { fontSize: '12px', fontWeight: 200 }
                      }}
                    />
                  </Flex>
                </Flex>
              </Flex>
              <Flex width={[1]}>
                <Flex width={[0.3]} alignItemsCenter>
                  <div style={{ fontSize: '12px', color: '#676767' }}>Maintenance Supervisor</div>
                </Flex>
                <Flex width={[0.7]} justifyContentSpaceBetween>
                  <Flex column alignItemsCenter>
                    <div style={{ fontSize: '12px', color: '#676767', padding: '5px 0px' }}>
                      Basic
                    </div>
                    <FormInput
                      type="number"
                      name="SupervisorBasic"
                      placeholder="0-5"
                      onChange={onchange}
                      // onBlur={onBlur}
                      value={form.values['SupervisorBasic']}
                      fieldErrors={form.errors}
                      style={{
                        container: { width: 40, flexGrow: 0 },
                        formElement: { fontSize: '12px', fontWeight: 200 }
                      }}
                    />
                  </Flex>
                  <Flex column alignItemsCenter>
                    <div style={{ fontSize: '12px', color: '#676767', padding: '5px 0px' }}>
                      Advance
                    </div>
                    <FormInput
                      type="number"
                      placeholder="0-5"
                      name="SupervisorAdvance"
                      onChange={onchange}
                      // onBlur={onBlur}
                      value={form.values['SupervisorAdvance']}
                      fieldErrors={form.errors}
                      style={{
                        container: { width: 40, flexGrow: 0 },
                        formElement: { fontSize: '12px', fontWeight: 200 }
                      }}
                    />
                  </Flex>
                  <Flex column alignItemsCenter>
                    <div style={{ fontSize: '12px', color: '#676767', padding: '5px 0px' }}>
                      Expert
                    </div>
                    <FormInput
                      type="number"
                      placeholder="0-5"
                      name="SupervisorExpert"
                      onChange={onchange}
                      // onBlur={onBlur}
                      value={form.values['SupervisorExpert']}
                      fieldErrors={form.errors}
                      style={{
                        container: { width: 40, flexGrow: 0 },
                        formElement: { fontSize: '12px', fontWeight: 200 }
                      }}
                    />
                  </Flex>
                </Flex>
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
export default ProfessionalForm
