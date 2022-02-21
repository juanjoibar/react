import React, { useState } from 'react'

export const useFormulario = (initalState = {}) => {
  
const [inputs, setInputs] = useState(initalState)


const handelchange = (e) =>{

    const {name, value, checked,type} = e.target;


    setInputs((old) => (
        
        {
        ...old,
        
                [name] : type === "checkbox" ? checked :  value,
               
       } )); 

}  
    const reset = () => {
        setInputs(initalState);
    }

    return  [inputs, handelchange, reset];
}
