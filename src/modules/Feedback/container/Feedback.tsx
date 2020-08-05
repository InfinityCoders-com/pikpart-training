import React from 'react'
import { Flex, styled } from '@icstark/ui'
import { FaThumbsUp } from 'react-icons/fa'
import tvs from '../../../assets/tvs.png'
import royalenfield from '../../../assets/royalenfield.png'
import hero from '../../../assets/hero.png'
import { FaUserCircle } from 'react-icons/fa'

function Feedback() {
  return (
    <div style={{ width: '90%', margin: '4vmax auto' }}>
      <Flex
        justifyContentSpaceBetween
        alignItemsCenter
        style={{
          margin: '25px 0px',
          boxShadow: 'rgb(204, 204, 204) 0 0 2px',
          borderRadius: '5px',
          padding: '10px'
        }}
      >
        <div style={{ paddingTop: '7px', width: '15%', fontWeight: 500, color: '#676767' }}>
          TRUSTED BY
        </div>
        <div>
          <img style={{ height: 70, width: 'auto' }} src={tvs} alt="logo" />
          {/* <FaThumbsUp style={{ fontSize: '30px' }} /> */}
        </div>
        <div>
          <img style={{ height: 70, width: 'auto' }} src={royalenfield} alt="logo" />
        </div>
        <div>
          <img style={{ height: 70, width: 'auto' }} src={hero} alt="logo" />
        </div>
      </Flex>
      <Flex
        justifyContentSpaceBetween
        alignItemsCenter
        style={{
          margin: '25px 0px',
          boxShadow: 'rgb(204, 204, 204) 0 0 2px',
          borderRadius: '5px',
          padding: ' 10px'
        }}
      >
        <div style={{ paddingTop: '7px', width: '15%', fontWeight: 500, color: '#676767' }}>
          RECRUITER'S TALK
        </div>
        <div style={{ width: '25%' }}>
          <iframe
            src="https://www.youtube.com/embed/Nwhl1Mq0eGk"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            style={{ width: '100%', height: 'auto', border: 'none' }}
          />
          {/* <FaThumbsUp style={{ fontSize: '30px' }} /> */}
        </div>
        <div style={{ width: '25%' }}>
          <iframe
            src="https://www.youtube.com/embed/Nwhl1Mq0eGk"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            style={{ width: '100%', height: 'auto', border: 'none' }}
          />
        </div>
        <div style={{ width: '25%' }}>
          <iframe
            src="https://www.youtube.com/embed/Nwhl1Mq0eGk"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            style={{ width: '100%', height: 'auto', border: 'none', margin: '0 auto' }}
          />
        </div>
      </Flex>
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
          margin: '25px 0px'
          // padding: '10px'
        }}
      >
        <Flex column style={{ width: '30%' }}>
          <div style={{ fontSize: '14px', color: '#676767' }}>
            "The most important thing is to have a good relationship with the bike... you have to
            understand what she wants. I think of a motorcycle as a woman, and I know that sounds
            silly, but it's true."
          </div>
          <Flex justifyContentFlexStart m={5}>
            <Flex>
              <FaUserCircle style={{ fontSize: '30px' }} />
            </Flex>
            <Flex
              alignItemsCenter
              style={{ margin: '0px 5px', fontSize: '14px', color: '#676767' }}
            >
              John Doe
            </Flex>
          </Flex>
        </Flex>
        <div>
          <iframe
            src="https://www.youtube.com/embed/Nwhl1Mq0eGk"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            style={{ width: '100%', height: 'auto', border: 'none' }}
          />
        </div>
        <Flex column style={{ width: '30%' }}>
          <div style={{ fontSize: '14px', color: '#676767' }}>
            "My dreams for the future are simple: work, a happy, healthy family, a lovely long
            motorcycle ride, and continuing the struggle to awaken people to the need for serious
            human rights reform."
          </div>
          <Flex justifyContentFlexStart m={5}>
            <Flex>
              <FaUserCircle style={{ fontSize: '30px' }} />
            </Flex>
            <Flex
              alignItemsCenter
              style={{ margin: '0px 5px', fontSize: '14px', color: '#676767' }}
            >
              John Doe
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}
export default Feedback
