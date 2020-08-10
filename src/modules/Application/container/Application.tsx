import React from 'react'
import { Flex } from '@icstark/ui'
import CertificateForm from '../component/CertificateForm'
import TrainerForm from '../component/TrainerForm'
import ProfessionalForm from '../component/ProfessionalForm'
function Application() {
  return (
    <Flex
      justifyContentSpaceAround
      style={{
        width: '90%',
        margin: '4vmax auto'
      }}
    >
      <CertificateForm />
      <TrainerForm />
      <ProfessionalForm />
    </Flex>
  )
}
export default Application
