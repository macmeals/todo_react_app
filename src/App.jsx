import logo from "./logo.svg"
import "./App.css"

import { useState } from "react"
import { addTodos } from "./component/addTodo"

export const App = () => {
  //  初期値valueを空にセット、状態を格納する変数setValueをセット
  const [newTodo, setNewTodo] = useState("")

  // 初期値incompTodosにオブジェクト型の空配列をセット、状態をsetIncompleteTodosに格納する
  const [incompleteTodos, setIncompleteTodos] = useState([])

  // テキストボックスで入力した値を保存する
  const changeValue = (e) => setNewTodo(e.target.value)

  // 未完了のtodoリストを追加する関数onAddTodoを定義
  const onAddTodo = () => {
    if (newTodo === "") return
    // newTodosに,inputに入力された値データ（オブジェクト型）を追加した配列を代入
    // ここではtodoにインプットされた文字列と、未完了を表現するため、completeFlag:falseを追加
    const newTodos = [
      ...incompleteTodos,
      { id: incompleteTodos.length, todo: newTodo, completeFlag: false },
    ]
    setIncompleteTodos(newTodos) // setIncompleteTodosにnewTodosの状態を登録
    setNewTodo("") // setNewTodoに空の状態を登録
  }

  // todoリストを削除する関数onDeleteTodoを定義
  const onDeleteTodo = (index) => {
    const deleteTodos = [...incompleteTodos] // 削除する対象のデータ配列を関数deleteTodoに格納
    deleteTodos.splice(index, 1) // index番号から１番目の要素を削除
    setIncompleteTodos(deleteTodos) // setIncompleteTodosに状態を保存
  }

  // todoリストを完了（completeFlagをTrueにする）関数leteを定義
  const onCompleteTodo = (index) => {
    const CompleteTodos = [...incompleteTodos] // 完了する対象のデータ配列を関数CompTodosTodoに格納
    CompleteTodos[index].completeFlag = true //対象のデータ配列のCompleteFlagをTrueにする
    setIncompleteTodos(CompleteTodos) // setIncompleteTodosに状態を保存
  }

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <h1>Todoアプリ</h1>
      <h2>Todo登録</h2>
      {/* <input type="text" value={newTodo} onChange={changeValue} />
      <button onClick={onAddTodo}>登録</button> */}
      <addTodos
        newTodo={newTodo}
        changeValue={changeValue}
        onAddTodo={onAddTodo}
      />
      <h2>TodoList</h2>
      <ul>
        {incompleteTodos.map((todos, index) => {
          return (
            <li key={todos.id}>
              <p className={todos.completeFlag ? "yokosen" : ""}>
                {todos.todo}
              </p>
              <button onClick={() => onCompleteTodo(index)}>完了</button>
              <button onClick={() => onDeleteTodo(index)}>削除</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
