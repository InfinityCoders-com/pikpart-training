import React from 'react'
import { Flex, Span, styled } from '@icstark/ui'
import data from '../../../data.json'

const ASpan = styled(Span)`
  padding-top: 3px;

  padding-bottom: 20px;
  color: #727272;
  font-size: 14px;
  letter-spacing: 0.3px;

  text-align: justify;
`
export const H2Heading = styled.h2`
  font-weight: 600;
  text-align: center;
  margin: 40px 0;
  position: relative;
  user-select: none;
  color: ${(props: any) => props.theme.colors.primary};
`
export const Section = styled.section`
  width: 100%;
  position: relative;
  box-sizing: border-box;
`

function AboutUs() {
  return (
    <Section>
      <H2Heading>About Us</H2Heading>
      <Flex justifyContentCenter alignItemsCenter column width={0.6} style={{ margin: '0 auto' }}>
        <ASpan>{data.aboutUs}</ASpan>
      </Flex>
    </Section>
  )
}

export default AboutUs
