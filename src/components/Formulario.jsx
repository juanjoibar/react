import React from 'react'
import { useState } from 'react'



const Formulario = () => {

    const [todo, setTod] = useState({
        todoName: '',
        todoDescripcion: '',
        todoEstado: 'Pendiente',
        todoCheck: false,
    })

    const [error, setError] = useState(false)

    const handleSubmit =  e =>{

        e.preventDefault();

        console.log(todo)
        const {todoName, todoDescripcion} = todo
        if(!todoName.trim() || !todoDescripcion.trim() ){
             setError(true)
             return;

        }else{
            setError(false);
            e.target.reset();

        }

    }

    const handleOnChange = (e) =>{
        console.log(e.target.value)
        console.log(e.target.name)
        console.log(e.target.type)
        const {name, value, checked,type} = e.target;
        // setTod(
        //    {

        //        ...todo, [e.target.name] : e.target.value,
                   
        //    } 

        // )

        setTod((old) => (
            
            {
            ...old,
            
                    [name] : type === "checkbox" ? checked :  value,
                   
           } )); 

    }
    const SaleError = () => (

        <div className="alert alert-danger"> Campos Obligatorios</div>
    );

  return (
        <>
        
        <div>Formulario Controlado</div>

            {
            error && <SaleError/>

            }
        <form  onSubmit = {handleSubmit}>
       <input 
       name = "todoName"
       type="text" 
       placeholder='Colocar Nombre'

       className='form-control mb-2'
       onChange={handleOnChange}
       value= {todo.todoName}
       
       />
       <textarea name="todoDescripcion"
        id="" 
        className='form-control mb-2'
        
        placeholder='Ingrese descripcion del ToDo'
        cols="30" rows="10"
        onChange={handleOnChange}
        value= {todo.todoDescripcion}

        />
        <select name="todoEstado" id=""
         onChange={handleOnChange}
        value= {todo.todoEstado}
        >
            <option value="Pendiente">Pendiente</option>
            <option value="Completada">Completada</option>
        </select>
        <br />

        <div className="form-check">
         <input 
         className="form-check-input" 
         type="checkbox" 
         name = "todoCheck"
         onChange={handleOnChange}
         value= {todo.todoCheck}

        />
        <label className="form-check-label"
         htmlFor="flexCheckDefault">
           Dar Prioridad
        </label>
        </div>


        <button className="btn btn-primary" type='submit'> Agregar</button>

      </form>


        </>
 
    )
}

export default Formulario