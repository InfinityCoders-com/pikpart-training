import React from 'react'
import { Flex, styled } from '@icstark/ui'
import { FaThumbsUp } from 'react-icons/fa'

// const ContactButton = styled.button`
//   position: fixed;
//   bottom: 20px;
//   right: 30px;
//   z-index: 99;
//   font-size: 18px;
//   border: none;
//   outline: none;
//   background-color: #737373;
//   color: white;
//   cursor: pointer;
//   padding: 15px;
//   border-radius: 4px;
// `

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
          padding: '20px 10px'
        }}
      >
        <div style={{ paddingTop: '7px', width: '20%', fontWeight: 500, color: '#676767' }}>
          TRUSTED BY
        </div>
        <div>
          <FaThumbsUp style={{ fontSize: '30px' }} />
        </div>
        <div>
          <FaThumbsUp style={{ fontSize: '30px' }} />
        </div>
        <div>
          <FaThumbsUp style={{ fontSize: '30px' }} />
        </div>
      </Flex>
      <Flex
        justifyContentSpaceBetween
        alignItemsCenter
        style={{
          margin: '25px 0px',
          boxShadow: 'rgb(204, 204, 204) 0 0 2px',
          borderRadius: '5px',
          padding: '20px 10px'
        }}
      >
        <div style={{ paddingTop: '7px', width: '20%', fontWeight: 500, color: '#676767' }}>
          RECRUITER'S TALK
        </div>
        <div>
          <FaThumbsUp style={{ fontSize: '30px' }} />
        </div>
        <div>
          <FaThumbsUp style={{ fontSize: '30px' }} />
        </div>
        <div>
          <FaThumbsUp style={{ fontSize: '30px' }} />
        </div>
      </Flex>
      <Flex
        justifyContentSpaceBetween
        alignItemsCenter
        style={{
          margin: '25px 0px',
          boxShadow: 'rgb(204, 204, 204) 0 0 2px',
          borderRadius: '5px',
          padding: '20px 10px'
        }}
      >
        <div style={{ paddingTop: '7px', width: '20%', fontWeight: 500, color: '#676767' }}>
          CANDIDATE EXPERIENCE
        </div>
        <div>
          <FaThumbsUp style={{ fontSize: '30px' }} />
        </div>
        <div>
          <FaThumbsUp style={{ fontSize: '30px' }} />
        </div>
        <div>
          <FaThumbsUp style={{ fontSize: '30px' }} />
        </div>
      </Flex>
      {/* <ContactButton>contact us</ContactButton> */}
    </div>
  )
}
export default Feedback
