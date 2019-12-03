import React from 'react'
import NetworkBanner from './NetworkBanner'
import HeaderLogo from './HeaderLogo'
import '../assets/css/header.css'

class Header extends React.Component {





    render() {
        return (
            <div id="header-wrap">
                <section id="header">
                    <NetworkBanner link={this.props.branding.brand.network_link} img={this.props.branding.brand.network_logo} />
                    <div className="container" id="primary-header">
                       <HeaderLogo img={this.props.branding.brand.primary_logo} />
                    </div>
                </section>
            </div>
        )
    }
}

export default Header