import React from 'react'
import { Flex, styled, Button, Link, Label, Span } from '@icstark/ui'
import jump2join from '../../assets/jump2joinlogo.png'
import { RoutesPath } from '../../config/routes.config'
import ContactUs from '../../modules/ContactUs/container/ContactUs'
import { LogInOutButton, UserMenuLink, UserProfileMenu } from './styled'
import { FaUserCircle } from 'react-icons/fa'

function Header(props: any) {
  let { history } = props
  const [menuToggle, setMenuToggle] = React.useState(false)
  const storage = localStorage.getItem('AuthToken')
  const user = JSON.parse(localStorage.getItem('user') || '{"firstName": "Guest"}')
  const isLoggedin = storage && storage

  // const LoggedInMenu = () => {
  //   return (
  //     <UserMenuLink style={{ marginRight: '60px' }}>
  //       <Span
  //         onClick={(e: any) => {
  //           e.preventDefault()
  //           setMenuToggle(!menuToggle)
  //         }}
  //       >
  //         <FaUserCircle size={25} style={{ marginRight: 10 }} />
  //         <Label>Hi! {user.firstName || 'Guest'}</Label>
  //       </Span>
  //       {menuToggle ? (
  //         <UserProfileMenu>
  //           <Link to={RoutesPath.HOME}>Home</Link>
  //           <Link to={RoutesPath.UserProfile}>Profile</Link>
  //           <Link to={RoutesPath.Logout}>Log Out</Link>
  //         </UserProfileMenu>
  //       ) : null}
  //     </UserMenuLink>
  //   )
  // }
  const HeadingLink = styled(Link)`
    padding: 9px 16px;
    min-width: max-content;
    @media (max-width: 540px) {
      padding: 3px 6px;
    }
  `
  const HeadingFlex = styled(Flex)`
    padding-right: 15px;
    @media (max-width: 540px) {
      padding-right: 3px;
    }
  `
  const ContactContainer = styled.div`
    padding: 9px 16px;
    font-size: 12px;
    color: #1890ff;
    cursor: pointer;
    min-width: max-content;
    @media (max-width: 540px) {
      padding: 3px 6px;
    }
  `

  return (
    <Flex justifyContentSpaceBetween alignItemsCenter>
      <Flex alignItemsCenter>
        <Link to="/">
          <img style={{ height: 30, width: 'auto' }} src={jump2join} alt="logo" />
        </Link>
      </Flex>
      <Flex>
        <HeadingFlex>
          <HeadingLink to={RoutesPath.Courses}>
            <div style={{ fontSize: '12px' }}>Courses</div>
          </HeadingLink>
        </HeadingFlex>
        <HeadingFlex>
          <HeadingLink to={RoutesPath.AboutUs}>
            <div style={{ fontSize: '12px' }}>About Us</div>
          </HeadingLink>
        </HeadingFlex>
        <HeadingFlex>
          <ContactContainer>
            <ContactUs />
          </ContactContainer>
        </HeadingFlex>
        {/* <Flex>
          {isLoggedin ? (
            <LoggedInMenu />
          ) : (
            <LogInOutButton onClick={() => history.replace(RoutesPath.Login)} title={'Login'}>
              LOG IN
            </LogInOutButton>
          )}
        </Flex> */}
      </Flex>
    </Flex>
  )
}

export default Header
