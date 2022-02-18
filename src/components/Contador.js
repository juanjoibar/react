import React , {Fragment, useState} from 'react'

const Contador = () => {

    const [count, setcount] = useState(0);

    const aumentar = () => {
        console.log('me diste click')
        setcount (count +1)
    }
      return ( 
    <Fragment>

        <h3>Primer component {count}</h3>
        <button onClick={aumentar}>Contador</button>
    </Fragment>
        );
    }
 
export default Contador;



