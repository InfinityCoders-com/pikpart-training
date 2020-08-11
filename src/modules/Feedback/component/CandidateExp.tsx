import React from 'react'
import { Flex, styled } from '@icstark/ui'
import { FaUserCircle } from 'react-icons/fa'
import {
  CandidateHeading,
  CandidateXp,
  CandidateName,
  CandidateReactContainer,
  Candidatereact,
  CandidateBody
} from '../styled'
import candidate1 from '../../../assets/person/arun.png'
import candidate2 from '../../../assets/person/aasif.png'
import candidate3 from '../../../assets/person/ankit.png'

const CandidateTalk = [
  {
    review:
      '"Great provider. Excellent Training program and course content. I would definitely extend my highest recommendation for their training programs."',
    author: 'Arun',
    position: 'Mechanic, Pikpart Services',
    image: candidate1
  },
  {
    review:
      '"I have to tell you I am benefitted with this training program and it has reshaped my career, Jump2Join has made an audio/video driven courses that have a whole new dimension!"',
    author: 'Aasif',
    position: 'Mechanic, Pikpart Services',
    image: candidate2
  },
  {
    review:
      '"I had a wonderful experience getting trained with Jump2Join, and would use again for any future enduring program and I would Jump2Join recommend without hesitation."',
    author: 'Manish Patel',
    position: 'Maintenance Engineer, Bollards Security',
    image: null
  },
  {
    review:
      '"I really love the course and it is clearly a showcase course. It looks awesome, a great visual look, good interactivity and it is really packed with information!"',
    author: 'Sujata Gupta',
    position: 'Operations, Ranasheel Online Services',
    image: null
  },
  {
    review:
      '"I just wanted to provide feedback on this Data Entry Operator Course. This is the level and quality that we are looking for. The course was executed beautifully. High recommendation for Jump2Join"',
    author: 'Ankit',
    position: 'Data Operator, Ranasheel Online Services',
    image: candidate3
  }
]
const CandidateDiv = styled(Flex)`
  min-width: 300px;
  height: auto;
  padding: 10px 20px;
`
const CandidateImage: any = styled.div`
  background: ${(props: any) => `url(${props.img})`}center center no-repeat;
  background-size: contain;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  border: 1px solid #d3d3d3;
`
function CandidateExp() {
  return (
    <>
      <CandidateHeading>CANDIDATE EXPERIENCE</CandidateHeading>
      <CandidateBody>
        {CandidateTalk.map((content: any, i: number) => {
          return (
            <CandidateDiv column justifyContentSpaceBetween key={i}>
              <CandidateXp>{content.review}</CandidateXp>

              <Flex justifyContentFlexStart alignItemsCenter p={4}>
                <Flex>
                  {content.image ? (
                    <CandidateImage img={content.image} />
                  ) : (
                    <FaUserCircle style={{ fontSize: '30px' }} />
                  )}
                </Flex>
                <CandidateName alignItemsCenter>
                  {content.author}, {content.position}
                </CandidateName>
              </Flex>
            </CandidateDiv>
          )
        })}
      </CandidateBody>
    </>
  )
}
export default CandidateExp
