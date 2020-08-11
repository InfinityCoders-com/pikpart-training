import { styled, Flex } from '@icstark/ui'

// export const TrustBrands = styled.img`
//   // height: 80px;
//   width: auto;
//   margin: 10px 20px;
// `
export const TrustedContainer = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  margin: 25px 0px;
  box-shadow: rgb(204, 204, 204) 0 0 2px;
  border-radius: 5px;
  padding: 10px;
  height: 150px;
  @media (max-width: 540px) {
    justify-content: center;
    flex-direction: column;
  }
`
export const TrustedHeading = styled.div`
  padding-top: 7px;
  width: 15%;
  font-weight: 500;
  color: #676767;
  @media (max-width: 540px) {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
`
export const TrustBrandContainer = styled(Flex)`
  width: 80%;
  overflow: auto;
  > div {
    min-width: 13vw;
  }
  @media (max-width: 540px) {
    width: 100%;
    > div {
      min-width: 40vw;
    }
  }
  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(100, 100, 100, 0.3);
    border-radius: 3px;
  }
`
export const RecruitContainer = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  margin: 25px 0px;
  box-shadow: rgb(204, 204, 204) 0 0 2px;
  border-radius: 5px;
  padding: 10px;
  @media (max-width: 540px) {
    justify-content: center;
    flex-direction: column;
  }
`
export const RecruitHeading = styled.div`
  width: 15%;
  font-weight: 600;
  color: #444;
  @media (max-width: 540px) {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
`

export const RecruitBody = styled(Flex)`
  width: 80%;
  overflow: auto;
  @media (max-width: 540px) {
    width: 100%;
  }
  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(100, 100, 100, 0.3);
    border-radius: 3px;
  }
`
export const CandidateHeading = styled.div`
  font-weight: 500;
  color: #676767;
  text-align: center;
  margin: 4vmax auto;
`
export const CandidateXp = styled.div`
  font-size: 14px;
  color: #4d4d4d;
  font-weight: 300;
  font-style: italic;
  text-align: justify;
`
export const CandidateName = styled(Flex)`
  margin: 0px 15px;
  font-size: 12px;
  color: #676767;
  font-weight: 600;
`
export const CandidateReactContainer = styled(Flex)`
  justify-content: space-between;
  align-item: center;
  margin: 25px 0px;
  // height: 155px;
  @media (max-width: 540px) {
    flex-direction: column;
  }
`
export const Candidatereact = styled(Flex)`
  flex-direction: column;
  width: 30%;
  height: auto;
  margin: 10px 0px;
  @media (max-width: 540px) {
    width: 100%;
  }
`
export const CandidateBody = styled(Flex)`
  width: 100%;
  overflow: auto;
  // @media (max-width: 540px) {
  //   width: 100%;
  // }
  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(100, 100, 100, 0.3);
    border-radius: 3px;
  }
`
