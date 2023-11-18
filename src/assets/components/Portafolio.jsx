import React from 'react'
import filePortafolio from '../json/portafolio.json'
import CardPortafolio from './CardPortafolio'

const Portafolio = props => {
    return (
        <div className="seccionTwo">
            <div className="izquierda">
                <h2>portafolio</h2>
                <p>Algunos de mis desarrollos.</p>
            </div>
            <div className="derecha">
                <div className="layoutPortafolio">
                    {filePortafolio.map((item, index) => <CardPortafolio key={index} imagen={item.imagen} title={item.title} descripcion={item.descripcion} />)}

                </div>
            </div>
        </div>
    )
}



export default Portafolio