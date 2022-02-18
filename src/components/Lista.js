import React, { Fragment ,useState } from 'react';


const Lista = () => {

 const [arrayNumer, setArray ] = useState ([1,2,3,4,5,6])

    return ( 
        <Fragment>
            <h2>Lista</h2>
                {
                    arrayNumer.map((item, index) => 
                        <p key={index}> {index} - item: {item}</p>
                    

                    )
                }

        </Fragment>
     );
}
 
export default Lista;
