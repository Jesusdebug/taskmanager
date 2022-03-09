import React from 'react'

const Todo = (prosp) => {
  const { todo, todoDelete, todoToogleComplete, setTodoEdit } = prosp
  return (
    <div>
      <h2 className="text-right">Soy la lista de tareas </h2>
      <div className="card">
        <div className="card-body">
          <div>
            <h3 className="card-tittle text-right">{todo.title}</h3>
            <button
              className="btn btn-sm btn-success ml-2"
              onClick={() => todoToogleComplete(todo.id)}
            >
              {todo.complete ? 'Terminado' : 'Terminar'}
            </button>
            <p className="card-text text-right">{todo.descripction}</p>
            <div className="d-flex justify-content-end">
              <button
                onClick={() => setTodoEdit(todo)}
                className="btn btn-sm btn-primary mr-3"
              >
                Editar
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => todoDelete(todo.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
