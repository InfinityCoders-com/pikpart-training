import React from 'react'
import { Flex, styled, Button, Link, Label, Span } from '@icstark/ui'
import jump2join from '../../assets/jump2join.jpeg'
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

  const LoggedInMenu = () => {
    return (
      <UserMenuLink style={{ marginRight: '60px' }}>
        <Span
          onClick={(e: any) => {
            e.preventDefault()
            setMenuToggle(!menuToggle)
          }}
        >
          <FaUserCircle size={25} style={{ marginRight: 10 }} />
          <Label>Hi! {user.firstName || 'Guest'}</Label>
        </Span>
        {menuToggle ? (
          <UserProfileMenu>
            <Link to={RoutesPath.HOME}>Home</Link>
            <Link to={RoutesPath.UserProfile}>Profile</Link>
            <Link to={RoutesPath.Logout}>Log Out</Link>
          </UserProfileMenu>
        ) : null}
      </UserMenuLink>
    )
  }

  return (
    <Flex justifyContentSpaceBetween alignItemsCenter>
      <Flex alignItemsCenter>
        <Link to="/">
          <img style={{ height: 70, width: 'auto' }} src={jump2join} alt="logo" />
        </Link>
      </Flex>
      <Flex>
        <Flex style={{ paddingRight: '15px' }}>
          <Link to={RoutesPath.Course}>Courses</Link>
        </Flex>
        <Flex style={{ paddingRight: '15px' }}>
          <Link to={RoutesPath.AboutUs}>About Us</Link>
        </Flex>
        <Flex style={{ paddingRight: '15px' }}>
          <div
            style={{ padding: '9px 16px', fontSize: '14px', color: '#1890ff', cursor: 'pointer' }}
          >
            <ContactUs />
          </div>
        </Flex>
        <Flex>
          {isLoggedin ? (
            <LoggedInMenu />
          ) : (
            <LogInOutButton onClick={() => history.replace(RoutesPath.Login)} title={'Login'}>
              LOG IN
            </LogInOutButton>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
