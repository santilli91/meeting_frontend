import React from 'react'
import {Link} from 'react-router-dom';

const Button = ({text,link}) => (<Link className="button" to={link}>{text}</Link>)

export default Button
