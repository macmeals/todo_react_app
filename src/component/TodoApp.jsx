import { useState } from "react"

export const TodoApp = () => {
  //  初期値valueを空にセット、状態を格納する変数setValueをセット
  const [todoTask, setTodoTask] = useState("")

  // 初期値incompTodosに空配列をセット、状態をsetIncompTodosに格納する
  const [IncompTodos, setIncompTodos] = useState([])

  // 初期値compTodosにfalseをセット、状態をsetcompTodosに格納する
  const [compTodos, setCompTodos] = useState(false)

  // テキストボックスで入力した値を保存する
  const changeValue = (e) => setTodoTask(e.target.value)

  // 未完了のtodoリストを追加する関数onAddTodoを定義
  const onAddTodo = () => {
    if (todoTask === "") return
    const newTodos = [...IncompTodos, todoTask] // 入力されたテキスト（todoTask)を格納し、それらの配列をnewTodosに格納
    setIncompTodos(newTodos) // setIncompTodosにnewTodosの状態を登録
    setTodoTask("") // setTodoTaskに空の状態を登録
  }

  // todoリストを削除する関数onDeleteTodoを定義
  const onDeleteTodo = (index) => {
    const deleteTodos = [...IncompTodos] // 削除する対象のデータ配列を関数deleteTodoに格納
    deleteTodos.splice(index, 1) // index番号から１番目の要素を削除
    setIncompTodos(deleteTodos)
  }

  // todoリストを完了すれば取り消し線を引く関数completeTodosを定義
  const completeTodos = () => {
    setCompTodos(!compTodos) // Trueの状態を設定
  }

  return (
    <div>
      <h1>Todoアプリ</h1>
      <h2>Todo登録</h2>
      <input type="text" value={todoTask} onChange={changeValue} />
      <button onClick={onAddTodo}>登録</button>
      <h2>TodoList</h2>
      <ul>
        {IncompTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <p className={compTodos ? "" : "yokosen"}>{todo}</p>
              <button onClick={completeTodos}>完了</button>
              <button onClick={() => onDeleteTodo(index)}>削除</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
// key={todo}
