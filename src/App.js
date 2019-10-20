import React, { useEffect } from 'react'
import SearchBar from './components/layout/SearchBar'
import Tasks from './components/tasks/Tasks'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit()
  })
  return (
    <div className='App'>
      <SearchBar></SearchBar>
      <div className='container'>
        <Tasks></Tasks>
      </div>
    </div>
  )
}

export default App
