import { FaTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { deleteGoal, updateGoal } from '../features/goals/goalSlice'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className="goal">
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        <FaTimes />
      </button>
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.text}</h2>
      <p>Category: {goal.category}</p>
      <p>Priority: {goal.priority}</p>
      {goal.dueDate && (
        <p>Due date: {new Date(goal.dueDate).toLocaleDateString()}</p>
      )}
      <p>Status: {goal.completed ? 'Completed' : 'Active'}</p>
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
  )
}

export default GoalItem
