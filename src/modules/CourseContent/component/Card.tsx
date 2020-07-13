import React from 'react'
import { Flex, styled, Span, P } from '@icstark/ui'

const Main = styled(Flex)`
  border-radius: 10px;
  overflow: hidden;
  background: #a2c6c7;
  position: relative;
  height: 300px;
  box-shadow: 0 0 1px 1px rgba(100, 100, 100, 0.3);
  margin: 10px;
  width: 400px;
`
const Body = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 97%;
  background: #fff;
  bottom: 0;
  padding: 20px;
`

const Title = styled(Span)`
  font-size: 20px;
  color: #6e7272;
  font-weight: 600;
  line-height: 1.2;
  margin-top: 5px;
`
const Des = styled(Flex)`
  margin-top: 1rem;
  line-height: 1;
  letter-spacing: 1px;
  color: #959595;
  font-size: 16px;
`
const Det = styled(Span)`
  margin: 5px;
  line-height: 1.8;
  letter-spacing: 1px;
  color: #959595;
  font-size: 14px;
`
const CC = styled(Span)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 2px;
  line-height: 1.8;
  letter-spacing: 1px;
  color: #959595;
  font-size: 14px;
`

function Card({ head, title, des, credits, courseCode, units }: any) {
  return (
    <Main className="myCard">
      <Body column style={head && { background: '#A2C6C7' }}>
        {head || <CC>Course-Code: {courseCode}</CC>}
        {title && <Title style={head && { color: '#fff', fontSize: '2.5rem' }}>{title}</Title>}

        <Flex className="cardCredits">
          {head || (credits.credit && <Det className="cardDet">Credit: {credits.credit}</Det>)}
          {head || (credits.theory && <Det className="cardDet">Theory: {credits.theory}</Det>)}
          {head ||
            (credits.practicals && <Det className="cardDet">Practicals: {credits.practicals}</Det>)}
          {head || (credits.marks && <Det className="cardDet">Marks: {credits.marks}</Det>)}
        </Flex>
        {head || (units && <Det className="cardUnit">Units: {units}</Det>)}
        {head ||
          (des && (
            <Des column className="cardDes">
              {des}
            </Des>
          ))}
      </Body>
    </Main>
  )
}

export default Card
