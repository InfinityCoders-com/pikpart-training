import React from 'react'
import { Flex, Span } from '@icstark/ui'
import { Semester } from '../component'
import Card from '../component/Card'
import data from '../../../data.json'
import { H2Heading, Section } from '../../AboutUs/container/AboutUs'

const style = {
  padding: '10px 20px 0'
}

const Sem = (a: any) => {
  const data = a.map((item: any, i: any) => {
    return <Semester data={item} sem={i + 1} key={String(i)} />
  })
  return data
}

function CourseContent(props: any) {
  const path = props.history.location.pathname
  const id = path.split('/')
  // console.log(id)
  return (
    <Section>
      {/* <H2Heading>Course Content</H2Heading> */}
      <H2Heading>{data.courseContent[id[2]].courseName}</H2Heading>
      <Flex
        justifyContentCenter
        alignItemsCenter
        wrap
        column
        width={0.9}
        style={{ margin: '0 auto' }}
      >
        <Flex wrap justifyContentSpaceBetween style={{ boxSizing: 'border-box' }}>
          <Flex
            width={[1, 0.5]}
            style={{ boxSizing: 'border-box' }}
            className="semester"
            column
            justifyContentSpaceBetween
            alignItemsCenter
          >
            {/* <img src={data.courseContent.courseImage} style={{ width: '100%', borderRadius: 10 }} /> */}
          </Flex>
          <Flex
            width={[1, 0.5]}
            style={{ padding: 20, boxSizing: 'border-box' }}
            column
            justifyContentCenter
          >
            <Span fontSize={16} color={'#808184'} style={{ margin: 5, fontWeight: 500 }}>
              {/* {data.courseContent.courseName} */}
            </Span>
            <Span fontSize={14} color={'#959595'} style={style}>
              {/* Registration Fee: Rs.{data.courseContent.registrationFee} */}
            </Span>
            <Span fontSize={14} color={'#959595'} style={style}>
              {/* Course Fee: Rs.{data.courseContent.courseFee} */}
            </Span>
          </Flex>
        </Flex>
        {Sem(data.courseContent[id[2]].semester.sem)}
      </Flex>
    </Section>
  )
}

// function CourseContent(props: any) {
// function CourseContent() {
//   return (
//     <Section>
//       <H2Heading>Course Content</H2Heading>
//       <Flex
//         justifyContentCenter
//         alignItemsCenter
//         wrap
//         column
//         width={0.9}
//         style={{ margin: '0 auto' }}
//       >
//         <Flex wrap justifyContentSpaceBetween style={{ boxSizing: 'border-box' }}>
//           <Flex
//             width={[1, 0.5]}
//             style={{ boxSizing: 'border-box' }}
//             className="semester"
//             column
//             justifyContentSpaceBetween
//             alignItemsCenter
//           >
//             <img src={data.courseContent.courseImage} style={{ width: '100%', borderRadius: 10 }} />
//           </Flex>
//           <Flex
//             width={[1, 0.5]}
//             style={{ padding: 20, boxSizing: 'border-box' }}
//             column
//             justifyContentCenter
//           >
//             <Span fontSize={16} color={'#808184'} style={{ margin: 5, fontWeight: 500 }}>
//               {/* {data.courseContent.courseName} */}
//             </Span>
//             <Span fontSize={14} color={'#959595'} style={style}>
//               Registration Fee: Rs.{data.courseContent.registrationFee}
//             </Span>
//             <Span fontSize={14} color={'#959595'} style={style}>
//               Course Fee: Rs.{data.courseContent.courseFee}
//             </Span>
//           </Flex>
//         </Flex>
//         {Sem(data.courseContent.semester.sem)}
//       </Flex>
//     </Section>
//   )
// }

export default CourseContent
