import { ThemeProvider, Themes } from '@icstark/ui'
import React from 'react'
import './App.css'
import Home from './modules/Home/container/Home'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import AppLayout from './AppLayout'

function App() {
  return (
    <ThemeProvider theme={Themes['ant']}>
      <Router>
        <Switch>
          {/* <Home /> */}
          <AppLayout />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
