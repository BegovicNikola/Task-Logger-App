import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTask } from '../../store/actions/taskActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTaskModal = ({ addTask }) => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [support, setSupport] = useState('')

  const onSubmit = () => {
    if (message === '' || support === '') {
      M.toast({ html: 'Please enter a message and support' })
    } else {
      const newTask = {
        message,
        attention,
        support,
        date: new Date()
      }

      addTask(newTask)

      M.toast({ html: `Log added by ${support}` })

      setMessage('')
      setSupport('')
      setAttention(false)
    }
  }

  return (
    <div id="add-task-modal" className="modal">
      <div className="modal-content">
        <h4>Add new task</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Task Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="support"
              className="browser-default"
              value={support}
              onChange={e => setSupport(e.target.value)}
            >
              <option value="" disabled>
                Select Support
              </option>
              <option value="John Doe">John Doe</option>
              <option value="John Doe">John Doe</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue btn"
        >
          Submit
        </a>
      </div>
    </div>
  )
}

AddTaskModal.propTypes = {
  addTask: PropTypes.func.isRequired
}

export default connect(null, { addTask })(AddTaskModal)
