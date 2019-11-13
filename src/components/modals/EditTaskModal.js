import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const EditTaskModal = () => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [support, setSupport] = useState('')

  const submit = () => {
    if (message === '' || support === '') {
      M.toast({ html: 'Please enter a message and support' })
    } else {
      console.log(message, support, attention)
      setMessage('')
      setSupport('')
      setAttention(false)
    }
  }

  return (
    <div id="edit-task-modal" className="modal">
      <div className="modal-content">
        <h4>Edit task</h4>
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
          onClick={submit}
          className="modal-close waves-effect blue btn"
        >
          Submit
        </a>
      </div>
    </div>
  )
}

export default EditTaskModal
