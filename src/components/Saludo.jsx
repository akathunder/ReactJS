import React, { Fragment } from 'react'

const Saludo = (props) => {
    console.log(props)
    return ( 
        <Fragment>
            <h2>Saludos para ti {props.persona} tienes {props.edad} años</h2>   
        </Fragment>
     );
}
export default Saludo;