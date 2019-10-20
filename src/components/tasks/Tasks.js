import React, { useState, useEffect } from 'react'
import TaskItem from '../tasks/TaskItem'

const Tasks = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getTasks()
  }, [])

  const getTasks = async () => {
    setLoading(true)
    const res = await fetch('/tasks')
    const data = await res.json()

    setTasks(data)
    setLoading(false)
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className='collection with-header'>
          <li className='collection-header'>
            <h1 className='center'>Items</h1>
          </li>
          {!loading && tasks.length === 0 ? (
            <li>No items</li>
          ) : (
            tasks.map(task => <TaskItem key={task.id} task={task}></TaskItem>)
          )}
        </ul>
      )}
    </div>
  )
}

export default Tasks
