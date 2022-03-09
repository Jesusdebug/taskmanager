import React from 'react'
import Todo from './Todo'
const TodoList = ({ todos, todoDelete, todoToogleComplete, setTodoEdit }) => {
  return (
    <div className="text-right">
      {todos.length === 0 ? (
        <div className="alert alert-primary">
          No hay tareas,por favor agregar una nueva tarea{' '}
        </div>
      ) : (
        todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            todoDelete={todoDelete}
            todoToogleComplete={todoToogleComplete}
            setTodoEdit={setTodoEdit}
          />
        ))
      )}
    </div>
  )
}

export default TodoList
