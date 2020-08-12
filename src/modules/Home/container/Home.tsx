import React from 'react'
import Banner from '../../../components/Banner/Banner'
import AboutUs from '../../../modules/AboutUs/'
import data from '../../../data.json'
// import CourseContent from '../../../modules/CourseContent'
// import ContactRegister from './modules/ContactRegister'
import Feedback from '../../../modules/Feedback/container/Feedback'
import Application from '../../../modules/Application/container/Application'
import Certificate from '../../Certificates/container/Certificate'
// import ContactUs from '../../../modules/ContactUs/container/ContactUs'
function Home() {
  return (
    <>
      <Banner />
      <div
        style={{
          background: 'linear-gradient(to bottom,#eee, #fff)',
          // background: 'linear-gradient(to bottom,#1890ff -100%, #fff 145%)',
          padding: '5px 0px'
        }}
      >
        <Certificate />
      </div>
      {/* <AboutUs data={data.aboutUs} /> */}
      {/* <CourseContent data={data.courseContent} /> */}
      <div
        style={{
          background: 'linear-gradient(to bottom,#fff, #eee)',
          // background: 'linear-gradient(to bottom,#fff -30%, #1890ff 128%)',
          padding: '3px 0px'
        }}
      >
        <AboutUs />
      </div>
      <div
        style={{
          background: 'linear-gradient(to bottom,#eee, #fff)',
          // background: 'linear-gradient(to bottom,#fff -30%, #1890ff 128%)',
          padding: '3px 0px'
        }}
      >
        <Application />
      </div>
      <div
        style={{
          background: 'linear-gradient(to bottom,#fff, #eee)',
          // background: 'linear-gradient(to bottom,#1890ff -18%, #fff 95%)',
          padding: '5px 0px'
        }}
      >
        <Feedback />
      </div>
      {/* <ContactRegister courses={data.courses} traningLocations={data.traningLocations} /> */}
      {/* <ContactUs /> */}
    </>
  )
}
export default Home
