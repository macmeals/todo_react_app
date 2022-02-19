import React from "react"

export const AddTodos = (props) => {
  const { newTodo, changeValue, onAddTodo } = props
  return (
    <div>
      <input type="text" value={newTodo} onChange={changeValue} />
      <button onClick={onAddTodo}>登録</button>
    </div>
  )
}
