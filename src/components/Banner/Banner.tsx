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
const BIFlex = styled(Flex)`
  width: 100%;
  height: 100%;
  position: absolute;
`

const BImg = styled.img`
  width: 100%;
  height: auto;
`

function Banner({ title, des }: any) {
  return (
    <BFlex>
      <BIFlex justifyContentCenter alignItemsCenter column>
        <Span fontSize={50} style={{ color: '#fff', fontWeight: 500 }}>
          {title}
        </Span>
        {des && (
          <Span fontSize={20} style={{ color: '#fff', fontWeight: 500 }}>
            {des}
          </Span>
        )}
      </BIFlex>
      <BImg src={banner} />
    </BFlex>
  )
}

export default Banner
