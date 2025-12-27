import './App.css'
import TodoHome from './components/TodoHome'
import { Provider } from './components/ui/provider'

function App() {
  return (
    <Provider>
      <h1>Todo app</h1>
      <TodoHome></TodoHome>
    </Provider>
  )
}

export default App
