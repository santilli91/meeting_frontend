import React from 'react'
import Button from '../Global/Button'


const ButtonGroup = ({buttons}) => (
    <div className="button-group content-group"><ul>
    {[buttons.map((button,key) => {
        return <li key={key}><Button  text={button.text} link={button.link} /></li>
    })]}
    </ul></div>
) 

export default ButtonGroup
