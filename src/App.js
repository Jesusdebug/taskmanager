import React, { useEffect, useState } from 'react'
import TodoForms from './Components/TodoForms'
import TodoList from './Components/TodoList'
const initalTodos = [
  {
    id: 1,
    title: 'Todo1',
    descripction: 'Desde Todo 1',
    Complete: false,
  },
  {
    id: 2,
    title: 'Todo2',
    descripction: 'Desde Todo 2',
    Complete: true,
  },
]
const todosLocalStorage = JSON.parse(localStorage.getItem('todo'))
const App = () => {
  const [todos, setTodo] = useState(todosLocalStorage || initalTodos)
  const [todoEdit, setTodoEdit] = useState(null)
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos))
  }, [todos])

  const todoDelete = (todoId) => {
    if (todoEdit && todoId === todoEdit.id) {
      setTodoEdit(null)
    }
    const changuetodo = todos.filter((t) => t.id !== todoId)
    setTodo(changuetodo)
  }
  const todoToogleComplete = (todoId) => {
    // const changeTodos = todos.map((t) => {
    //   const todoEdit = {
    //     ...t,
    //     complete: !t.complete,
    //   }
    //   if (t.id === todoId) {
    //     return todoEdit
    //   } else {
    //     return t
    //   }
    // })
    const changeTodos = todos.map((t) =>
      t.id === todoId ? { ...t, complete: !t.complete } : t,
    )
    setTodo(changeTodos)
  }
  const todoAdd = (todo) => {
    const newTodo = {
      id: Date.now(),
      ...todo,
      complete: false,
    }
    const changedTodos = [...todos, newTodo]
    setTodo(changedTodos)
  }
  const todoUpdate = (todoEdit) => {
    const changueTodos = todos.map((t) => (t.id === todoEdit.id ? todoEdit : t))
    setTodo(changueTodos)
  }
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList
            todos={todos}
            todoDelete={todoDelete}
            todoToogleComplete={todoToogleComplete}
            setTodoEdit={setTodoEdit}
          />
        </div>
        <div className="col-4">
          <TodoForms
            todoAdd={todoAdd}
            todoEdit={todoEdit}
            todoUpdate={todoUpdate}
            setTodoEdit={setTodoEdit}
          />
        </div>
      </div>
    </div>
  )
}

export default App
