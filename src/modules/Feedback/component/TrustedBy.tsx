import React from 'react'
import { Flex } from '@icstark/ui'
import hero from '../../../assets/brands-logo/hero-brand.png'
import bajaj from '../../../assets/brands-logo/bajaj-brand.png'
import honda from '../../../assets/brands-logo/honda-brand.png'
import mahindra from '../../../assets/brands-logo/mahindra-brand.png'
import re from '../../../assets/brands-logo/royal-enfield-brand.png'
import tvs from '../../../assets/brands-logo/tvs-brand.png'
import yamaha from '../../../assets/brands-logo/yamaha-brand.png'
import ktm from '../../../assets/brands-logo/ktm-brand.png'
import pikpart from '../../../assets/brands-logo/pikpart-brand4.png'
import { TrustedContainer, TrustedHeading, TrustBrandContainer } from '../styled'

function TrustedBy() {
  return (
    <TrustedContainer>
      <TrustedHeading>TRUSTED BY</TrustedHeading>
      <TrustBrandContainer>
        <div>
          <img
            src={pikpart}
            alt="pikpart"
            style={{ height: '40px', width: 'auto', margin: '30px 20px' }}
          />
        </div>
        <div>
          <img src={tvs} alt="tvs" style={{ height: '60px', width: 'auto', margin: '10px 20px' }} />
        </div>
        <div>
          <img src={re} alt="re" style={{ height: '40px', width: 'auto', margin: ' 20px' }} />
        </div>
        <div>
          <img
            src={hero}
            alt="hero"
            style={{ height: '30px', width: 'auto', margin: '25px 20px' }}
          />
        </div>
        <div>
          <img
            src={honda}
            alt="honda"
            style={{ height: '50px', width: 'auto', margin: '10px 20px' }}
          />
        </div>
        <div>
          <img
            src={bajaj}
            alt="bajaj"
            style={{ height: '40px', width: 'auto', margin: '15px 20px' }}
          />
        </div>
        <div>
          <img
            src={mahindra}
            alt="mahindra"
            style={{ height: '60px', width: 'auto', margin: '10px 20px' }}
          />
        </div>
        <div>
          <img
            src={yamaha}
            alt="yamaha"
            style={{ height: '50px', width: 'auto', margin: '15px 20px' }}
          />
        </div>
        <div>
          <img src={ktm} alt="ktm" style={{ height: '40px', width: 'auto', margin: '15px 20px' }} />
        </div>
      </TrustBrandContainer>
    </TrustedContainer>
  )
}
export default TrustedBy
