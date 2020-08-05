import React from 'react'
import { styled, Flex, Span } from '@icstark/ui'
import banner from '../../assets/banner.jpg'

const BFlex = styled(Flex)`
  width: 100%;
  height: auto;
  position: relative;
  @media screen and (max-width: 500px) {
    max-height: 250px;
  }
`

const BImg = styled.img`
  width: 100%;
  height: auto;
`

function Banner({ title, des }: any) {
  return (
    <BFlex>
      <BImg src={banner} />
    </BFlex>
  )
}

export default Banner
