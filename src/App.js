import logo from "./logo.svg";
import "./App.css";

// TodoTitleコンポーネントをImport
import { TodoTitle } from "./component/TodoTitle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoTitle />
      </header>
    </div>
  );
}

export default App;
