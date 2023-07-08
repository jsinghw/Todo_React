import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {

  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)){
      return
    }
    const newTodos = [todo, ...todos]

    setTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const removedTodoList = [...todos].filter((todo) => todo.id !== id)

    setTodos(removedTodoList)
  }

  const editTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    )
  }

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div className="pt-[15%]">
      <h1 className="dark:text-white text-6xl pb-10">Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} completeTodo={completeTodo}/>
    </div>
  )
}

export default TodoList