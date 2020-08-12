import React from 'react'
import { Flex, styled } from '@icstark/ui'
import CertificateForm from '../component/CertificateForm'
import TrainerForm from '../component/TrainerForm'
import ProfessionalForm from '../component/ProfessionalForm'

const ApplicationContainer = styled(Flex)`
  justify-content: space-around;
  width: 90%;
  margin: 4vmax auto;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

function Application() {
  return (
    <ApplicationContainer>
      <CertificateForm />
      <TrainerForm />
      <ProfessionalForm />
    </ApplicationContainer>
  )
}
export default Application
