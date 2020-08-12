import React from 'react'
import { Flex, styled, Button, Link, Label, Span } from '@icstark/ui'
import jump2join from '../../assets/jump2joinlogo.png'
import { RoutesPath } from '../../config/routes.config'
import ContactUs from '../../modules/ContactUs/container/ContactUs'
import { LogInOutButton, UserMenuLink, UserProfileMenu } from './styled'
import { FaUserCircle } from 'react-icons/fa'

const HeadingLink = styled(Link)`
  padding: 9px 16px;
  min-width: max-content;
  font-size: 12px;
  color: #222;
  font-weight: 500;
  @media (max-width: 540px) {
    padding: 3px;
    font-size: 10px;
  }
`
const HeadingFlex = styled(Flex)`
  padding-right: 15px;
  @media (max-width: 540px) {
    padding-right: 3px;
  }
`
const Brand = styled.img`
  height: 40px;
  width: auto;
  @media (max-width: 540px) {
    height: 30px;
  }
`

function Header(props: any) {
  let { history } = props
  const [menuToggle, setMenuToggle] = React.useState(false)
  const storage = localStorage.getItem('AuthToken')
  const user = JSON.parse(localStorage.getItem('user') || '{"firstName": "Guest"}')
  const isLoggedin = storage && storage
  const [modal, setModal] = React.useState(false)

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

  return (
    <Flex justifyContentSpaceBetween alignItemsCenter>
      <Flex alignItemsCenter>
        <Link to="/">
          <Brand src={jump2join} alt="logo" />
        </Link>
      </Flex>
      <Flex>
        <HeadingFlex>
          <HeadingLink to={RoutesPath.HOME}>Home</HeadingLink>
        </HeadingFlex>
        <HeadingFlex>
          <HeadingLink to={RoutesPath.Courses}>Courses</HeadingLink>
        </HeadingFlex>
        <HeadingFlex>
          <HeadingLink to="#" onClick={() => setModal(true)}>
            Contact Us
          </HeadingLink>
        </HeadingFlex>
        <ContactUs setModal={setModal} modal={modal} />
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
