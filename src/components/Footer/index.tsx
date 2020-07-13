import React from 'react'
import logo from '../../assets/jump2join.jpeg'
import { Flex, styled, Span } from '@icstark/ui'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const FFlex = styled(Flex)`
  box-sizing: border-box;
  padding: 10px;
  border-top: 1px solid #727272;
  overflow: hidden;
`

function Footer() {
  return (
    <FFlex alignItemsCenter justifyContentCenter>
      <Flex width={[1, 0.8]} wrap>
        <Flex width={[1, 0.2]} alignItemsCenter>
          <img src={logo} style={{ height: 80, width: 'auto' }} />
        </Flex>
        <Flex width={[1, 0.8]} alignItemsCenter>
          <a href="#" style={{ color: '#3b5998', margin: 10, textDecoration: 'none' }}>
            <FaFacebook size={20} style={{ margin: -4 }} />
            <Span m={2}> Facebook</Span>
          </a>
          <a href="#" style={{ color: '#E1306C', margin: 10, textDecoration: 'none' }}>
            <FaInstagram size={20} style={{ margin: -4 }} />
            <Span m={2}>Instagram</Span>
          </a>
          <a href="#" style={{ color: '#00acee', margin: 10, textDecoration: 'none' }}>
            <FaTwitter size={20} style={{ margin: -4 }} />
            <Span m={2}>Twitter</Span>
          </a>
          <a href="#" style={{ color: '#0e76a8', margin: 10, textDecoration: 'none' }}>
            <FaLinkedin size={20} style={{ margin: -4 }} />
            <Span m={2}>LinkedIn</Span>
          </a>
        </Flex>
      </Flex>
    </FFlex>
  )
}

export default Footer
