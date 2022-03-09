import React, { useEffect, useState } from 'react'
const initialForms = {
  title: '',
  descripction: '',
}
const TodoForms = ({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) => {
  const [formValues, setFormValues] = useState(initialForms)
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const { title, descripction } = formValues

  useEffect(() => {
    if (todoEdit) {
      setFormValues(todoEdit)
    } else {
      setFormValues(initialForms)
    }
  }, [todoEdit])

  const handleInputChange = (e) => {
    const changedFormsValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    }
    setFormValues(changedFormsValues)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() === '') {
      setError('Debes inglresar un  un titulo')
      return
    }
    if (descripction.trim() === '') {
      setError('Debes inglresar la descripcion')
      return
    }
    if (todoEdit) {
      todoUpdate(formValues)
      setSuccessMessage('Actializado correctamente')
    } else {
      todoAdd(formValues)
      setFormValues(initialForms)
      setSuccessMessage('Agregado con exito')
    }
    setTimeout(() => {
      setSuccessMessage(null)
    }, 200)
    setError(null)
  }
  return (
    <div>
      <h1>{todoEdit ? 'Editar Tarea' : 'Agregar Tarea'}</h1>
      {todoEdit && (
        <button
          onClick={() => setTodoEdit(null)}
          className="btn btn-sm btn-warning mt-2"
        >
          Cancelar
        </button>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          name="title"
          className="form-control"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Description"
          value={descripction}
          name="descripction"
          onChange={handleInputChange}
          className="form-control mt-2"
        />
        <button className="btn btn-primary btn-block mt-2">
          {todoEdit ? 'Editar' : 'Agregar'}
        </button>
      </form>
      {error && <div className="alert alert-danger">{error}</div>}
      {successMessage && (
        <div className="alert alert-success mt-2">{successMessage}</div>
      )}
    </div>
  )
}

export default TodoForms
