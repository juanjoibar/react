import React, { Fragment ,useState } from 'react';


const Lista = () => {

 const [arrayNumer, setArray ] = useState ([1,2,3,4,5])

    return ( 
        <Fragment>
            <h2>Lista</h2>
                {
                    arrayNumer.map((item) => 
                        <p> item: {item}</p>
                    

                    )
                }

        </Fragment>
     );
}
 
export default Lista;
