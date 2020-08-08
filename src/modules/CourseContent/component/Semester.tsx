import React from 'react'
import { Flex, Span } from '@icstark/ui'
import Papers from './Papers'
import Card from './Card'
// import content from '../../../data.json'

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
      width={1}
      className="cardCarousel"
      style={{
        boxSizing: 'border-box',
        overflowX: 'auto',
        overflowY: 'hidden',
        display: '-webkit-inline-box',
        margin: '30px 0'
      }}
      alignItemsCenter
    >
      {/* {content.courseContent.courseName ===
      'Diploma Course in Two Wheeler Mechanism and Maintenance' ? (
        <Card head title={`Semester ${sem}`} />
      ) : null} */}
      <Card head title={`Semester ${sem}`} />
      {Paper(data.paper)}
    </Flex>
  )
}

export default Semester
