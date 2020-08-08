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
    values: {},
    errors: {}
  })
  function onchange(target: any) {
    setForm({
      ...form,
      values: { ...form.values, [target.name]: target.value }
    })
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
        <Flex
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
        </Flex>
      </Modal>
    </>
  )
}
export default ProfessionalForm
