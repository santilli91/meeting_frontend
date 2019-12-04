import React from 'react'
import NetworkBanner from './NetworkBanner'
import HeaderLogo from './HeaderLogo'
import HeaderRight from './HeaderRight'
import '../../assets/css/header.css'

class Header extends React.Component {

    render() {
        console.log(this.props)
        if(this.props.branding.brand) 
            return (
                <div id="header-wrap">
                    <section id="header">
                        <NetworkBanner link={this.props.branding.brand.network_link} img={this.props.branding.brand.network_logo} />
                        <div className="container" id="primary-header">
                            <div className="row">
                                <HeaderLogo img={this.props.branding.brand.primary_logo} />
                                <HeaderRight date={this.props.branding.brand.meeting_date} location={this.props.branding.brand.meeting_location} />
                            </div>
                        </div>
                    </section>
                </div>
            )
        return (<></>)
    }
}

export default Header