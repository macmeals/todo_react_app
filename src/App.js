import logo from "./logo.svg"
import "./App.css"

// TodoTitleコンポーネントをImport
import { TodoTitle } from "./component/TodoTitle"
import { TodoRegister } from "./component/TodoRegister"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoTitle />
      </header>
      <TodoRegister />
    </div>
  )
}

export default App
