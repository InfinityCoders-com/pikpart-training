import { Button, Flex, Link, Span } from '@icstark/ui'
import React from 'react'
// import { AppIcon } from '../../../style/styled'
import LoginUserPass from '../components/LoginUserPass'
import { RoutesPath } from '../../../config/routes.config'
import { post, cancelToken } from '@icstark/utils'
import { config } from '../../../config/config'
import jump2join from '../../../assets/jump2join.jpeg'

function Login({ history }: any) {
  const [loginForm, setLoginForm] = React.useState<any>({
    values: {},
    errors: {}
  })
  const [loginError, setLoginError] = React.useState<string>('')
  const [loading, setLoading] = React.useState<boolean>(false)

  const source = cancelToken().source()

  async function onSubmit(e: any) {
    e.preventDefault()
    setLoading(true)
    let payload = {
      email: loginForm.values.Email,
      password: loginForm.values.Password
    }
    try {
      const response = await post(`${config.baseUrl}/auth/login`, payload, source.token)
      if (response?.data?.error) {
        setLoginError(response.data.message)
      } else {
        localStorage.setItem('AuthToken', response.data.data.authToken)
        localStorage.setItem('user', JSON.stringify(response.data.data))
        history.push(RoutesPath.HOME)
        // history.push(RoutesPath.UserProfile)
      }
      setLoading(false)
    } catch (e) {
      setLoading(false)
      setLoginError('Error')
      console.error('Error login:: ', e)
    }
  }
  return (
    <Flex style={{ width: '100vw', height: '100vh', overflow: 'hidden auto' }}>
      <Flex column alignItemsCenter style={{ width: 400, margin: '5vh auto 0' }}>
        <div>
          <Link to="/">
            <img style={{ height: 70, width: 'auto' }} src={jump2join} alt="logo" />
          </Link>
        </div>
        <LoginUserPass
          loading={loading}
          loginForm={loginForm}
          setLoginForm={setLoginForm}
          onSubmit={onSubmit}
        />
        {loginError ? <Span variant="danger">{loginError}</Span> : null}
        <Button
          onClick={(e: any) => {
            e.preventDefault()
            history.push(RoutesPath.LoginMobileOTP)
          }}
          style={{ marginTop: 10 }}
        >
          Login using Mobile
        </Button>
        <Link to="/registration" style={{ margin: '10px 0 5vh' }}>
          Register
        </Link>
      </Flex>
    </Flex>
  )
}

export default Login
