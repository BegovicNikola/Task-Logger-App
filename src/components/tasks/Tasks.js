import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Preloader from '../layout/Preloader'
import TaskItem from '../tasks/TaskItem'
import { getTasks } from '../../store/actions/taskActions'

const Tasks = ({ task: { tasks, loading }, getTasks }) => {
  useEffect(() => {
    getTasks()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {loading || !tasks ? (
        <Preloader></Preloader>
      ) : (
        <ul className="collection with-header">
          <li className="collection-header">
            <h1 className="center">Items</h1>
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

Tasks.propTypes = {
  task: PropTypes.object.isRequired,
  getTasks: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  task: state.task
})

export default connect(mapStateToProps, { getTasks })(Tasks)
