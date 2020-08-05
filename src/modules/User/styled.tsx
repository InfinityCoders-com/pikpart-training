import { Flex, styled } from '@icstark/ui'

export const UserProfile = styled(Flex)`
  align-items: flex-start;
  @media (max-width: 786px) {
    align-items: stretch;
    flex-direction: column;
  }
`
export const Card = styled(Flex)`
  padding: 2vmax;
  border-radius: 10px;
  box-shadow: rgb(204, 204, 204) 0 0 10px;
`

export const Profile = styled(Card)`
  //   position: sticky;
  //   top: 15px;
  width: 100%;
  flex-direction: column;
  @media (max-width: 786px) {
    flex-direction: row;
  }
`
export const Details = styled(Flex)`
  flex-grow: 1;
  text-align: center;
  flex-direction: column;
  @media (max-width: 786px) {
    text-align: left;
    margin-left: 3vw;
  }
`
export const Section = styled.section`
  width: 100%;
  position: relative;
  box-sizing: border-box;
`

export const SubSection = styled.div`
  margin: 0 auto;
  transition: 0.6s linear;
  @media (min-width: 1441px) {
    transition: 0.6s linear;
    width: 70%;
  }
  @media (max-width: 1440px) {
    transition: 0.6s linear;
    // width: 80%;
    width: 90%;
  }
  @media (max-width: 1200px) {
    transition: 0.6s linear;
    width: 85%;
  }
  @media (max-width: 786px) {
    transition: 0.6s linear;
    width: 90%;
  }
  @media (max-width: 540px) {
    transition: 0.6s linear;
    width: 95%;
  }
`
export const UserCourse = styled(Card)`
  border-radius: 10px;
  box-shadow: rgb(204, 204, 204) 0 0 16px;
`
