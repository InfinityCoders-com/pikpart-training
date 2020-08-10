console.log('Environment::', process.env.NODE_ENV, 'APP Env::', process.env.REACT_APP_ENV)

const production = {
  baseUrl: 'https://pikpart.herokuapp.com/api'
}

const development = {
  baseUrl: 'https://pikpart.herokuapp.com/api'
}

const local = {
  baseUrl: 'https://localhost:4000/api'
}

const env = production
// process.env.REACT_APP_ENV === 'production'
//   ? production
//   : process.env.REACT_APP_ENV === 'development'
//   ? development
//   : local

export const config = {
  ...env,
  smsBaseUrl: 'https://2factor.in/API/V1',
  smsKey: '/53653e94-a6ff-11ea-9fa5-0200cd936042',
  smsUrl: 'https://2factor.in/API/V1/53653e94-a6ff-11ea-9fa5-0200cd936042'
}
