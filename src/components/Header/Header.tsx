import React from 'react'
import { Flex, styled, Button } from '@icstark/ui'
import jump2join from '../../assets/jump2join.jpeg'
import { RoutesPath } from '../../config/routes.config'

export const LogInOutButton = styled.button`
  border: 1px solid black;
  padding: 4px 12px;
  border-radius: 2px;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.2px;
  background: transparent;
  transition: 0.6s ease;
  margin-right: 5px;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.primary};
    cursor: pointer;
    transition: 0.4s ease;
  }
  @media (max-width: 540px) {
    padding: 4px 8px;
  }
`

// const Img = styled.img`
//   width: 100%;
//   height: auto;
//   @media screen and (max-width: 500px) {
//     max-height: 80px;
//   }
// `

// const HFlex = styled(Flex)`
//   box-shadow: inset 0px -2px 5px rgba(100, 100, 100, 0.7);
// `

function Header({ history }: any) {
  const storage = localStorage.getItem('AuthToken')
  const isLoggedin = storage && storage

  return (
    //   {/* <HFlex justifyContentCenter>
    //   <Flex width={[0.3, 0.2]} style={{ maxWidth: 200, marginBottom: 4 }}>
    //     <Img src={jump2join} />
    //   </Flex>
    // </HFlex> */}
    <Flex justifyContentSpaceBetween alignItemsCenter style={{ padding: '0px 5px' }}>
      <Flex alignItemsCenter>
        <img style={{ height: 70, width: 'auto' }} src={jump2join} alt="logo" />
      </Flex>
      <Flex>
        {isLoggedin ? (
          <LogInOutButton onClick={() => history.replace(RoutesPath.Logout)} title={'Logout'}>
            LOG OUT
          </LogInOutButton>
        ) : (
          <LogInOutButton onClick={() => history.replace(RoutesPath.Login)} title={'Login'}>
            LOG IN
          </LogInOutButton>
        )}
      </Flex>
    </Flex>
  )
}

export default Header
