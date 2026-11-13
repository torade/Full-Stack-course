function GoalProgress({ goals }) {
  const completedGoals = goals.filter((goal) => goal.completed).length
  const progress = (completedGoals / goals.length) * 100

  return (
    <section className="goal-progress">
      <h3>Progress</h3>
      <p>
        {completedGoals} of {goals.length} tasks completed
      </p>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </section>
  )
}

export default GoalProgress
