import React from 'react'
import { Flex } from '@icstark/ui'
import { FaUserCircle } from 'react-icons/fa'
function CandidateExp() {
  return (
    <>
      <div
        style={{
          fontWeight: 500,
          color: '#676767',
          textAlign: 'center',
          margin: '4vmax auto'
        }}
      >
        CANDIDATE EXPERIENCE
      </div>
      <Flex
        justifyContentSpaceBetween
        alignItemsCenter
        style={{
          margin: '25px 0px',
          height: '155px'
        }}
      >
        <Flex column style={{ width: '30%', height: '100%' }}>
          <div style={{ fontSize: '14px', color: '#676767', height: '80%' }}>
            "The most important thing is to have a good relationship with the bike... you have to
            understand what she wants. I think of a motorcycle as a woman, and I know that sounds
            silly, but it's true."
          </div>
          <Flex justifyContentFlexStart alignItemsCenter style={{ height: '20%' }}>
            <Flex>
              <FaUserCircle style={{ fontSize: '30px' }} />
            </Flex>
            <Flex
              alignItemsCenter
              style={{ margin: '0px 15px', fontSize: '14px', color: '#676767' }}
            >
              John Doe
            </Flex>
          </Flex>
        </Flex>
        <Flex style={{ width: '30%' }}>
          <iframe
            src="https://www.youtube.com/embed/Nwhl1Mq0eGk"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            style={{ width: '100%', height: 'auto', border: 'none' }}
          />
        </Flex>
        <Flex column style={{ width: '30%', height: '100%' }}>
          <div style={{ fontSize: '14px', color: '#676767', height: '80%' }}>
            "My dreams for the future are simple: work, a happy, healthy family, a lovely long
            motorcycle ride, and continuing the struggle to awaken people to the need for serious
            human rights reform."
          </div>
          <Flex justifyContentFlexStart alignItemsCenter style={{ height: '20%' }}>
            <Flex>
              <FaUserCircle style={{ fontSize: '30px' }} />
            </Flex>
            <Flex
              alignItemsCenter
              style={{ margin: '0px 15px', fontSize: '14px', color: '#676767' }}
            >
              John Doe
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
export default CandidateExp
