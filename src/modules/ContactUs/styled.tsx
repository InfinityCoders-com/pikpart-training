import { styled, Input, Button, Flex } from '@icstark/ui'

export const MInput = styled(Input)`
  height: 60px;
  border-radius: 18px;
  font-size: 18px;
  font-weight: 600;
  padding: 20px 40px 0;
  background: #fff;
`
export const MBtn = styled(Button)`
  height: 60px;
  border-radius: 18px;
  font-size: 18px;
  font-weight: 600;
  padding: 20px;
`
export const MTextArea = styled(Input)`
  border-radius: 18px;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 0;
  padding: 40px;
`
export const ContactUsContainer = styled(Flex)`
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 40px auto;
  @media (max-width: 540px) {
    flex-wrap: wrap;
  }
`
export const ContactInfo = styled(Flex)`
  flex-direction: column;
  width: 50%;
  margin-bottom: 10px;
  @media (max-width: 540px) {
    width: 100%;
  }
`
