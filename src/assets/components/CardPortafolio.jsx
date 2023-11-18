import React from 'react'
const CardPortafolio = props => {

    return (
        <div className='card-portafolio'>
            <div className="imagen-portafolio">

                <img src={props.imagen} alt={props.title} />
            </div>
            <div className="texto-portafolio hidden">
                <div className="title-portafolio">{props.title}</div>
                <div className="descripcion-portafolio">{props.descripcion}</div>
            </div>
        </div>
    )
}



export default CardPortafolio