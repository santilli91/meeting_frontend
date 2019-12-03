import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const HeaderLogo = ({img}) => (
    <div className="col-md-4 col-sm-7 col-xs-9" id="header-logo">
        <Router>
            <Link to="/">
                <img src={img} />
            </Link>
        </Router>
    </div>
)

export default HeaderLogo

