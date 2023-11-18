import React from 'react'

const CardExpertise = ({ conteo, title, text }) => {
    return (
        <div className="cardExpertise">
            <div className="conteoExpertise">{conteo}</div>
            <div className="bloqueExpertise">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}


export default CardExpertise