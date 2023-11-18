import React from 'react'
import CardSkill from './CardSkill'
import Skill from '../json/skills.json'

const Skills = props => {
    return (
        <div className="seccionTwo">
            <div className="izquierda">
                <h2>SKILLS</h2>
                <p>Un poco sobre mi.</p>
            </div>
            <div className="derecha">
                <div className="layoutSkill">
                    {Skill.map((item, index) => <CardSkill key={index} porcentaje={item.porcentaje} titulo={item.nombre} />)}
                </div>
            </div>
        </div>
    )
}


export default Skills