import React, { Fragment } from 'react'

const Comentario = ({sujeto}) => {
    return ( 
        <Fragment>
            <h1>Comentarios</h1>
            <hr className="bg-light" />
            <div className="media ml-3">
                <img className="mr-3" src={sujeto.urlImage} alt=""/>
                <div className="media-body">
                    <h5 className="mt-0">{sujeto.nombre}</h5>
                    {sujeto.texto}
                </div>
            </div>
        </Fragment>
     );
}
 
export default Comentario;