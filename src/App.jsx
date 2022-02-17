import logo from "./logo.svg"
import "./App.css"

// TodoTitleコンポーネントをImport
import { TodoApp } from "./component/TodoApp"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TodoApp />
    </div>
  )
}
export default App
