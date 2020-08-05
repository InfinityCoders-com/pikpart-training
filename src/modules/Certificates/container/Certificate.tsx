import React from 'react'
import { Flex, Label, styled } from '@icstark/ui'
import gold from '../../../assets/gold.png'
import silver from '../../../assets/silver.png'
import bronze from '../../../assets/bronze.png'

const CertificateName = styled.div`
  font-weight: 500;
  color: #676767;
  margin: 0 auto;
  font-size: 14px;
  margin-top: 5px;
`

const CertificateDesc = styled.div`
  color: #676767;
  margin: 0 auto;
  font-size: 12px;
  margin-top: 5px;
  width: 90%;
  text-align: justify;
`

function Certificate() {
  return (
    <Flex
      justifyContentSpaceAround
      alignItemsCenter
      style={{
        width: '90%',
        margin: '4vmax auto'
      }}
    >
      <Flex column>
        <div
          style={{
            margin: '0 auto'
          }}
        >
          <img style={{ height: '150px', width: 'auto' }} src={gold} alt="logo" />
        </div>
        <CertificateName>Certificate 1</CertificateName>
        <CertificateDesc>
          Etiam pulvinar magna sed nulla imperdiet, at varius lectus vulputate. Cras volutpat quis
          urna eu ultrices. Praesent laoreet, ante a aliquam tincidunt, nibh arcu malesuada nisl, at
          pharetra augue lectus in ante. Suspendisse potenti. In nec dui erat. Curabitur sit amet
          convallis erat, vel tempus enim.
        </CertificateDesc>
      </Flex>
      <Flex column>
        <div
          style={{
            margin: '0 auto'
          }}
        >
          <img style={{ height: '150px', width: 'auto' }} src={silver} alt="logo" />
        </div>
        <CertificateName>Certificate 2</CertificateName>
        <CertificateDesc>
          Etiam pulvinar magna sed nulla imperdiet, at varius lectus vulputate. Cras volutpat quis
          urna eu ultrices. Praesent laoreet, ante a aliquam tincidunt, nibh arcu malesuada nisl, at
          pharetra augue lectus in ante. Suspendisse potenti. In nec dui erat. Curabitur sit amet
          convallis erat, vel tempus enim.
        </CertificateDesc>
      </Flex>
      <Flex column>
        <div
          style={{
            margin: '0 auto'
          }}
        >
          <img style={{ height: '150px', width: 'auto' }} src={bronze} alt="logo" />
        </div>
        <CertificateName>Certificate 3</CertificateName>
        <CertificateDesc>
          Etiam pulvinar magna sed nulla imperdiet, at varius lectus vulputate. Cras volutpat quis
          urna eu ultrices. Praesent laoreet, ante a aliquam tincidunt, nibh arcu malesuada nisl, at
          pharetra augue lectus in ante. Suspendisse potenti. In nec dui erat. Curabitur sit amet
          convallis erat, vel tempus enim.
        </CertificateDesc>
      </Flex>
    </Flex>
  )
}
export default Certificate
