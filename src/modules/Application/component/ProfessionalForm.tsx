import React from 'react'
import { Flex, Span, Button } from '@icstark/ui'
import { Modal } from '@icstark/ui'
import { FormInput, FormSelect } from '../../../components/Forms/Form'
import { FaSearch, FaHandshake } from 'react-icons/fa'
import { FormContainer } from './CertificateForm'
function ProfessionalForm() {
  const [modal, setModal] = React.useState({
    show: false
  })
  const [form, setForm] = React.useState<any>({
    values: {
      companyName: '',
      email: '',
      representativeName: '',
      representativePhone: '',
      candidateSelection: {
        twoWheeler: {}
      }
    },
    errors: {}
  })

  const onWorkerSelection = (type: any, member: any, value: any) => {
    if (type === 'twoWheeler') {
      setForm({
        ...form,
        candidateSelection: {
          ...form.candidateSelection,
          twoWheeler: { ...form.candidateSelection.twoWheeler, [member]: value }
        }
      })
    }
  }

  onWorkerSelection('twoWheeler', 'basic', 2)
  console.log(form.values)

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
        <FaHandshake style={{ fontSize: '45px', marginBottom: '20px' }} />
        <div style={{ fontWeight: 500, color: '#676767', fontSize: '14px', textAlign: 'center' }}>
          Request
          <br />
          Certified Professional
        </div>
      </Flex>
      <Modal
        variant="xl Left-Center"
        toggleModal={modal.show}
        setToggleModal={() => setModal({ ...modal, show: false })}
      >
        {/* <Flex
          justifyContentFlexStart
          wrap
          style={{
            margin: '20px'
          }}
        >
          <FormInput
            type="text"
            placeholder="Search for Professionals"
            name="professionals"
            onChange={onchange}
            value={form.values['Jobs']}
            fieldErrors={form.errors}
          />
          <div style={{ margin: '5px 0px' }}>
            <Button>
              <FaSearch style={{ fontSize: '10px' }} />
            </Button>
          </div>
        </Flex> */}
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
                margin: '10px 0px'
              }}
              wrap
              justifyContentSpaceBetween
              alignItemsCenter
            >
              <Flex width={[1, 0.47]}>
                <FormInput
                  label="Company Name*"
                  type="text"
                  placeholder="Company"
                  name="CompanyName"
                  onChange={onchange}
                  onBlur={onBlur}
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
                  onBlur={onBlur}
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
                  onBlur={onBlur}
                  value={form.values['RepresentativeName']}
                  fieldErrors={form.errors}
                  style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                />
              </Flex>
              <Flex width={[1, 0.47]}>
                <FormInput
                  label="Representative Phone*"
                  type="number"
                  placeholder="Phone Number of the Person Who Represent the Company"
                  name="RepresentativePhone"
                  onChange={onchange}
                  onBlur={onBlur}
                  value={form.values['RepresentativePhone']}
                  fieldErrors={form.errors}
                  style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                />
              </Flex>
              <Flex width={[1]} style={{ margin: '10px 0px' }}>
                <Flex width={[0.3]}>
                  <div style={{ fontSize: '12px', color: '#676767' }}>Candidate Selection*</div>
                </Flex>
                <Flex width={[0.7]} justifyContentSpaceAround>
                  <div style={{ fontSize: '12px', color: '#676767' }}>Basic</div>
                  <div style={{ fontSize: '12px', color: '#676767' }}>Advance</div>
                  <div style={{ fontSize: '12px', color: '#676767' }}>Expert</div>
                </Flex>
              </Flex>
              <Flex width={[1]}>
                <Flex width={[0.3]}>
                  <div style={{ fontSize: '12px', color: '#676767' }}>Two Wheeler Mechanic</div>
                </Flex>
                <Flex width={[0.7]}>
                  {/* <FormInput
                    // label="Representative Phone*"
                    type="checkBox"
                    // placeholder="Phone Number of the Person Who Represent the Company"
                    name="RepresentativePhone"
                    onChange={onchange}
                    onBlur={onBlur}
                    // value={form.values['RepresentativePhone']}
                    checked={false}
                    fieldErrors={form.errors}
                    style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                  /> */}
                  <FormInput
                    // label="Representative Phone*"
                    type="checkBox"
                    // placeholder="Phone Number of the Person Who Represent the Company"
                    name="RepresentativePhone"
                    onChange={onchange}
                    onBlur={onBlur}
                    value={form.values['RepresentativePhone']}
                    fieldErrors={form.errors}
                    style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                  />
                  <FormInput
                    // label="Representative Phone*"
                    type="checkBox"
                    // placeholder="Phone Number of the Person Who Represent the Company"
                    name="RepresentativePhone"
                    onChange={onchange}
                    onBlur={onBlur}
                    value={form.values['RepresentativePhone']}
                    fieldErrors={form.errors}
                    style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                  />
                </Flex>
              </Flex>
              <Flex width={[1]}>
                <Flex width={[0.3]}>
                  <div style={{ fontSize: '12px', color: '#676767' }}>
                    Electric Vehicle Mechanic
                  </div>
                </Flex>
                <Flex width={[0.7]}>
                  <FormInput
                    // label="Representative Phone*"
                    type="checkBox"
                    // placeholder="Phone Number of the Person Who Represent the Company"
                    name="RepresentativePhone"
                    onChange={onchange}
                    // onBlur={onBlur}
                    value={form.values['RepresentativePhone']}
                    fieldErrors={form.errors}
                    style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                  />
                  <FormInput
                    // label="Representative Phone*"
                    type="checkBox"
                    // placeholder="Phone Number of the Person Who Represent the Company"
                    name="RepresentativePhone"
                    onChange={onchange}
                    // onBlur={onBlur}
                    value={form.values['RepresentativePhone']}
                    fieldErrors={form.errors}
                    style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                  />
                  <FormInput
                    // label="Representative Phone*"
                    type="checkBox"
                    // placeholder="Phone Number of the Person Who Represent the Company"
                    name="RepresentativePhone"
                    onChange={onchange}
                    // onBlur={onBlur}
                    value={form.values['RepresentativePhone']}
                    fieldErrors={form.errors}
                    style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                  />
                </Flex>
              </Flex>
              <Flex width={[1]}>
                <Flex width={[0.3]}>
                  <div style={{ fontSize: '12px', color: '#676767' }}>Data Entry Operator</div>
                </Flex>
                <Flex width={[0.7]}>
                  <FormInput
                    // label="Representative Phone*"
                    type="checkBox"
                    // placeholder="Phone Number of the Person Who Represent the Company"
                    name="RepresentativePhone"
                    onChange={onchange}
                    // onBlur={onBlur}
                    value={form.values['RepresentativePhone']}
                    fieldErrors={form.errors}
                    style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                  />
                  <FormInput
                    // label="Representative Phone*"
                    type="checkBox"
                    // placeholder="Phone Number of the Person Who Represent the Company"
                    name="RepresentativePhone"
                    onChange={onchange}
                    // onBlur={onBlur}
                    value={form.values['RepresentativePhone']}
                    fieldErrors={form.errors}
                    style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                  />
                  <FormInput
                    // label="Representative Phone*"
                    type="checkBox"
                    // placeholder="Phone Number of the Person Who Represent the Company"
                    name="RepresentativePhone"
                    onChange={onchange}
                    // onBlur={onBlur}
                    value={form.values['RepresentativePhone']}
                    fieldErrors={form.errors}
                    style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                  />
                </Flex>
              </Flex>
              <Flex width={[1]}>
                <Flex width={[0.3]}>
                  <div style={{ fontSize: '12px', color: '#676767' }}>Maintenance Supervisor</div>
                </Flex>
                <Flex width={[0.7]}>
                  <FormInput
                    // label="Representative Phone*"
                    type="checkBox"
                    // placeholder="Phone Number of the Person Who Represent the Company"
                    name="RepresentativePhone"
                    onChange={onchange}
                    // onBlur={onBlur}
                    value={form.values['RepresentativePhone']}
                    fieldErrors={form.errors}
                    style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                  />
                  <FormInput
                    // label="Representative Phone*"
                    type="checkBox"
                    // placeholder="Phone Number of the Person Who Represent the Company"
                    name="RepresentativePhone"
                    onChange={onchange}
                    // onBlur={onBlur}
                    value={form.values['RepresentativePhone']}
                    fieldErrors={form.errors}
                    style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                  />
                  <FormInput
                    // label="Representative Phone*"
                    type="checkBox"
                    // placeholder="Phone Number of the Person Who Represent the Company"
                    name="RepresentativePhone"
                    onChange={onchange}
                    // onBlur={onBlur}
                    // value={form.values['RepresentativePhone']}
                    checked={true}
                    fieldErrors={form.errors}
                    style={{ formElement: { fontSize: '12px', fontWeight: 200 } }}
                  />
                  basicMembers == true - 1 +
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </FormContainer>
      </Modal>
    </>
  )
}
export default ProfessionalForm
