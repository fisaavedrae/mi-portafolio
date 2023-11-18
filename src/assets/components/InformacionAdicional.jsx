import React from 'react'
import fileInformacionAdicional from '../json/informacionAdicional.json'

const InformacionAdicional = props => {
    return (
        <div className="seccionOne">
            <div className="izquierda">
                <h2>INFORMACIÓN ADICIONAL</h2>
                <p>Tal vez sea interesante.</p>
            </div>
            <div className="derecha">
                <div className="layoutInformacionAdicional">

                    {fileInformacionAdicional.map((item, index) =>
                        <div className="listado-informacion-adicional" key={index}>
                            <div className="bullet"><i className="fa-solid fa-circle"></i></div>
                            <div className="texto-informacion-adicional">{item.title}</div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}


export default InformacionAdicional