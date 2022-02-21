import React from 'react'


const Todo = ({  todo, eliminarTodo, modificarTodo}) => {
    
    const {id,todoName, todoDescripcion, todoEstado, todoChecked} = todo

  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">{todoName} ({todoEstado ? 'Finalizado': 'Pendiente'})</div>
      <p>{todoDescripcion}</p>
    </div>
    <div>
        <button className="btn btn-danger me-2" onClick= { () => eliminarTodo (id)} >Eliminar</button>
        <button className="btn btn-warning " onClick={ () => modificarTodo(id)}>Modificar</button>
    </div>
    <span className="badge bg-primary rounded-pill">{todoChecked && 'Prioritario' }
    </span>
  </li>



  )
}

export default Todo