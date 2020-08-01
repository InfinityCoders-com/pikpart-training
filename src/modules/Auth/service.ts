import { get } from '@icstark/utils'
import { config } from '../../config/config'

export async function submitOTP({ setLoading, onSuccess, onError, session, otp, source }: any) {
  setLoading('OTP')
  try {
    const response = await get(`${config.smsUrl}/SMS/VERIFY/${session}/${otp}`, source.token)
    onSuccess(response)
    setLoading('')
  } catch (e) {
    onError(e)
    setLoading('')
    console.error(e)
  }
}

export async function sendOTP({ setLoading, onSuccess, onError, phone, source }: any) {
  setLoading('Phone')
  try {
    const response = await get(`${config.smsUrl}/SMS/+91 ${phone}/AUTOGEN`, source.token)
    if (response.data.Status === 'Success') {
      onSuccess(response)
    } else if (response.data.Status === 'Error') {
      if (response.data.Details) {
        onError(response.data.Details)
      }
    }
    setLoading('')
  } catch (e) {
    onError(e)
    setLoading('')
    console.error(e)
  }
}
