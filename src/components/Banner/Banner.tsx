import React from 'react'
import { styled, Flex, Span } from '@icstark/ui'
// import banner from '../../assets/banner.jpg'
import training from '../../assets/banner/training.jpg'
import job from '../../assets/banner/job.jpg'
import recruitment from '../../assets/banner/recruitment.jpg'
import { FaAngleLeft, FaAngleRight, FaPencilAlt } from 'react-icons/fa'

const banners = [{ pic: training }, { pic: job }, { pic: recruitment }]

// const BFlex = styled(Flex)`
//   width: 100%;
//   height: auto;
//   position: relative;
//   @media screen and (max-width: 500px) {
//     max-height: 250px;
//   }
// `

// const BImg = styled.img`
//   width: 100%;
//   height: auto;
// `
const TestimonialWraper = styled(Flex)`
  overflow: hidden;
  // margin-bottom: 50px;
  button {
    display: block;
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
  }
`
const TestimonialSlide = styled(Flex)`
  // width: 65vw;
  width: 100vw;
  float: left;
  flex-direction: row;
`
const LeftButton = styled.button`
  position: absolute;
  left: 2px;
  // left: 0px;
  top: 40%;
  z-index: 1;
  font-size: 40px;
  // padding-left: 10px;
  @media (max-width: 540px) {
    font-size: 20px;
  }
`
const RightButton = styled.button`
  position: absolute;
  left: 94vw;
  top: 40%;
  z-index: 1;
  font-size: 40px;
  // padding-right: 100px;
  @media (max-width: 540px) {
    font-size: 20px;
    left: 92vw;
  }
  @media (max-width: 768px) {
    left: 93vw;
  }
`

function Banner({ title, des }: any) {
  const [next, setNext] = React.useState(0)
  return (
    // <BFlex>
    //   <BImg src={job} />
    // </BFlex>
    <Flex justifyContentCenter alignItemsCenter>
      <TestimonialWraper justifyContentCenter width={[1]} style={{ position: 'relative' }}>
        <LeftButton onClick={(e) => next > 0 && setNext(next - 1)}>
          <FaAngleLeft />
        </LeftButton>
        <Flex
          style={{
            width: '100%',
            overflow: 'hidden'
          }}
        >
          {/* <Flex style={{ marginLeft: `-${next * 65}vw`, transition: '1s ease', width: 'auto' }}> */}
          <Flex
            style={{
              marginLeft: `-${next * 100}vw`,
              transition: '1s ease',
              width: 'auto'
            }}
          >
            {banners.map((content: any, i: number, data: any) => {
              return (
                <TestimonialSlide key={i}>
                  <img src={content.pic} alt="banner" style={{ width: '100%', height: 'auto' }} />
                </TestimonialSlide>
              )
            })}
          </Flex>
        </Flex>
        <RightButton onClick={(e) => next < Math.floor(banners.length - 1) && setNext(next + 1)}>
          <FaAngleRight />
        </RightButton>
      </TestimonialWraper>
    </Flex>
  )
}

export default Banner
