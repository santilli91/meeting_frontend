import React from 'react'
import Button from './Button'


const ButtonGroup = (props) => (
    <div className="button-group content-group"><ul>
    {[props.content.field_link.map((link,key) => {
        const linkArray = link.split(':')
        return <li key={key}><Button  text={linkArray[0]} link={linkArray[1]} /></li>
        })]}
    </ul></div>
) 

export default ButtonGroup
