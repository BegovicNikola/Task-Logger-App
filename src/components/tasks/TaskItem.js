import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'

const TaskItem = ({ task }) => {
  return (
    <li className="collection-item">
      <div className="row">
        <div className="col s10">
          <div>
            <a
              href="#edit-task-modal"
              className={`modal-trigger ${
                task.attention ? 'red-text' : 'blue-text'
              }`}
            >
              {task.message}
            </a>
          </div>
          <div className="grey-text">
            <Moment format="DD.MM.YYYY">{task.date}</Moment>
          </div>
        </div>
        <div className="col s2">
          <a href="#!" className="right">
            <i className="material-icons">delete</i>
          </a>
        </div>
      </div>
    </li>
  )
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired
}

export default TaskItem
