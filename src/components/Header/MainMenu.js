import React from 'react'
import {Link} from 'react-router-dom'



class MainMenu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            toggle: false,
        }

        this.toggleMenu = this.toggleMenu.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    toggleMenu() {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    componentWillMount() {
        document.addEventListener('mousedown',this.handleClick, false)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown',this.handleClick,false)
    }

    handleClick = (e) => {
        if(!this.node.contains(e.target)) {
            this.handleClose()
        }
    }

    handleClose() {
        this.setState({
            toggle: false
        })
    }

    render() {
        return (
            <div ref={node => this.node = node}>
                <button id="main-menu-toggle" className="button" onClick={this.toggleMenu}>Menu</button>
                <div  id="main-menu-drop" className={this.state.toggle?"open":"closed"}>
                    <div className="container">
                        <div className="row">
                            <nav id="main-menu">
                                <ul>
                                    <li>
                                        <ul>
                                            <li><Link to="/" onClick={this.handleClose}>Link</Link></li>
                                            <li>Link</li>
                                            <li>Link</li>
                                            <li>Link</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li>Link</li>
                                            <li>Link</li>
                                            <li>Link</li>
                                            <li>Link</li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainMenu