import React from 'react'
import { Flex } from '@icstark/ui'
import { FaThumbsUp } from 'react-icons/fa'

function RecruitersTalk() {
  return (
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
      {/* <div
        style={{
          width: '85%',
          overflowX: 'auto',
          overflowY: 'hidden',
          display: '-webkit-inline-box'
        }}
      >
        <FaThumbsUp style={{ fontSize: '30px', width: '100px' }} />
        <FaThumbsUp style={{ fontSize: '30px', width: '100px' }} />
        <FaThumbsUp style={{ fontSize: '30px', width: '100px' }} />
        <FaThumbsUp style={{ fontSize: '30px', width: '100px' }} />
        <FaThumbsUp style={{ fontSize: '30px', width: '100px' }} />
        <FaThumbsUp style={{ fontSize: '30px', width: '100px' }} />
        <FaThumbsUp style={{ fontSize: '30px', width: '100px' }} />
        <FaThumbsUp style={{ fontSize: '30px', width: '100px' }} />
        <FaThumbsUp style={{ fontSize: '30px', width: '100px' }} />
        <FaThumbsUp style={{ fontSize: '30px', width: '100px' }} />
        <FaThumbsUp style={{ fontSize: '30px', width: '100px' }} />
      </div> */}
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
      {/* <div style={{ width: '25%' }}>
        <iframe
          src="https://www.youtube.com/embed/Nwhl1Mq0eGk"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          style={{ width: '100%', height: 'auto', border: 'none', margin: '0 auto' }}
        />
      </div>
      <div style={{ width: '25%' }}>
        <iframe
          src="https://www.youtube.com/embed/Nwhl1Mq0eGk"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          style={{ width: '100%', height: 'auto', border: 'none', margin: '0 auto' }}
        />
      </div> */}
    </Flex>
  )
}
export default RecruitersTalk
