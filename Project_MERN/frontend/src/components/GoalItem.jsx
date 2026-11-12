import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { deleteGoal, updateGoal } from '../features/goals/goalSlice'

const formatDate = (date) =>
  new Date(date).toLocaleDateString('fi-FI', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  })

function GoalItem({ goal }) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(goal.text)
  const [category, setCategory] = useState(goal.category)
  const [priority, setPriority] = useState(goal.priority)
  const [dueDate, setDueDate] = useState(
    goal.dueDate ? goal.dueDate.split('T')[0] : '',
  )

  const onSubmit = (event) => {
    event.preventDefault()

    dispatch(
      updateGoal({
        goalId: goal._id,
        goalData: { text, category, priority, dueDate },
      }),
    )
    setIsEditing(false)
  }

  const startEditing = () => {
    setText(goal.text)
    setCategory(goal.category)
    setPriority(goal.priority)
    setDueDate(goal.dueDate ? goal.dueDate.split('T')[0] : '')
    setIsEditing(true)
  }

  return (
    <div className="goal">
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        <FaTimes />
      </button>
      {isEditing ? (
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor={`${goal._id}-text`}>Goal</label>
            <input
              type="text"
              id={`${goal._id}-text`}
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor={`${goal._id}-category`}>Category</label>
            <select
              id={`${goal._id}-category`}
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
            <label htmlFor={`${goal._id}-priority`}>Priority</label>
            <select
              id={`${goal._id}-priority`}
              value={priority}
              onChange={(event) => setPriority(event.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor={`${goal._id}-dueDate`}>Due date</label>
            <input
              type="date"
              lang="fi-FI"
              id={`${goal._id}-dueDate`}
              value={dueDate}
              onClick={(event) => event.currentTarget.showPicker?.()}
              onChange={(event) => setDueDate(event.target.value)}
            />
          </div>
          <div className="goal-actions">
            <button className="btn" type="submit">
              Save
            </button>
            <button
              className="btn btn-reverse"
              type="button"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <div>{formatDate(goal.createdAt)}</div>
          <h2>{goal.text}</h2>
          <p>Category: {goal.category}</p>
          <p>Priority: {goal.priority}</p>
          {goal.dueDate && (
            <p>Due date: {formatDate(goal.dueDate)}</p>
          )}
          <p>Status: {goal.completed ? 'Completed' : 'Active'}</p>
          <div className="goal-actions">
            <button className="btn btn-reverse" onClick={startEditing}>
              Edit
            </button>
            <button
              className="btn btn-reverse"
              onClick={() =>
                dispatch(
                  updateGoal({
                    goalId: goal._id,
                    goalData: { completed: !goal.completed },
                  }),
                )
              }
            >
              {goal.completed ? 'Mark active' : 'Complete'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default GoalItem
