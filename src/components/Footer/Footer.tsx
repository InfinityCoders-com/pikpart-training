import React from 'react'
// import logo from '../../assets/jump2join.jpeg'
import jump2join from '../../assets/jump2joinlogo.png'
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
    <Flex style={{ margin: '15px 0px' }}>
      <Flex justifyContentSpaceBetween alignItemsCenter width={0.9} style={{ margin: '0 auto' }}>
        <Flex>
          <Link to="/">
            <img src={jump2join} style={{ height: 50, width: 'auto' }} alt="companyLogo" />
          </Link>
        </Flex>
        <Flex>
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
        <Flex>
          <ContactUsDiv>
            <ContactUs />
          </ContactUsDiv>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer
