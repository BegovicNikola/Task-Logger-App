import React from 'react'
import PropTypes from 'prop-types'

const TaskItem = ({ task }) => {
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-task-modal'
          className={`modal-trigger ${
            task.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {task.message}
        </a>
      </div>
    </li>
  )
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired
}

export default TaskItem
