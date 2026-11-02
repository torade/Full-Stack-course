import './App.css'
import Header from './components/Header'

function App() {
  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={() => console.log('Add button clicked')} />
    </div>
  )
}

export default App
