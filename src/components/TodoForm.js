import React, { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from "uuid"

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "")

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })


  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({
      id: uuidv4(),
      text: input,
      status: false,
    })
    setInput('')
  }

  return (
    <form className="todoForm pb-10" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Edit your item"
            value={input}
            name="text"
            className="outline-none rounded w-[500px] bg-gray-600 hover:bg-gray-600 focus:bg-gray-500 dark:text-white shadow-lg shadow-gray-500/50 indent-5"
            autoComplete="off"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="rounded-md ml-5 px-5 dark:text-white bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/50">
            Edit
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="What's the plan?"
            value={input}
            name="text"
            className="outline-none rounded mb-3 w-[500px] bg-gray-600 hover:bg-gray-600 focus:bg-gray-500 dark:text-white shadow-lg shadow-gray-500/50 indent-5"
            autoComplete="off"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="rounded-md mb-3 ml-5 px-5 dark:text-white bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/50">
            Add
          </button>
        </>
      )}
    </form>
  )
}

export default TodoForm