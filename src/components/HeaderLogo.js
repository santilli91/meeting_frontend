import React from 'react'
import {Link} from 'react-router-dom'

const HeaderLogo = ({img}) => (
    <div className="col-md-4 col-sm-7 col-xs-9" id="header-logo">

            <Link to="/">
                <img alt="Site Logo" src={img} />
            </Link>
    </div>
)

export default HeaderLogo

