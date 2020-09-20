import React, {useState,Fragment} from 'react';


const List = () => {

    const [arrayNumero, setarrayNumero] = useState([1,2,3,4,5,6,7])
    
    const [numero,setNumero] = useState(8)

    const agregarElemento =() => {

        setNumero(numero + 1)
        console.log('diste click')
        setarrayNumero([...arrayNumero, numero])
    }

    return ( 
        <Fragment>
        <h3>lista</h3>
        <button onClick={agregarElemento}>Agregar</button>
        {
            arrayNumero.map((item, index) => 
                <p key={index}>{item} - {index}</p>
            )
        }
        </Fragment>
     );
}
 
export default List;