import React, { Fragment, useState } from 'react';
import {useForm} from 'react-hook-form'

const EjemploUno = () => {

    const {register, errors, handleSubmit}=useForm();

    const [Entradas, setEntradas] = useState([])

    const onSubmit = (data, e) => {
        console.log(data)
        setEntradas([
            ...Entradas, 
            data
        ])
        e.target.reset()
    }
    return ( 
        <Fragment>
            <h1 className="">Ejemplo #1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                name="titulo"
                placeholder="Ingrese titulo"
                className="form-control my-2"
                ref={
                    register({
                        required: {
                            value: true, 
                            message:'campo obligatorio'}, 
                        maxLength: {
                            value: 5, 
                            message: 'No más de 5 carácteres!'
                            },
                        minLength: {
                            value: 2, 
                            message: 'Mínimo 2 carácteres'
                            }
                    })
                }
                ></input>

                {errors.titulo &&
                <span className="text-danger text-small d-block mb-2">
                {errors.titulo.message}
                </span>
                }

                <input 
                name="descripcion"
                placeholder="Ingrese Descripción"
                className="form-control my-2"
                ref={
                    register({
                        required: {
                            value: true, 
                            message:'campo obligatorio'}, 
                        maxLength: {
                            value: 5, 
                            message: 'No más de 5 carácteres!'
                            },
                        minLength: {
                            value: 2, 
                            message: 'Mínimo 2 carácteres'
                            }
                    })
                }
                ></input>

                <span className="text-danger text-small d-block mb-2">
                {errors?.descripcion?.message}
                </span>

                <button className="btn btn-primary">Agregar</button>
            </form>
            <ul>
                {
                    Entradas.map(item =>
                    <li>{item.titulo} - {item.descripcion}</li>
                        )
                }
            </ul>
        </Fragment>
     );
}
 
export default EjemploUno;