import React from 'react'
import { Flex, Span } from '@icstark/ui'
import { Semester } from '../component'
import Card from '../component/Card'

const Sem = (a: any) => {
  const data = a.map((item: any, i: any) => {
    return <Semester data={item} sem={i + 1} key={String(i)} />
  })
  return data
}

function CourseContent(props: any) {
  const { data } = props
  const { courseName, courseImage, registrationFee, courseFee, semester } = data
  console.log(semester)
  return (
    <Flex justifyContentCenter alignItemsCenter wrap column>
      <Span color={`#808184`} variant="h1" style={{ marginTop: '7vmax', marginBottom: '2vmax' }}>
        Course Content
      </Span>
      <Flex wrap justifyContentSpaceBetween style={{ margin: 10, boxSizing: 'border-box' }}>
        <Flex
          width={[1, 0.5]}
          style={{ padding: 10, boxSizing: 'border-box' }}
          className="semester"
          column
          justifyContentCenter
          alignItemsCenter
        >
          <img src={courseImage} style={{ width: '80%', borderRadius: 10 }} />
        </Flex>
        <Flex width={[1, 0.5]} style={{ padding: 10, boxSizing: 'border-box' }} column>
          <Span fontSize={30} color={'#808184'} style={{ margin: 5, fontWeight: 500 }}>
            {courseName}
          </Span>
          <Span fontSize={18} color={'#959595'} style={{ margin: 5 }}>
            Registration Fee: Rs.{registrationFee}
          </Span>
          <Span fontSize={18} color={'#959595'} style={{ margin: 5 }}>
            Course Fee: Rs.{courseFee}
          </Span>
        </Flex>
      </Flex>

      {Sem(semester.sem)}
    </Flex>
  )
}

export default CourseContent
