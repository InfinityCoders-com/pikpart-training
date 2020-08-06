import React from 'react'
import { Flex } from '@icstark/ui'

import tvs from '../../../assets/tvs.png'
import royalenfield from '../../../assets/royalenfield.png'
import hero from '../../../assets/hero.png'

function TrustedBy() {
  return (
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
        <img style={{ height: 120, width: 'auto' }} src={tvs} alt="logo" />
        {/* <FaThumbsUp style={{ fontSize: '30px' }} /> */}
      </div>
      <div>
        <img style={{ height: 120, width: 'auto' }} src={royalenfield} alt="logo" />
      </div>
      <div>
        <img style={{ height: 120, width: 'auto' }} src={hero} alt="logo" />
      </div>
    </Flex>
  )
}
export default TrustedBy
