import { Button, Link, Label } from '@icstark/ui'
import React from 'react'
import { FormInput } from '../../../components/Forms/Form'
import { validateEmail } from '../../../utility/func'
import { RegisterWrapper, AuthFormButton } from '../styled'
import { TLoadingFormElement } from '../types'
import { FaDivide } from 'react-icons/fa'

interface IRegistrationForm {
  formLoading: TLoadingFormElement
}

function RegisterForm({
  submitOTP,
  otpStatus,
  formLoading,
  doesPhoneExists,
  doesEmailExists,
  registrationState,
  customerRegistration,
  setRegistrationState,
  resetRegistrationForm
}: any) {
  function onchange(target: any) {
    if (target.name === 'OTP' && target.value.length === 6) {
      submitOTP(target.value)
    }
    setRegistrationState({
      ...registrationState,
      values: { ...registrationState.values, [target.name]: target.value }
    })
  }

  function resetError(target: any) {
    setRegistrationState({
      ...registrationState,
      errors: { ...registrationState.errors, [target.name]: undefined }
    })
  }

  function onBlur({ target }: any) {
    if (
      ['Email', 'Fname', 'Lname', 'Phone', 'Password', 'ConfirmPassword'].includes(target.name) &&
      !target.value
    ) {
      setRegistrationState({
        ...registrationState,
        errors: { ...registrationState.errors, [target.name]: '*Field Cannot be Empty' }
      })
    } else {
      if (target.name === 'Phone') {
        if (target.value.length === 10) {
          resetError(target)
          doesPhoneExists(target.value)
        } else {
          setRegistrationState({
            ...registrationState,
            errors: {
              ...registrationState.errors,
              [target.name]: 'Phone number must be of 10 digit'
            }
          })
        }
      }
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
      if (target.name === 'Password') {
        if (target.value.length > 7) {
          resetError(target)
        } else {
          setRegistrationState({
            ...registrationState,
            errors: {
              ...registrationState.errors,
              [target.name]: 'Required Min. 8 characters'
            }
          })
        }
      }
      if (target.name === 'ConfirmPassword') {
        if (target.value === registrationState.values['Password']) {
          resetError(target)
        } else {
          setRegistrationState({
            ...registrationState,
            errors: {
              ...registrationState.errors,
              [target.name]: 'Required Min. 8 characters'
            }
          })
        }
      }
    }
  }

  const isSubmitEnabled =
    registrationState.values.Fname &&
    registrationState.values.Lname &&
    registrationState.values.Phone &&
    registrationState.values.Email &&
    registrationState.values.Password &&
    registrationState.values.ConfirmPassword === registrationState.values.Password &&
    registrationState.values.Password.length > 7 &&
    registrationState.values.Phone.length === 10

  return (
    <RegisterWrapper column>
      {/* <Label m={10} variant="h4" style={{ textAlign: 'center' }}>
        REGISTER
      </Label> */}
      <div style={{ textAlign: 'center', margin: '10px' }}>
        <h4>REGISTER</h4>
      </div>
      <FormInput
        label="Enter Your First Name*"
        type="text"
        placeholder="First Name"
        name="Fname"
        onChange={onchange}
        onBlur={onBlur}
        value={registrationState.values['Fname']}
        fieldErrors={registrationState.errors}
      />
      <FormInput
        label="Enter Your Last Name*"
        type="text"
        placeholder="Last Name"
        name="Lname"
        onChange={onchange}
        onBlur={onBlur}
        value={registrationState.values['Lname']}
        fieldErrors={registrationState.errors}
      />
      <FormInput
        label="Enter Your Phone Number*"
        type="number"
        placeholder="Phone Number"
        isLoading={formLoading === 'Phone'}
        name="Phone"
        onChange={onchange}
        onBlur={onBlur}
        value={registrationState.values['Phone']}
        fieldErrors={registrationState.errors}
      />
      {registrationState.values?.Phone?.length === 10 ? (
        <FormInput
          label="Submit OTP*"
          type="number"
          placeholder="OTP"
          name="OTP"
          isLoading={formLoading === 'OTP'}
          onChange={onchange}
          onBlur={onBlur}
          value={registrationState.values['OTP']}
          fieldErrors={registrationState.errors}
        />
      ) : null}
      {otpStatus ? (
        <>
          <FormInput
            label="Enter Your Email*"
            type="email"
            placeholder="Email"
            name="Email"
            isLoading={formLoading === 'Email'}
            onChange={onchange}
            onBlur={onBlur}
            value={registrationState.values['Email']}
            fieldErrors={registrationState.errors}
          />
          <FormInput
            label="Enter Your Password*"
            type="password"
            placeholder="Password"
            name="Password"
            onChange={onchange}
            onBlur={onBlur}
            value={registrationState.values['Password']}
            fieldErrors={registrationState.errors}
          />
          <FormInput
            label="Confirm Your Password*"
            type="password"
            placeholder="Password"
            name="ConfirmPassword"
            onChange={onchange}
            onBlur={onBlur}
            value={registrationState.values['ConfirmPassword']}
            fieldErrors={registrationState.errors}
          />
          <AuthFormButton
            variant="primary"
            style={{ marginTop: 10 }}
            disabled={!isSubmitEnabled}
            onClick={() => {
              customerRegistration()
            }}
          >
            Register
          </AuthFormButton>
        </>
      ) : null}
      <AuthFormButton variant="secondary" style={{ marginTop: 10 }} onClick={resetRegistrationForm}>
        Reset
      </AuthFormButton>
      <Link to="/login" style={{ margin: '10px auto' }}>
        Login
      </Link>
    </RegisterWrapper>
  )
}

export default RegisterForm
