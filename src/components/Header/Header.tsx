import React from 'react'
import { Flex, styled } from '@icstark/ui'
import jump2join from '../../assets/jump2join.jpeg'

const Img = styled.img`
  width: 100%;
  height: auto;
  @media screen and (max-width: 500px) {
    max-height: 80px;
  }
`

const HFlex = styled(Flex)`
  border-bottom: 1px solid #000;
`

function Header() {
  return (
    <HFlex justifyContentCenter>
      <Flex width={[0.3, 0.2]} style={{ maxWidth: 200 }}>
        <Img src={jump2join} />
      </Flex>
    </HFlex>
  )
}

export default Header
