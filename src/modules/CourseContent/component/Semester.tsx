import React from 'react'
import { Flex, Span } from '@icstark/ui'
import Papers from './Papers'
import Card from './Card'

export const Paper = (a: any) => {
  const data = a.map((item: any, i: any) => {
    return <Papers data={item} paper={i + 1} key={String(i)} />
  })
  return data
}

function Semester(props: any) {
  const { sem, data } = props
  //   console.log(data.paper)
  return (
    <Flex
      width={[0.95, 0.9]}
      className="cardCarousel"
      style={{
        boxSizing: 'border-box',
        overflow: 'auto',
        display: '-webkit-inline-box',
        margin: '30px 0'
      }}
      alignItemsCenter
    >
      <Card head title={`Semester ${sem}`} />
      {Paper(data.paper)}
    </Flex>
  )
}

export default Semester
