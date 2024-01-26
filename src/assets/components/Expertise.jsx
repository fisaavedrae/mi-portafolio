import React from 'react'
import CardExpertise from './CardExpertise'
import Expertises from '../json/expertise.json'

const Expertise = props => {
    return (
        <div className="seccionOne">
            <div className="izquierda">
                <h2>EXPERTISE</h2>
                <p>Batman estaría celoso.</p>
            </div>
            <div className="derecha">
                <div className="layoutExpertise">
                    {Expertises.map((item, index) => <CardExpertise key={index} conteo={item.id} title={item.titulo} text={item.texto} />)}
                </div>
            </div>
        </div>
    )
}


export default Expertise