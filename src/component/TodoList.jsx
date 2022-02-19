import React from "react"

export const TodoLists = (props) => {
  const { todoItems, onCompleteTodo, onDeleteTodo } = props
  return (
    <ul>
      {todoItems.map((todos, index) => {
        return (
          <li key={todos.id}>
            <p className={todos.completeFlag ? "yokosen" : ""}>{todos.todo}</p>
            <button onClick={() => onCompleteTodo(index)}>完了</button>
            <button onClick={() => onDeleteTodo(index)}>削除</button>
          </li>
        )
      })}
    </ul>
  )
}
