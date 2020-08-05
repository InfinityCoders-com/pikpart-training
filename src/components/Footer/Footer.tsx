import React from 'react'
import logo from '../../assets/jump2join.jpeg'
import { Flex, styled, Span, Link } from '@icstark/ui'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import ContactUs from '../../modules/ContactUs/container/ContactUs'

const ContactUsDiv = styled.div`
  fontsize: 20px;
  color: ${(props: any) => props.theme.colors.primary};
  font-weight: 600;
  cursor: pointer;
`

function Footer() {
  return (
    <Flex justifyContentSpaceBetween alignItemsCenter width={0.9} style={{ margin: '0 auto' }}>
      <Flex>
        <Link to="/">
          <img src={logo} style={{ height: 80, width: 'auto' }} alt="companyLogo" />
        </Link>
      </Flex>
      <Flex>
        <a href="#" style={{ color: '#3b5998', margin: 10, textDecoration: 'none' }}>
          <FaFacebook size={20} style={{ margin: -4 }} />
        </a>
        <a href="#" style={{ color: '#E1306C', margin: 10, textDecoration: 'none' }}>
          <FaInstagram size={20} style={{ margin: -4 }} />
        </a>
        <a href="#" style={{ color: '#00acee', margin: 10, textDecoration: 'none' }}>
          <FaTwitter size={20} style={{ margin: -4 }} />
        </a>
        <a href="#" style={{ color: '#0e76a8', margin: 10, textDecoration: 'none' }}>
          <FaLinkedin size={20} style={{ margin: -4 }} />
        </a>
      </Flex>
      <Flex>
        <ContactUsDiv>
          <ContactUs />
        </ContactUsDiv>
      </Flex>
    </Flex>
  )
}

export default Footer
