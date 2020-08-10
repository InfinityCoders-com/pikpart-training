import React from 'react'
import { Flex, Span } from '@icstark/ui'
import data from '../../../data.json'
import { H2Heading, Section } from '../../AboutUs/container/AboutUs'
import { RoutesPath } from '../../../config/routes.config'

// const data = {
//   courseContent: [
//     {
//       courseName: 'Diploma Course in Two Wheeler Mechanism and Maintenance',
//       courseImage: 'https://live.staticflickr.com/65535/48732780891_8611957ece_b.jpg',
//       registrationFee: 800,
//       courseFee: 12000,
//       semester: {
//         sem: [
//           {
//             paper: [
//               {
//                 name: '1: BASIC OF TWO WHEELERS',
//                 courseCode: '20TWMV0101',
//                 credits: {
//                   theory: 3,
//                   practicals: 3,
//                   marks: 100
//                 },
//                 description: {
//                   Objectives:
//                     'The course aims to provide knowledge repairing and servicing Two-Wheelers and also its functions, break-down, overhauling and trouble shooting.',
//                   'Unit I': 'Basic Checkup',
//                   'Unit II': 'Inlet problems',
//                   'Unit III': 'Starting Problems',
//                   'Unit IV': 'Engine Assembly',
//                   'Unit V': 'Clutch Assembly'
//                 }
//               },
//               {
//                 name: '2: MAJOR SYSTEMS IN TWO WHEELERS',
//                 courseCode: '16TWMV0102',
//                 credits: {
//                   theory: 3,
//                   practicals: 3,
//                   marks: 100
//                 },
//                 description: {
//                   Objectives:
//                     'The course aims to provide knowledge repairing and servicing Two-Wheelers and also its functions, break-down, overhauling and trouble shooting.',
//                   'Unit I': 'Basic Checkup',
//                   'Unit II': 'Inlet problems',
//                   'Unit III': 'Starting Problems',
//                   'Unit IV': 'Engine Assembly',
//                   'Unit V': 'Clutch Assembly'
//                 }
//               },
//               {
//                 name: '3:GENERAL CHECKUP FOR TWO WHEELERS',
//                 courseCode: '16TWMV0103',
//                 credits: {
//                   theory: 3,
//                   practicals: 3,
//                   marks: 100
//                 },
//                 description: {
//                   Objectives:
//                     'The course aims to provide knowledge repairing and servicing Two-Wheelers and also its functions, break-down, overhauling and trouble shooting.',
//                   'Unit I': 'Basic Checkup',
//                   'Unit II': 'Inlet problems',
//                   'Unit III': 'Starting Problems',
//                   'Unit IV': 'Engine Assembly',
//                   'Unit V': 'Clutch Assembly'
//                 }
//               },
//               {
//                 name: '4:ASSEMBLIES AND AUTO-ELECTRICAL',
//                 courseCode: '16TWMV0103',
//                 credits: {
//                   theory: 3,
//                   practicals: 3,
//                   marks: 100
//                 },
//                 description: {
//                   Objectives:
//                     'The course aims to provide knowledge repairing and servicing Two-Wheelers and also its functions, break-down, overhauling and trouble shooting.',
//                   'Unit I': 'Basic Checkup',
//                   'Unit II': 'Inlet problems',
//                   'Unit III': 'Starting Problems',
//                   'Unit IV': 'Engine Assembly'
//                 }
//               }
//             ]
//           },
//           {
//             paper: [
//               {
//                 name: '6: INDUSTRIAL PLACEMENT FOR HANDS-ON-EXPERIENCE',
//                 courseCode: '16TWMV0103',
//                 credits: {
//                   credit: 30
//                 },
//                 marks: 100,
//                 description: {
//                   Objectives:
//                     'The course aims to provide knowledge repairing and servicing Two-Wheelers and also its functions, break-down, overhauling and trouble shooting.',
//                   'Unit I': 'Basic Checkup',
//                   'Unit II': 'Inlet problems',
//                   'Unit III': 'Starting Problems',
//                   'Unit IV': 'Engine Assembly',
//                   'Unit V': 'Clutch Assembly'
//                 }
//               }
//             ]
//           }
//         ]
//       }
//     }
//   ]
// }

function Courses({ history }: any) {
  return (
    <Section>
      <H2Heading>Courses</H2Heading>
      <Flex
        justifyContentCenter
        alignItemsCenter
        wrap
        column
        width={0.9}
        style={{ margin: '0 auto' }}
      >
        {data.courseContent.map((content: any, i: number) => {
          return (
            <Flex
              wrap
              justifyContentSpaceBetween
              style={{ boxSizing: 'border-box', margin: '20px 0px' }}
              key={i}
              onClick={() => history.push(`${RoutesPath.CourseContent}/${content.id}`)}
            >
              <Flex
                width={[1, 0.5]}
                style={{ boxSizing: 'border-box' }}
                className="semester"
                column
                justifyContentSpaceBetween
                alignItemsCenter
              >
                {/* <img src={content.courseImage} style={{ width: '100%', borderRadius: 10 }} /> */}
                <img src={content.courseImage} style={{ width: '80%', borderRadius: 10 }} />
              </Flex>
              <Flex
                width={[1, 0.5]}
                style={{ padding: 20, boxSizing: 'border-box' }}
                column
                justifyContentCenter
              >
                <Span fontSize={16} color={'#808184'} style={{ margin: 5, fontWeight: 500 }}>
                  {content.courseName}
                </Span>
                {content.registrationFee ? (
                  <Span fontSize={14} color={'#959595'} style={{ padding: '10px 20px 0' }}>
                    Registration Fee: Rs.{content.registrationFee}
                  </Span>
                ) : null}
                {/* <Span fontSize={14} color={'#959595'} style={{ padding: '10px 20px 0' }}>
                  Registration Fee: Rs.{content.registrationFee}
                </Span> */}
                {content.courseFee ? (
                  <Span fontSize={14} color={'#959595'} style={{ padding: '10px 20px 0' }}>
                    Course Fee: Rs.{content.courseFee}
                  </Span>
                ) : null}
                {/* <Span fontSize={14} color={'#959595'} style={{ padding: '10px 20px 0' }}>
                  Course Fee: Rs.{content.courseFee}
                </Span> */}
              </Flex>
            </Flex>
          )
        })}
        {/* <Flex wrap justifyContentSpaceBetween style={{ boxSizing: 'border-box' }}>
          <Flex
            width={[1, 0.5]}
            style={{ boxSizing: 'border-box' }}
            className="semester"
            column
            justifyContentSpaceBetween
            alignItemsCenter
          >
            <img src={data.courseContent.courseImage} style={{ width: '100%', borderRadius: 10 }} />
          </Flex>
          <Flex
            width={[1, 0.5]}
            style={{ padding: 20, boxSizing: 'border-box' }}
            column
            justifyContentCenter
          >
            <Span fontSize={16} color={'#808184'} style={{ margin: 5, fontWeight: 500 }}>
              {data.courseContent.courseName}
            </Span>
            <Span fontSize={14} color={'#959595'} style={{ padding: '10px 20px 0' }}>
              Registration Fee: Rs.{data.courseContent.registrationFee}
            </Span>
            <Span fontSize={14} color={'#959595'} style={{ padding: '10px 20px 0' }}>
              Course Fee: Rs.{data.courseContent.courseFee}
            </Span>
          </Flex>
        </Flex> */}
        {/* {Sem(data.courseContent.semester.sem)} */}
      </Flex>
    </Section>
  )
}
export default Courses
