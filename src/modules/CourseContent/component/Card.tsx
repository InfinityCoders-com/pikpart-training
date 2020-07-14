import React from 'react'
import { Flex, styled, Span, P } from '@icstark/ui'
import CardImage from '../../../assets/img.jpg'
import { url } from 'inspector'

const Main = styled(Flex)`
  border-radius: 10px;
  overflow: hidden;
  background: #a2c6c7;
  position: relative;
  height: 300px;
  box-shadow: 0 0 1px 1px rgba(100, 100, 100, 0.3);
  margin: 10px 15px 10px 0;
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
  padding: 10px 20px 0;
  letter-spacing: 1px;
  color: #959595;
  font-size: 14px;
`
const CC = styled(Span)`
  line-height: 1.8;
  letter-spacing: 1px;
  color: #959595;
  font-size: 14px;
  align-self: flex-end;
`

function Card({ head, title, des, credits, courseCode, units }: any) {
  return (
    <Main
      className={head ? 'card-head' : 'myCard'}
      style={
        head && {
          background: `url(${CardImage})`,
          backgrondSize: `cover`
        }
      }
    >
      <Body
        column
        style={
          head && {
            background: 'rgba(162, 198, 199, 0.8)',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          }
        }
      >
        {head || <CC>Course-Code: {courseCode}</CC>}
        {title && <Title style={head && { color: '#fff', fontSize: '2.5rem' }}>{title}</Title>}

        <Flex className="cardCredits" style={{ marginTop: 10 }}>
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
