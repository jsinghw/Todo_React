import React, { useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai"
import { AiOutlineEdit } from "react-icons/ai"
import TodoForm from './TodoForm'

function Todo({todos, deleteTodo, editTodo, completeTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  })

  const submitUpdate = (value) => {
    editTodo(edit.id, value)
    setEdit({
      id: null,
      value: "",
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div
      key={index}
      className={
        todo.status
          ? "flex justify-start w-1/2 m-auto dark:bg-zinc-400 shadow-lg shadow-zinc-400/50 mt-2 rounded line-through"
          : "flex justify-start w-1/2 m-auto dark:bg-zinc-300 shadow-lg shadow-zinc-400/50 mt-2 rounded text-left"
      }
    >
      <input
        type="checkbox"
        className="mx-3 checked:accent-blue-500 w-3 cursor-pointer"
        onChange={() => completeTodo(todo.id)}
      />
      <div className="grow flex-1 break-words">
        {todo.text}
      </div>
      <div className="flex justify-center items-center cursor-pointer">
        {todo.status ? (
          <></>
        ) : (
          <AiOutlineEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="mr-3"
          />
        )}
        <AiOutlineDelete
          onClick={() => deleteTodo(todo.id)}
          className="mr-3 dark:text-red-700"
        />
      </div>
    </div>
  ))
}

export default Todo