import React from 'react'
import { Flex, Span } from '@icstark/ui'
import Card from './Card'

const Description = (data: any) => {
  const des = Object.keys(data).map((item: any) => {
    return (
      <Span
        m={2}
        fontSize={14}
        color={'#959595'}
        style={{ lineHeight: 1.3, letterSpacing: 1 }}
      >{`${item}: ${data[item]}`}</Span>
    )
  })
  return des
}

function Papers(props: any) {
  const { data } = props
  const { credits } = data
  console.log(data)
  return (
    <Card
      title={`Paper ${data.name}`}
      courseCode={data.courseCode}
      credits={credits}
      des={Description(data.description)}
      units={Object.keys(data.description).length - 1}
    />
  )
}

export default Papers
