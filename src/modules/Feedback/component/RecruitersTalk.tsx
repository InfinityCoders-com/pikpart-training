import { Flex, Label, Span, styled } from '@icstark/ui'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import recruter3 from '../../../assets/person/mayankAwasthi.png'
import recruter1 from '../../../assets/person/praveshKumar.png'
import recruter2 from '../../../assets/person/swetaGoel.png'
import { CandidateXp, RecruitBody, RecruitContainer, RecruitHeading } from '../styled'

const recruiterTalk = [
  {
    review:
      '"Jump2Join provides multiple interactive training programs. They are unique, and first, of its own kind, expert-guided workshops, classroom training and live system training help the trainee in both practical and vocational development. These training are certified and efficient to fine-tune the skills and help candidates grow in their respective industries. Jump2Join train the people with a vision of shaping their future."',
    author: 'Mayank Awasthi',
    position: 'Director, Oorjagram India P. Ltd.',
    image: recruter3
  },
  {
    review:
      '"Jump2Join has been an outstanding partner in supporting the development of a Ratnashil online Services P Ltd workforce like providing expert mechanics, trained supervisors, efficient computer operators, and etc. They have been highly responsive, helpful beyond the scope of the contract, and highly professional in responding to feedback and offering recommendations for improvement."',
    author: 'Sweta Goel',
    position: 'HR Manager, Ratnasheel Online Services P. Ltd',
    image: recruter2
  },
  {
    review:
      '"All of the feedback I have had from the Jump2Join attendees has been extremely positive – with individuals complimenting how relevant and useful the training material covered was. I hope that this should make a real difference to the level of Customer Services we are able to provide to our customers."',
    author: 'Pravesh Kumar',
    position: ' Director, Bollards Security Pvt Ltd',
    image: recruter1
  }
]

const RecruiterImage: any = styled.div`
  background: ${(props: any) => `url(${props.img})`}center center no-repeat;
  background-size: contain;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  border: 1px solid #d3d3d3;
`
const RecruiterDiv: any = styled(Flex)`
  min-width: 400px;
  height: auto;
  padding: 10px 20px;
  @media (max-width: 540px) {
    width: 250px;
  }
`

function RecruitersTalk() {
  return (
    <RecruitContainer>
      <RecruitHeading>RECRUITER'S TALK</RecruitHeading>
      <RecruitBody>
        {/* <div>
          <iframe
            src="https://www.youtube.com/embed/Nwhl1Mq0eGk"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            style={{ width: 'auto', height: '100', border: 'none', margin: '10px 20px' }}
          />
        </div> */}
        {recruiterTalk.map((content: any, i: number) => {
          return (
            <RecruiterDiv key={i} column justifyContentSpaceBetween>
              <CandidateXp>{content.review}</CandidateXp>
              <Flex justifyContentFlexStart alignItemsCenter p={4}>
                <Flex>
                  {content.image ? (
                    <RecruiterImage img={content.image} />
                  ) : (
                    <FaUserCircle style={{ fontSize: '30px' }} />
                  )}
                </Flex>
                <Flex column style={{ margin: '0 15px' }}>
                  <Label color={'#111'}>{content.author},</Label>
                  <Span>{content.position}</Span>
                </Flex>
              </Flex>
            </RecruiterDiv>
          )
        })}
      </RecruitBody>
    </RecruitContainer>
  )
}
export default RecruitersTalk
