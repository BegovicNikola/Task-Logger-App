import React, { useEffect } from 'react'
import SearchBar from './components/layout/SearchBar'
import AddBtn from './components/layout/AddBtn'
import Tasks from './components/tasks/Tasks'
import AddTaskModal from './components/modals/AddTaskModal'
import EditTaskModal from './components/modals/EditTaskModal'
import AddSupportModal from './components/modals/AddSupportModal'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit()
  })
  return (
    <div className="App">
      <SearchBar />
      <div className="container">
        <Tasks />
      </div>
      <AddTaskModal />
      <EditTaskModal />
      <AddSupportModal />
      <AddBtn />
    </div>
  )
}

export default App
