import { Button, Flex, Link } from '@icstark/ui'
// import { AppIcon } from '../../../style/styled'
import jump2join from '../../../assets/jump2join.jpeg'
import { Label } from '@icstark/ui'
import { cancelToken } from '@icstark/utils'
import React from 'react'
import { FormInput } from '../../../components/Forms/Form'
import { RoutesPath } from '../../../config/routes.config'
import { sendOTP, submitOTP } from '../service'
import { LoginWrapper } from '../styled'
import { TLoadingFormElement } from '../types'

function LoginMobileOTP({ history }: any) {
  const [loginForm, setLoginForm] = React.useState<any>({
    values: {},
    errors: {}
  })
  const [formLoading, setFormLoading] = React.useState<TLoadingFormElement>('')
  const [showOTP, setShowOTP] = React.useState<boolean>(false)
  const [session, setSession] = React.useState<string>('')
  const [resendOTP, setResendOTP] = React.useState<boolean>(false)
  const [timer, setTimer] = React.useState<number>(0)
  const source = cancelToken().source()
  const source1 = cancelToken().source()

  React.useEffect(() => {
    let timerInterval: any = undefined
    if (resendOTP) {
      setTimer(20)
      timerInterval = setInterval(() => {
        if (timer) {
          setTimer(timer - 1)
        }
      }, 1000)
    }
    return () => {
      clearInterval(timerInterval)
    }
  }, [resendOTP])

  function onSuccess() {
    localStorage.setItem('AuthToken', loginForm.values.Mobile)
    history.push(RoutesPath.HOME)
  }
  console.log(timer)

  function resetError(target: any) {
    setLoginForm({
      ...loginForm,
      errors: { ...loginForm.errors, [target.name]: undefined }
    })
  }

  function onchange(target: any) {
    if (target.name === 'Mobile' && target.value.length === 10) {
      sendOTP({
        setLoading: setFormLoading,
        onSuccess: (response: any) => {
          setSession(response.data.Details)
          setResendOTP(true)
          setShowOTP(true)
        },
        onError: () => {
          setLoginForm({
            ...loginForm,
            errors: { ...loginForm.errors, [target.name]: 'Error' }
          })
        },
        phone: target.value,
        source: source1
      })
    }
    if (target.name === 'OTP' && target.value.length === 6) {
      submitOTP({
        setLoading: setFormLoading,
        onSuccess,
        onError: () => {
          setLoginForm({
            ...loginForm,
            errors: { ...loginForm.errors, [target.name]: 'Invalid OTP' }
          })
        },
        session,
        otp: target.value,
        source
      })
    }

    setLoginForm({
      ...loginForm,
      values: { ...loginForm.values, [target.name]: target.value }
    })
  }

  function onBlur({ target }: any) {
    if (['Phone', 'OTP'].includes(target.name) && !target.value) {
      setLoginForm({
        ...loginForm,
        errors: { ...loginForm.errors, [target.name]: '*Field Cannot be Empty' }
      })
    } else {
      if (target.name === 'Phone') {
        if (target.value.length === 10) {
          resetError(target)
        } else {
          setLoginForm({
            ...loginForm,
            errors: {
              ...loginForm.errors,
              [target.name]: 'Phone number must be of 10 digit'
            }
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
            OTP LOGIN
          </Label> */}
          <div style={{ textAlign: 'center', margin: '10px' }}>
            <h4>OTP LOGIN</h4>
          </div>
          <FormInput
            label=""
            type="phone"
            isLoading={formLoading === 'Phone'}
            placeholder="Enter Your Mobile Number"
            name="Mobile"
            onChange={onchange}
            onBlur={onBlur}
            value={loginForm.values['Mobile']}
            fieldErrors={loginForm.errors}
          />
          {showOTP ? (
            <FormInput
              label=""
              type="number"
              placeholder="Enter Your OTP"
              name="OTP"
              isLoading={formLoading === 'OTP'}
              onChange={onchange}
              value={loginForm.values['OTP']}
              fieldErrors={loginForm.errors}
            />
          ) : null}
        </LoginWrapper>
        <Button
          onClick={(e: any) => {
            e.preventDefault()
            history.push(RoutesPath.Login)
          }}
          style={{ marginTop: 10 }}
        >
          Login using Password
        </Button>
        <Link to="/registration" style={{ marginTop: 10 }}>
          Register
        </Link>
      </Flex>
    </Flex>
  )
}

export default LoginMobileOTP
