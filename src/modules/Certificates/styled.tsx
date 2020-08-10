import { styled, Flex } from '@icstark/ui'

export const CertificateName = styled.div`
  font-weight: 600;
  color: #676767;
  margin: 35px auto 20px;
  font-size: 16px;
`

export const CertificateDesc = styled.div`
  color: #676767;
  margin: 0 auto;
  font-size: 12px;
  width: 80%;
  text-align: justify;
`
export const CertificateContainer = styled(Flex)`
  justify-content: space-aroud;
  align-items: center;
  width: 90%;
  margin: 4vmax auto;
  @media (max-width: 540px) {
    justify-content: center;
    flex-direction: column;
  }
`
