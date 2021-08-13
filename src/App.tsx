import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/index'
import './styles/index.less'

import { Provider } from 'react-redux'
import { store } from 'store'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes/>
      </Router>
    </Provider>
  )
}

export default App
