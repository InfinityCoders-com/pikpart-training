import React from 'react'
import { Label, Flex } from '@icstark/ui'
import { RouteComponentProps } from 'react-router'
import { RoutesPath } from '../../../config/routes.config'

function Logout(props: RouteComponentProps) {
  React.useLayoutEffect(() => {
    localStorage.clear()
    sessionStorage.clear()
  }, [])
  React.useEffect(() => {
    props.history.replace(RoutesPath.HOME)
  }, [])
  console.log('LOGOUT')

  return (
    <Flex alignItemsCenter justifyContentCenter width={1} style={{ height: '100vh' }}>
      {/* <Label variant="h3">You have been logged out successfully.</Label> */}
      <div>
        <h3>You have been logged out successfully.</h3>
      </div>
    </Flex>
  )
}

export default Logout
