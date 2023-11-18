import React from 'react'

const CardExpertise = ({ conteo, title, text }) => {
    return (
        <div className="cardExpertise">
            <div className="conteoExpertise">{conteo}</div>
            <div className="bloqueExpertise">
                <h2>{title}</h2>
                <div className='texto-expertise'>{text}</div>
            </div>
        </div>
    )
}


export default CardExpertise