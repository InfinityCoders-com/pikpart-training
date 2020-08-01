import React from 'react'
import { Flex, Span, Button, Link } from '@icstark/ui'
import { RouteComponentProps } from 'react-router-dom'
import { get, post, cancelToken } from '@icstark/utils'
// import { AppIcon } from '../../../style/styled'
import jump2join from '../../../assets/jump2join.jpeg'
import { RoutesPath } from '../../../config/routes.config'
import RegisterForm from '../components/Register'
import { config } from '../../../config/config'
import { TLoadingFormElement } from '../types'

interface IRegistration extends RouteComponentProps {}

const initRegistrationForm = {
  values: {
    Fname: '',
    Lname: '',
    Phone: '',
    OTP: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  },
  errors: {}
}

function Register({ history }: IRegistration) {
  const [registrationState, setRegistrationState] = React.useState<any>(initRegistrationForm)
  const [session, setSession] = React.useState<string>('')
  const [otpStatus, setOtpStatus] = React.useState<'success' | 'error' | ''>('')
  const [registrationError, setRegistrationError] = React.useState()
  const [formLoading, setFormLoading] = React.useState<TLoadingFormElement>('')

  const source = cancelToken().source()
  const source1 = cancelToken().source()
  const source2 = cancelToken().source()
  const source3 = cancelToken().source()
  const source4 = cancelToken().source()
  const source5 = cancelToken().source()

  const resetRegistrationForm = () => setRegistrationState(initRegistrationForm)

  async function doesPhoneExists(phone: string) {
    setFormLoading('Phone')
    try {
      const response = await post(
        `${config.baseUrl}/auth/validatePhoneNumber`,
        { phoneNumber: phone },
        source4.token
      )
      if (response?.data?.error) {
        setRegistrationState({
          ...registrationState,
          errors: {
            ...registrationState.errors,
            Phone: response?.data?.message
          }
        })
      } else {
        setRegistrationState({
          ...registrationState,
          errors: {
            ...registrationState.errors,
            Phone: undefined
          }
        })
        sendOTP(phone)
      }
      setFormLoading('')
    } catch (e) {
      setFormLoading('')
      console.error(e)
    }
  }

  async function sendOTP(phone: string) {
    setFormLoading('OTP')
    try {
      const response = await get(`${config.smsUrl}/SMS/+91 ${phone}/AUTOGEN`, source1.token)
      if (response.data.Status === 'Success') {
        setRegistrationState({
          ...registrationState,
          errors: {
            ...registrationState.errors,
            Phone: undefined
          }
        })
        setSession(response.data.Details)
      } else if (response.data.Status === 'Error') {
        if (response.data.Details) {
          setRegistrationState({
            ...registrationState,
            errors: {
              ...registrationState.errors,
              Phone: response?.data?.message
            }
          })
        }
        getNotify()
      }
      setFormLoading('')
    } catch (e) {
      setFormLoading('')
      console.error(e)
    }
  }

  async function getNotify() {
    try {
      const response = await get('/api/mail/admin-insufficient-balance', source3.token)
    } catch (e) {
      console.error(e)
    }
  }

  async function submitOTP(otp: number) {
    setFormLoading('OTP')
    try {
      const response = await get(`${config.smsUrl}/SMS/VERIFY/${session}/${otp}`, source2.token)
      if (response.data.Status === 'Success') {
        setOtpStatus('success')
      } else {
        setOtpStatus('error')
      }
      setFormLoading('')
    } catch (e) {
      setFormLoading('')
      console.error(e)
    }
  }

  async function doesEmailExists(email: string) {
    setFormLoading('Email')
    try {
      const response = await post(`${config.baseUrl}/auth/validateEmail`, { email }, source5.token)
      if (response?.data?.error) {
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
      setFormLoading('')
    } catch (e) {
      setFormLoading('')
      console.error(e)
    }
  }

  async function customerRegistration() {
    setFormLoading('ALL')
    let payload = {
      firstName: registrationState.values.Fname,
      lastName: registrationState.values.Lname,
      email: registrationState.values.Email,
      phoneNumber: registrationState.values.Phone,
      password: registrationState.values.Password
    }
    try {
      const response = await post(config.baseUrl + '/auth/register', payload, source.token)
      if (response?.data?.error) {
        setRegistrationError(response.data.message)
      } else {
        localStorage.setItem('AuthToken', response.data.data.auth_token)
        localStorage.setItem('user', JSON.stringify(response.data.data))
        history.push(RoutesPath.HOME)
      }
      setFormLoading('')
    } catch (e) {
      setFormLoading('')
      console.error(e)
    }
  }

  return (
    <Flex style={{ width: '100vw', height: '100vh', overflow: 'hidden auto' }}>
      <Flex column alignItemsCenter style={{ width: 400, margin: '7vh auto 0' }}>
        <div>
          <Link to="/">
            {/* <AppIcon src={Logo} alt="logo" /> */}
            <img style={{ height: 70, width: 'auto' }} src={jump2join} alt="logo" />
          </Link>
        </div>
        <RegisterForm
          history={history}
          otpStatus={otpStatus}
          submitOTP={submitOTP}
          formLoading={formLoading}
          doesPhoneExists={doesPhoneExists}
          doesEmailExists={doesEmailExists}
          registrationState={registrationState}
          setRegistrationState={setRegistrationState}
          customerRegistration={customerRegistration}
          resetRegistrationForm={resetRegistrationForm}
        />
        {registrationError ? <Span variant="danger">{registrationError}</Span> : null}
      </Flex>
    </Flex>
  )
}

export default Register
