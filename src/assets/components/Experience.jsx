import React from 'react'
import fileExperience from '../json/experience.json'
import CardExperience from './CardExperience'

const Experience = props => {
    return (
        <div className="seccionOne">
            <div className="izquierda">
                <h2>EXPERIENCE</h2>
                <p>Hago de todo un poco.</p>
            </div>
            <div className="derecha">
                <div className="layoutExperience">
                    {fileExperience.map((item, index) => <CardExperience key={index} fecha={item.fecha} empresa={item.empresa} cargo={item.cargo} ubicacion={item.ubicacion} texto={item.texto} />)}
                </div>
            </div>
        </div>
    )
}



export default Experience