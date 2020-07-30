import { ThemeProvider, Themes, Span, Link, Flex } from '@icstark/ui'
import React from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import AboutUs from './modules/AboutUs/'
import data from './data.json'
import CourseContent from './modules/CourseContent'
import ContactRegister from './modules/ContactRegister'
import Footer from './components/Footer'
import Feedback from './modules/Feedback/container/Feedback'
import Application from './modules/Application/container/Application'
import ContactUs from './modules/ContactUs/container/ContactUs'

function App() {
  return (
    <ThemeProvider theme={Themes['ant']}>
      <Header />
      <Banner />
      <AboutUs data={data.aboutUs} />
      <CourseContent data={data.courseContent} />
      <Application />
      <Feedback />
      {/* <ContactRegister courses={data.courses} traningLocations={data.traningLocations} /> */}
      <ContactUs />
      <Footer />
    </ThemeProvider>
  )
}

export default App
