import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/index'
import './styles/index.less'

function App() {
  return (
    <Router>
      <Routes/>
    </Router>
  )
}

export default App
