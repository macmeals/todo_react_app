import { useState } from "react"

export const TodoApp = () => {
  //  初期値valueを空にセット、状態を格納する変数setValueをセット
  const [todoTask, setTodoTask] = useState("")

  // 初期値incompTodosObにオブジェクト型の空配列をセット、状態をsetIncompTodosObに格納する
  const [IncompTodos, setIncompTodos] = useState([])

  // テキストボックスで入力した値を保存する
  const changeValue = (e) => setTodoTask(e.target.value)

  // 未完了のtodoリストを追加する関数onAddTodoを定義
  const onAddTodo = () => {
    if (todoTask === "") return
    // newTodoObに,inputに入力された値データ（オブジェクト型）を追加した配列を代入
    // ここではtodoにインプットされた文字列と、未完了を表現するため、compFlag:falseを追加
    const newTodoOb = [
      ...IncompTodos,
      { id: IncompTodos.length, todo: todoTask, compFlag: false },
    ]
    setIncompTodos(newTodoOb) // setIncompTodosにnewTodosの状態を登録
    setTodoTask("") // setTodoTaskに空の状態を登録
    console.log(IncompTodos)
  }

  // todoリストを削除する関数onDeleteTodoを定義
  const onDeleteTodo = (index) => {
    const delTodos = [...IncompTodos] // 削除する対象のデータ配列を関数deleteTodoに格納
    delTodos.splice(index, 1) // index番号から１番目の要素を削除
    setIncompTodos(delTodos) // setIncompTodosに状態を保存
  }

  // todoリストを完了（compFlagをTrueにする）関数onCompTodoを定義
  const onCompTodo = (index) => {
    const CompTodos = [...IncompTodos] // 完了する対象のデータ配列を関数CompTodosTodoに格納
    CompTodos[index].compFlag = true //対象のデータ配列のCompFlagをTrueにする
    setIncompTodos(CompTodos) // setIncompTodosに状態を保存
  }

  return (
    <div>
      <h1>Todoアプリ</h1>
      <h2>Todo登録</h2>
      <input type="text" value={todoTask} onChange={changeValue} />
      <button onClick={onAddTodo}>登録</button>
      <h2>TodoList</h2>
      <ul>
        {IncompTodos.map((todoElm, index) => {
          return (
            <li key={todoElm.id}>
              <p className={todoElm.compFlag ? "yokosen" : ""}>
                {todoElm.todo}
              </p>
              <button onClick={() => onCompTodo(index)}>完了</button>
              <button onClick={() => onDeleteTodo(index)}>削除</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
