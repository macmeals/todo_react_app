import { useState } from "react"

export const TodoApp = () => {
  //  初期値valueを空にセット、状態を格納する変数setValueをセット
  const [todoTask, setTodoTask] = useState("")

  // 初期値incompTodosに空配列をセット、状態をsetIncompTodosに格納する
  const [IncompTodos, setIncompTodos] = useState([])

  // テキストボックスで入力した値を保存する
  const changeValue = (e) => setTodoTask(e.target.value)

  // 未完了のtodoリストを追加する関数onAddTodoを定義
  const onAddTodo = () => {
    if (todoTask === "") return
    const newTodos = [...IncompTodos, todoTask] // 入力されたテキスト（todoTask)を格納し、それらの配列をnewTodosに格納
    setIncompTodos(newTodos) // setIncompTodosにnewTodosの状態を登録
    setTodoTask("") // setTodoTaskにからの状態を登録
  }

  return (
    <div>
      <h1>Todoアプリ</h1>
      <h2>Todo登録</h2>
      <input type="text" value={todoTask} onChange={changeValue} />
      <button onClick={onAddTodo}>登録</button>
      <h2>TodoList</h2>
      <ul>
        {IncompTodos.map((todo) => {
          return (
            <li key={todo}>
              <p>{todo}</p>
              <button>完了</button>
              <button>削除</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
