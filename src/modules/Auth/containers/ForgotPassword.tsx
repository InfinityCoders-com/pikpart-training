import React from 'react'
import { Flex, Span, Button, Link, Label } from '@icstark/ui'
import { RouteComponentProps } from 'react-router-dom'
// import { RoutesPath } from '../../config/routes.config'
// import { FormInput } from '../../components/Form'
// import Logo from '../../../assets/images/pikpart-black.png'
// import { AppIcon } from '../../style/styled'
import { get, post, cancelToken } from '@icstark/utils'
// import { AppIcon } from '../../../style/styled'
import jump2join from '../../../assets/jump2join.jpeg'
import { FormInput } from '../../../components/Forms/Form'
import { RoutesPath } from '../../../config/routes.config'
import { LoginWrapper } from '../styled'
import { validateEmail } from '../../../utility/func'
import { TLoadingFormElement } from '../types'
import { config } from '../../../config/config'

function ForgotPassword({ history }: any) {
  const [registrationState, setRegistrationState] = React.useState<any>({
    values: {},
    errors: {}
  })
  const [error, setError] = React.useState('')
  const [formLoading, setFormLoading] = React.useState<boolean>(false)
  const [success, setSuccess] = React.useState('')

  const source = cancelToken().source()

  async function reset() {
    try {
      const response = await post(
        `${config.baseUrl}/auth/reset-password`,
        { email: registrationState.values.Email },
        source.token
      )
      if (response?.data?.error) {
        setError(response?.data?.message)
        setRegistrationState({
          ...registrationState,
          errors: {
            ...registrationState.errors,
            Email: response?.data?.message
          }
        })
      }
      setSuccess('Your New Password has been sent successfully.')
      setFormLoading(false)
    } catch (e) {
      setFormLoading(false)
      console.error(e)
    }
  }

  async function doesEmailExists(email: string) {
    setFormLoading(true)
    try {
      const response = await post(`${config.baseUrl}/auth/validateEmail`, { email }, source.token)
      if (response?.data?.error) {
        setError(response?.data?.message)
        setRegistrationState({
          ...registrationState,
          errors: {
            ...registrationState.errors,
            Email: response?.data?.message
          }
        })
      } else {
        setRegistrationState({
          ...registrationState,
          errors: {
            ...registrationState.errors,
            Email: undefined
          }
        })
      }
      reset()
    } catch (e) {
      console.error(e)
    }
  }

  function resetError(target: any) {
    setRegistrationState({
      ...registrationState,
      errors: { ...registrationState.errors, [target.name]: undefined }
    })
  }

  function onchange(target: any) {
    setRegistrationState({
      ...registrationState,
      values: { ...registrationState.values, [target.name]: target.value }
    })
  }
  function onBlur({ target }: any) {
    if (['Email'].includes(target.name) && !target.value) {
      setRegistrationState({
        ...registrationState,
        errors: { ...registrationState.errors, [target.name]: '*Field Cannot be Empty' }
      })
    } else {
      if (target.name === 'Email') {
        if (target.value.length > 4 && validateEmail(target.value)) {
          resetError(target)
          doesEmailExists(target.value)
        } else {
          setRegistrationState({
            ...registrationState,
            errors: { ...registrationState.errors, [target.name]: 'Invalid Email' }
          })
        }
      }
    }
  }

  return (
    <Flex style={{ width: '100vw', height: '100vh', overflow: 'hidden auto' }}>
      <Flex column alignItemsCenter style={{ width: 400, margin: '5vh auto 0' }}>
        <div>
          <Link to="/">
            {/* <AppIcon src={Logo} alt="logo" /> */}
            <img style={{ height: 70, width: 'auto' }} src={jump2join} alt="logo" />
          </Link>
        </div>
        <LoginWrapper column>
          {/* <Label m={10} variant="h4" style={{ textAlign: 'center' }}>
            FORGOT PASSWORD
          </Label> */}
          <div style={{ textAlign: 'center', margin: '10px' }}>
            <h4>FORGOT PASSWORD</h4>
          </div>
          <FormInput
            label="Enter Your Registered Email*"
            type="email"
            placeholder="Email"
            name="Email"
            isLoading={formLoading}
            onChange={onchange}
            onBlur={onBlur}
            value={registrationState.values['Email']}
            fieldErrors={registrationState.errors}
          />
        </LoginWrapper>
        {error ? <Span variant="danger">{error}</Span> : null}
        {success ? <Span variant="success">{success}</Span> : null}
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

export default ForgotPassword
