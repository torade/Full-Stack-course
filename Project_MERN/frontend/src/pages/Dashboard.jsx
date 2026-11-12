import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import GoalProgress from '../components/GoalProgress'
import Spinner from '../components/Spinner'
import { getGoals } from '../features/goals/goalSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading } = useSelector((state) => state.goal)
  const [status, setStatus] = useState('All')
  const [category, setCategory] = useState('All')
  const [priority, setPriority] = useState('All')

  useEffect(() => {
    if (!user) {
      navigate('/login')
    } else {
      dispatch(getGoals())
    }
  }, [user, navigate, dispatch])

  if (isLoading && goals.length === 0) {
    return <Spinner />
  }

  const filteredGoals = goals.filter((goal) => {
    if (status === 'Active' && goal.completed) {
      return false
    }

    if (status === 'Completed' && !goal.completed) {
      return false
    }

    if (category !== 'All' && goal.category !== category) {
      return false
    }

    if (priority !== 'All' && goal.priority !== priority) {
      return false
    }

    return true
  })

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>

      <GoalForm />

      {goals.length > 0 && <GoalProgress goals={goals} />}

      {goals.length > 0 && (
        <section className="goal-filters">
          <h3>Filter goals</h3>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="filter-category">Category</label>
            <select
              name="filter-category"
              id="filter-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="All">All</option>
              <option value="University">University</option>
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="filter-priority">Priority</label>
            <select
              name="filter-priority"
              id="filter-priority"
              value={priority}
              onChange={(event) => setPriority(event.target.value)}
            >
              <option value="All">All</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </section>
      )}

      <section className="content">
        {filteredGoals.length > 0 ? (
          <div className="goals">
            {filteredGoals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : goals.length > 0 ? (
          <h3>No goals match these filters</h3>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
