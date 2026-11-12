import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

function GoalForm() {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('University')
  const [priority, setPriority] = useState('Medium')
  const [dueDate, setDueDate] = useState('')
  const [isFormVisible, setIsFormVisible] = useState(false)
  const dispatch = useDispatch()

  const resetForm = () => {
    setText('')
    setCategory('University')
    setPriority('Medium')
    setDueDate('')
  }

  const onSubmit = (event) => {
    event.preventDefault()

    dispatch(createGoal({ text, category, priority, dueDate }))
    resetForm()
    setIsFormVisible(false)
  }

  return (
    <section className="form">
      {!isFormVisible ? (
        <button
          className="btn add-task-button"
          type="button"
          onClick={() => setIsFormVisible(true)}
        >
          Add Task
        </button>
      ) : (
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="text">Task</label>
            <input
              type="text"
              name="text"
              id="text"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="University">University</option>
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              name="priority"
              id="priority"
              value={priority}
              onChange={(event) => setPriority(event.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="dueDate">Due date (optional)</label>
            <input
              type="date"
              lang="fi-FI"
              name="dueDate"
              id="dueDate"
              value={dueDate}
              onClick={(event) => event.currentTarget.showPicker?.()}
              onChange={(event) => setDueDate(event.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Save Task
            </button>
            <button
              className="btn btn-reverse btn-block"
              type="button"
              onClick={() => {
                resetForm()
                setIsFormVisible(false)
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </section>
  )
}

export default GoalForm
