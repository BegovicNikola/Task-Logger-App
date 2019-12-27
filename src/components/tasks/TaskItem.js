import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteTask } from '../../store/actions/taskActions'

import M from 'materialize-css/dist/js/materialize.min.js'

const TaskItem = ({ task, deleteTask }) => {
  const { id, attention, message, date } = task

  const onDelete = () => {
    deleteTask(id)
    M.toast({ html: 'Task deleted' })
  }

  return (
    <li className="collection-item">
      <div className="row">
        <div className="col s10">
          <div>
            <a
              href="#edit-task-modal"
              className={`modal-trigger ${
                attention ? 'red-text' : 'blue-text'
              }`}
            >
              {message}
            </a>
          </div>
          <div className="grey-text">
            <Moment format="DD.MM.YYYY">{date}</Moment>
          </div>
        </div>
        <div className="col s2">
          <a href="#!" onClick={onDelete} className="right">
            <i className="material-icons">delete</i>
          </a>
        </div>
      </div>
    </li>
  )
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default connect(null, { deleteTask })(TaskItem)
