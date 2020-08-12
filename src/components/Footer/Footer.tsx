import React from 'react'
import jump2join from '../../assets/jump2joinlogo.png'
import { Flex, styled, Span, Link } from '@icstark/ui'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import ContactUs from '../../modules/ContactUs/container/ContactUs'
import { ContactUsDiv, FooterContainer } from './styled'

const HeadingFlex = styled(Flex)`
  padding-right: 15px;
  @media (max-width: 540px) {
    padding-right: 3px;
  }
`
const FooterLink = styled(Link)`
  padding: 9px 16px;
  // min-width: max-content;
  font-size: 16px;
  color: #1890ff;
  font-weight: 600;
  // @media (max-width: 540px) {
  //   padding: 3px;
  //   font-size: 10px;
  // }
`

function Footer() {
  const [modal, setModal] = React.useState(false)
  return (
    <Flex style={{ margin: 0 }}>
      <FooterContainer>
        <Flex style={{ margin: '20px 0px' }}>
          <Link to="/">
            <img src={jump2join} style={{ height: 50, width: 'auto' }} alt="companyLogo" />
          </Link>
        </Flex>
        <Flex style={{ margin: '20px 0px' }}>
          <a
            href="https://www.facebook.com/Jump2Join/"
            target="_blank"
            style={{ color: '#3b5998', margin: '10px 30px', textDecoration: 'none' }}
          >
            <FaFacebook size={20} style={{ margin: -4 }} />
          </a>
          <a
            href="https://www.instagram.com/jump2join/"
            target="_blank"
            style={{ color: '#E1306C', margin: '10px 30px', textDecoration: 'none' }}
          >
            <FaInstagram size={20} style={{ margin: -4 }} />
          </a>
          <a
            href="https://twitter.com/jump2join"
            target="_blank"
            style={{ color: '#00acee', margin: '10px 30px', textDecoration: 'none' }}
          >
            <FaTwitter size={20} style={{ margin: -4 }} />
          </a>
          <a
            href="#"
            target="_blank"
            style={{ color: '#0e76a8', margin: '10px 30px', textDecoration: 'none' }}
          >
            <FaLinkedin size={20} style={{ margin: -4 }} />
          </a>
          <a
            href="https://www.youtube.com/channel/UC_U8-NKuWtM-ApldPDbEuxA?"
            target="_blank"
            style={{ color: '#ff0000', margin: '10px 30px', textDecoration: 'none' }}
          >
            <FaYoutube size={20} style={{ margin: -4 }} />
          </a>
        </Flex>
        {/* <Flex style={{ margin: '20px 0px' }}>
          <ContactUsDiv>
            <ContactUs />
          </ContactUsDiv>
        </Flex> */}
        <Flex style={{ margin: '20px 0px' }}>
          <FooterLink to="#" onClick={() => setModal(true)}>
            Contact Us
          </FooterLink>
        </Flex>
        <ContactUs setModal={setModal} modal={modal} />
      </FooterContainer>
    </Flex>
  )
}

export default Footer
