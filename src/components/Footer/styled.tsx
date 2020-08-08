import { styled, Flex } from '@icstark/ui'

export const ContactUsDiv = styled.div`
  fontsize: 20px;
  color: ${(props: any) => props.theme.colors.primary};
  font-weight: 600;
  cursor: pointer;
  min-width: max-content;
`
export const FooterContainer = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  @media (max-width: 540px) {
    justify-content: center;
    flex-direction: column;
  }
`
