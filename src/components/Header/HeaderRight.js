import React from 'react'
import Button from '../Global/Button'
import MainMenu from './MainMenu'

const HeaderRight = ({date,location}) => {

    return (
        <div id="header-right" className="col-md-8 col-sm-5 col-xs-3 quick-links">
            <ul>   
                <li>
                    <div className="local-date">{date?date:''}</div>
                    <div className="local-date">{location?location:''}</div>
                </li>
                <li><Button text="Register" link="/rates" /></li>
                <li><MainMenu /></li>
            </ul>
        </div>
    )
}

export default HeaderRight