import React, { useRef } from 'react'


const FormularioNoControlado = () => {
    
    const formulario = useRef(null)
    const handleSubmit =  e =>{
        e.preventDefault();
        //console.log("procesando...")
        const datos = new FormData(formulario.current)
        console.log(...datos.entries());
        const objetoDatos = Object.fromEntries([...datos.entries()])
        console.log(objetoDatos)
        const {todoDescripcion,todoEstado, TodoNombre} = objetoDatos;
        if(todoDescripcion.trim()===""){
            console.log("noo")
            return
        }
        console.log("paso validacion")


    }

    return (
      <>
      <div>No Controlado</div>
      <form ref={formulario} onSubmit = {handleSubmit}>
       <input type="text" 
       placeholder='Colocar Nombre'
       name='nombre'
       className='form-control mb-2'
       defaultValue="Tarea 1"
       />
       <textarea name="todoDescripcion"
        id="" 
        className='form-control mb-2'
        defaultValue="Tarea 1"
        placeholder='Ingrese descripcion del ToDo'
        cols="30" rows="10"/>
        <select name="" id="" defaultValue="Pendiente">
            <option value="Pendiente">Pendiente</option>
            <option value="Completada">Completada</option>
        </select>
        <button className="btn btn-primary">Agregar</button>

      </form>
      
      </>
  )
}

export default FormularioNoControlado