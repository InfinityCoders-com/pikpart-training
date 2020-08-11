import { Flex, styled } from '@icstark/ui'
import React from 'react'
import { FaAngleLeft, FaAngleRight, FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import job from '../../assets/banner/job.jpg'
import recruitment from '../../assets/banner/recruitment.jpg'
// import banner from '../../assets/banner.jpg'
import training from '../../assets/banner/training.jpg'

const banners = [{ pic: training }, { pic: job }, { pic: recruitment }]

const TestimonialWrapper = styled(Flex)`
  overflow: hidden;
  height: 50vh;
  button {
    display: block;
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
  }
`
const TestimonialSlide: any = styled(Flex)`
  width: 100vw;
  float: left;
  flex-direction: row;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-image: ${(props: any) => `url(${props.back})`};
`
const LeftButton = styled.button`
  position: absolute;
  // left: 2px;
  left: 1vw;
  top: 40%;
  z-index: 1;
  font-size: 30px;
  color: #727272;
  @media (max-width: 540px) {
    font-size: 20px;
  }
`
const RightButton = styled.button`
  position: absolute;
  left: 94vw;
  top: 40%;
  z-index: 1;
  font-size: 30px;
  color: #727272;
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
    <Flex justifyContentCenter alignItemsCenter>
      <TestimonialWrapper justifyContentCenter width={[1]} style={{ position: 'relative' }}>
        <LeftButton onClick={(e) => next > 0 && setNext(next - 1)}>
          <FaArrowCircleLeft />
        </LeftButton>
        <Flex
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden'
          }}
        >
          <Flex
            style={{
              marginLeft: `-${next * 100}vw`,
              transition: '1s ease',
              height: '100%',
              width: 'auto'
            }}
          >
            {banners.map((content: any, i: number, data: any) => {
              return <TestimonialSlide back={content.pic} key={i} />
            })}
          </Flex>
        </Flex>
        <RightButton onClick={(e) => next < Math.floor(banners.length - 1) && setNext(next + 1)}>
          <FaArrowCircleRight />
        </RightButton>
      </TestimonialWrapper>
    </Flex>
  )
}

export default Banner
