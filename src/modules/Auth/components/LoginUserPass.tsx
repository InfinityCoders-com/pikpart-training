import { Label, Link } from '@icstark/ui'
import React from 'react'
import { FormInput } from '../../../components/Forms/Form'
import { AuthFormButton, LoginWrapper } from '../styled'
import { RoutesPath } from '../../../config/routes.config'
import { validateEmail } from '../../../utility/func'

function LoginUserPass({ setLoginForm, loading, loginForm, onSubmit }: any) {
  function resetError(target: any) {
    setLoginForm({
      ...loginForm,
      errors: { ...loginForm.errors, [target.name]: undefined }
    })
  }
  function onchange(target: any) {
    setLoginForm({
      ...loginForm,
      values: { ...loginForm.values, [target.name]: target.value }
    })
  }

  function onBlur({ target }: any) {
    if (['Email', 'Password'].includes(target.name) && !target.value) {
      setLoginForm({
        ...loginForm,
        errors: { ...loginForm.errors, [target.name]: 'Field Cannot be Empty' }
      })
    } else {
      if (target.name === 'Email') {
        if (validateEmail(target.value)) {
          resetError(target)
        } else {
          setLoginForm({
            ...loginForm,
            errors: {
              ...loginForm.errors,
              [target.name]: 'Invalid Email'
            }
          })
        }
      }
      if (target.name === 'Password') {
        if (target.value.length > 7) {
          resetError(target)
        } else {
          setLoginForm({
            ...loginForm,
            errors: {
              ...loginForm.errors,
              [target.name]: 'Invalid Password.'
            }
          })
        }
      }
    }
  }
  const isSubmitDisabled = !loginForm.errors.Email && !loginForm.errors.Password
  return (
    <LoginWrapper column>
      {/* <Label m={10} variant="h4" style={{ textAlign: 'center' }}>
        LOGIN
      </Label> */}
      <div style={{ textAlign: 'center', margin: '10px' }}>
        <h4>LOGIN</h4>
      </div>
      <FormInput
        label="Enter Your Email"
        type="email"
        placeholder="Enter Email"
        name="Email"
        onChange={onchange}
        onBlur={onBlur}
        value={loginForm.values['Email']}
        fieldErrors={loginForm.errors}
      />
      <FormInput
        label="Enter Your Password"
        type="password"
        placeholder="Enter Password"
        name="Password"
        onChange={onchange}
        onBlur={onBlur}
        value={loginForm.values['Password']}
        fieldErrors={loginForm.errors}
      />
      <AuthFormButton
        disabled={!isSubmitDisabled}
        isLoading={loading}
        variant="primary"
        style={{ marginTop: '10px' }}
        onClick={onSubmit}
      >
        Login
      </AuthFormButton>
      <Link to={RoutesPath.ForgotPassword} style={{ marginTop: 5 }}>
        Forgot Password ? Click Here
      </Link>
    </LoginWrapper>
  )
}

export default LoginUserPass
