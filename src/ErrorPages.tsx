import { Flex, Label, Link } from '@icstark/ui'
import React from 'react'

function ErrorPages(props: any) {
  return (
    <Flex column width={1} alignItemsCenter justifyContentCenter style={{ height: '100vh' }}>
      <Label variant="h1">Url Not Found</Label>
      <Flex alignItemsCenter p={4}>
        Visit
        <Link variant="link" to="/">
          Home
        </Link>
        or
      </Flex>
      <Link variant="link" to="/login">
        Login
      </Link>
    </Flex>
  )
}

export default ErrorPages
