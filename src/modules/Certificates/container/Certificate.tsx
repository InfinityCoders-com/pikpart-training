import React from 'react'
import { Flex, Label, styled } from '@icstark/ui'
// import gold from '../../../assets/gold.png'
// import silver from '../../../assets/silver.png'
// import bronze from '../../../assets/bronze.png'
import expert from '../../../assets/expert.png'
import basic from '../../../assets/basic.png'
import advance from '../../../assets/advance.png'
import { CertificateName, CertificateDesc, CertificateContainer } from '../styled'

function Certificate() {
  return (
    <CertificateContainer>
      <Flex column style={{ margin: '10px 0px' }}>
        <div
          style={{
            margin: '0 auto'
          }}
        >
          <img style={{ height: '150px', width: 'auto' }} src={basic} alt="logo" />
        </div>
        <CertificateName>Jump2Join Basic Certification</CertificateName>
        <CertificateDesc>
          Jump2Join Basic Certification program comprises training of Basic Tool and equipment of
          relevant industry including the productivity of the same. Professional behavior and work
          ethics are part of it. The Basic Certification program covers onsite internship as well in
          the relevant industry.
        </CertificateDesc>
      </Flex>
      <Flex column style={{ margin: '10px 0px' }}>
        <div
          style={{
            margin: '0 auto'
          }}
        >
          <img style={{ height: '150px', width: 'auto' }} src={advance} alt="logo" />
        </div>
        <CertificateName>Jump2Join Advance Certification</CertificateName>
        <CertificateDesc>
          Jump2Join Advance Certification program comprises training of specifically advanced tools
          and equipment of relevant industry and includes the productivity practices of the same.
          Personality development, Basic computer operations training, and onsite internship are
          part of the Advanced Certification program.
        </CertificateDesc>
      </Flex>
      <Flex column style={{ margin: '10px 0px' }}>
        <div
          style={{
            margin: '0 auto'
          }}
        >
          <img style={{ height: '150px', width: 'auto' }} src={expert} alt="logo" />
        </div>
        <CertificateName>Jump2Join Expert Certification</CertificateName>
        <CertificateDesc>
          Jump2Join Expert Certification program comprises training of All advanced tools and
          equipment of relevant industry and includes the productivity practices of the same.
          Personality development, Advanced computer operations training, Kaizen Training, Digital
          Marketing Basics, and onsite internship are part of the Expert Certification program.
        </CertificateDesc>
      </Flex>
    </CertificateContainer>
  )
}
export default Certificate
