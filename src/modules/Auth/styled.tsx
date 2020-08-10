import { styled, Flex, Button } from '@icstark/ui'

const CommonAuthWrapper = styled(Flex)`
  box-sizing: border-box;
  background: #fff;
  padding: 5px 50px 35px;
  border: 1px solid #727272;
  border-radius: 5px;
  margin-top: 5vh;
  margin-bottom: 5vh;
`

export const RegisterWrapper = styled(CommonAuthWrapper)``
export const LoginWrapper = styled(CommonAuthWrapper)``

export const AuthFormButton: any = styled(Button)`
  justify-content: center;
  width: 100%;
`
