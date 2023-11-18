import React from 'react'
import fileEducacion from '../json/education.json'
import CardEducacion from './CardEducacion'

const Educacion = props => {
    return (
        <div className="seccionTwo">
            <div className="izquierda">
                <h2>educación</h2>
                <p>No soy muy bueno para el estudio, pero lo pongo empeño.</p>
            </div>
            <div className="derecha">
                <div className="layoutEducacion">
                    {fileEducacion.map((item, index) => <CardEducacion key={index} fecha={item.fecha} institucion={item.institucion} carrera={item.carrera} ubicacion={item.ubicacion} texto={item.texto} />)}
                </div>
            </div>
        </div>
    )
}



export default Educacion