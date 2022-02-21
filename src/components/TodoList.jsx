import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Formulario2 from './Formulario2'
import Todo from './Todo'


const TodoList = () => {

const [todos, setTodos] = useState([]);
useEffect (()=>{
if(localStorage.getItem('todos')){
  setTodos(JSON.parse(localStorage.getItem('todos')))
}

},[]);

useEffect(()=> {
  console.log('hola');
  localStorage.setItem("todos", JSON.stringify(todos));

},[todos])

const agregarTodo = (todo) => {

  console.log(todo)
  setTodos( (old) => [...old, todo]);


};
const eliminarTodo =  (id) =>{

  console.log(id)
  setTodos ((old)=> 
    old.filter(item => item.id !== id )
  )
}
const modificarTodo = (id) =>{

  const editartodo =  todos.map((item) => item.id === id?
  {
    ...item, todoEstado : !item.todoEstado 
  }: item );
  setTodos(editartodo);
  


}


  return (
    <>
        <Formulario2 agregarTodo = {agregarTodo} />
        
        
        <h2>TodoList</h2>
        <ul className='list-group list-group-numbered'>
        
        { todos.map((item)=> (
            <Todo key={item.id} todo = {item} eliminarTodo = {eliminarTodo} modificarTodo = {modificarTodo} />
        ))}

        </ul>

     </>
  );
}

export default TodoList;