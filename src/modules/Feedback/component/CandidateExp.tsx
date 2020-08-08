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

const CandidateTalk = [
  {
    review:
      'Great provider. Excellent Training program and course content. I would definitely extend my highest recommendation for their training programs.',
    author: 'Arun',
    position: 'Mechanic, Pikpart Services'
  },
  {
    review:
      'I have to tell you I am benefitted with this training program and it has reshaped my career, Jump2Join has made an audio/video driven courses that have a whole new dimension! ',
    author: 'Aasif',
    position: 'Mechanic, Pikpart Services'
  },
  {
    review:
      'I had a wonderful experience getting trained with Jump2Join, and would use again for any future enduring program and I would Jump2Join recommend without hesitation.',
    author: 'Manish Patel',
    position: 'Maintenance Engineer, Bollards Security'
  },
  {
    review:
      'I really love the course and it is clearly a showcase course. It looks awesome, a great visual look, good interactivity and it is really packed with information!',
    author: 'Sujata Gupta',
    position: 'Operations, Ranasheel Online Services'
  },
  {
    review:
      'I just wanted to provide feedback on this Data Entry Operator Course. This is the level and quality that we are looking for. The course was executed beautifully. High recommendation for Jump2Join',
    author: 'Ankit',
    position: 'Data Operator, Ranasheel Online Services'
  }
]

function CandidateExp() {
  return (
    <>
      <CandidateHeading>CANDIDATE EXPERIENCE</CandidateHeading>
      {/* <CandidateReactContainer>
        <Candidatereact>
          <CandidateXp>
            "The most important thing is to have a good relationship with the bike... you have to
            understand what she wants. I think of a motorcycle as a woman, and I know that sounds
            silly, but it's true."
          </CandidateXp>
          <Flex
            justifyContentFlexStart
            alignItemsCenter
            style={{ height: '20%', marginTop: '10px' }}
          >
            <Flex>
              <FaUserCircle style={{ fontSize: '30px' }} />
            </Flex>
            <CandidateName alignItemsCenter>John Doe</CandidateName>
          </Flex>
        </Candidatereact>
        <Candidatereact>
          <iframe
            src="https://www.youtube.com/embed/Nwhl1Mq0eGk"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            style={{ width: '100%', height: 'auto', border: 'none' }}
          />
        </Candidatereact>
        <Candidatereact>
          <CandidateXp>
            "My dreams for the future are simple: work, a happy, healthy family, a lovely long
            motorcycle ride, and continuing the struggle to awaken people to the need for serious
            human rights reform."
          </CandidateXp>
          <Flex
            justifyContentFlexStart
            alignItemsCenter
            style={{ height: '20%', marginTop: '10px' }}
          >
            <Flex>
              <FaUserCircle style={{ fontSize: '30px' }} />
            </Flex>
            <CandidateName alignItemsCenter>John Doe</CandidateName>
          </Flex>
        </Candidatereact>
        <Candidatereact>
          <CandidateXp>
            "My dreams for the future are simple: work, a happy, healthy family, a lovely long
            motorcycle ride, and continuing the struggle to awaken people to the need for serious
            human rights reform."
          </CandidateXp>
          <Flex
            justifyContentFlexStart
            alignItemsCenter
            style={{ height: '20%', marginTop: '10px' }}
          >
            <Flex>
              <FaUserCircle style={{ fontSize: '30px' }} />
            </Flex>
            <CandidateName alignItemsCenter>John Doe</CandidateName>
          </Flex>
        </Candidatereact>
      </CandidateReactContainer> */}
      <CandidateBody>
        {CandidateTalk.map((content: any, i: number) => {
          return (
            <div key={i}>
              <div style={{ width: '300px', height: 'auto', margin: '10px 20px' }}>
                <CandidateXp>{content.review}</CandidateXp>
                <Flex
                  justifyContentFlexStart
                  alignItemsCenter
                  style={{ height: '20%', marginTop: '10px' }}
                >
                  <Flex>
                    <FaUserCircle style={{ fontSize: '30px' }} />
                  </Flex>
                  <CandidateName alignItemsCenter>
                    {content.author},{content.position}
                  </CandidateName>
                </Flex>
              </div>
            </div>
          )
        })}
      </CandidateBody>
    </>
  )
}
export default CandidateExp
