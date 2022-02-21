import Swal from 'sweetalert2'

import React from 'react'
import { useState } from 'react'
import { useFormulario } from '../hooks/useFormulario';

const Formulario = ( {agregarTodo}) => {

const inicialEstate = {
    todoName: '',
    todoDescripcion: '',
    todoEstado : 'Pendiente',
    todoChecked: false,

};


const [inputs, handelchange, reset ] = useFormulario (inicialEstate)
// const [todo,setTodo] = useState(inicialEstate);


 const {todoName,todoDescripcion,todoEstado,todoChecked} = inputs;

// const handelchange = (e) => {
//    const {name, value,checked, type }  = e.target
//    setTodo((old) => ({...old,
        
//       [name]: type==='checkbox'? checked : value
        

//           })) ;

// }

const handleSubmit = (e) => {
    e.preventDefault();
    if(!todoName.trim()){
      
      console.log("no hay datos")
      e.target[0].focus();
      Swal.fire({
        title: 'Error!',
        text: 'No hay datos en el Nombre',
        icon: 'error',
        confirmButtonText: 'Ok'
      })



      return;
    
      
    }

    if(!todoDescripcion.trim()){
      
      console.log("no hay datos")
      e.target[1].focus();
      Swal.fire({
        title: 'Error!',
        text: 'No hay datos en la descripcion',
        icon: 'error',
        confirmButtonText: 'Ok'
      })



      return;
    
      
    }

    //agregar tarea
    agregarTodo ({
      todoName: todoName
      ,todoDescripcion : todoDescripcion
      , todoEstado : todoEstado === 'Pendiente' ? false: true
      ,
      todoChecked : todoChecked
      ,
      id : Date.now()


    });
    reset();
   // setTodo(inicialEstate)
    
    Swal.fire({
      title: 'Exito!',
      text: 'Se Cargo la Tarea',
      icon: 'success',
    
    });
    

    //console.log(todo);

}


  return (
    <div>
        <h3>Agregar ToDo</h3>
        <form onSubmit={handleSubmit} >
        <input 
        type="text"
        name='todoName'
        className='form-Control mb-2'
        placeholder='Ingrese Todo'
        value= {todoName}
        onChange= {handelchange}

        />
        <br />
        <textarea name="todoDescripcion"
        name = "todoDescripcion"
        className='form-Control mb-2'
        placeholder='Ingrese Descripcion'
         cols="30" rows="10"
         value={todoDescripcion}
         onChange= {handelchange}

         ></textarea>
        <br />
        <select className='form-Control mb-2' name="todoEstado" 
        value= {todoEstado} 
        onChange = {handelchange}>

            <option value="Pendiente">Pendiente</option>
            <option value="Completo">Completo</option>
        </select>

        <div className="form-check">
        <input name='todoChecked' 
        className="form-check-input mb-2" 
        type="checkbox"
         value={todoChecked} 
         id="flexCheckDefault"
        onChange = {handelchange}

        />
        <label className="form-check-label"  htmlFor="flexCheckDefault">
        Dar Prioridad
        </label>
        </div>
        <button type='submit' className="btn btn-primary">Agregar</button>
        </form>
    </div>
  )
}

export default Formulario