import React from 'react'
import jump2join from '../../assets/jump2joinlogo.png'
import { Flex, styled, Span, Link } from '@icstark/ui'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import ContactUs from '../../modules/ContactUs/container/ContactUs'
import { ContactUsDiv, FooterContainer } from './styled'

function Footer() {
  return (
    <Flex style={{ margin: 0 }}>
      <FooterContainer>
        <Flex style={{ margin: '20px 0px' }}>
          <Link to="/">
            <img src={jump2join} style={{ height: 50, width: 'auto' }} alt="companyLogo" />
          </Link>
        </Flex>
        <Flex style={{ margin: '20px 0px' }}>
          <a href="#" style={{ color: '#3b5998', margin: '10px 30px', textDecoration: 'none' }}>
            <FaFacebook size={20} style={{ margin: -4 }} />
          </a>
          <a href="#" style={{ color: '#E1306C', margin: '10px 30px', textDecoration: 'none' }}>
            <FaInstagram size={20} style={{ margin: -4 }} />
          </a>
          <a href="#" style={{ color: '#00acee', margin: '10px 30px', textDecoration: 'none' }}>
            <FaTwitter size={20} style={{ margin: -4 }} />
          </a>
          <a href="#" style={{ color: '#0e76a8', margin: '10px 30px', textDecoration: 'none' }}>
            <FaLinkedin size={20} style={{ margin: -4 }} />
          </a>
        </Flex>
        <Flex style={{ margin: '20px 0px' }}>
          <ContactUsDiv>
            <ContactUs />
          </ContactUsDiv>
        </Flex>
      </FooterContainer>
    </Flex>
  )
}

export default Footer
