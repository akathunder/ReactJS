import React, {Fragment, useState} from 'react'; //import react con irm

//importar con sfc
const Counter = () => {
    
    // vconstante , nombre de estado = modulo (dato inicial)
    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        console.log('Me diste un click')
        setNumero(numero + 1)
    }

    return ( 
        <Fragment>
        <h3>Mi primer componente {numero}</h3>
        <button onClick={aumentar}>Aumentar</button>
        </Fragment>
     );
}
 
export default Counter;