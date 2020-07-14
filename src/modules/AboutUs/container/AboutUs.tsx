import React from 'react'
import { Flex, Span, styled } from '@icstark/ui'

const ASpan = styled(Span)`
  line-height: 1.8;
  letter-spacing: 1px;
  color: #727272;
  text-align: justify;
`

function AboutUs(props: any) {
  const { data } = props
  return (
    <Flex justifyContentCenter alignItemsCenter wrap column>
      <Span variant="h1 primary" style={{ marginTop: '7vmax', marginBottom: '2vmax' }}>
        About Us
      </Span>
      <Flex width={[0.95, 0.7]}>
        <ASpan variant="h4">{data}</ASpan>
      </Flex>
    </Flex>
  )
}

export default AboutUs
