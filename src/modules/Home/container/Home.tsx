import React from 'react'
import Banner from '../../../components/Banner/Banner'
import AboutUs from '../../../modules/AboutUs/'
import data from '../../../data.json'
import CourseContent from '../../../modules/CourseContent'
// import ContactRegister from './modules/ContactRegister'
import Feedback from '../../../modules/Feedback/container/Feedback'
import Application from '../../../modules/Application/container/Application'
import ContactUs from '../../../modules/ContactUs/container/ContactUs'
function Home() {
  return (
    <>
      <Banner />
      <AboutUs data={data.aboutUs} />
      <CourseContent data={data.courseContent} />
      <Application />
      <Feedback />
      {/* <ContactRegister courses={data.courses} traningLocations={data.traningLocations} /> */}
      <ContactUs />
    </>
  )
}
export default Home
