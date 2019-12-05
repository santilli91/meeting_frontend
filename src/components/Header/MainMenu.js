import React from 'react'
import {Link} from 'react-router-dom'



class MainMenu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            toggle: false,
            path: window.location.pathname,
            menu: [
                {
                    title: "item",
                    items: [
                        {
                            link: '/article/test-page',
                            title: 'Test Page',
                        },
                        {
                            link: '/',
                            title: 'Homepage'
                        }
                    ]
                },
                {
                    title: "item 2",
                    items: [
                        {
                            link: '/rates',
                            title: 'Registrations',
                        }
                    ]
                },
                {
                    title: "item 3",
                    items: [
                        {
                            link: '/article/test-page',
                            title: 'Test Page',
                        }
                    ]
                },
            ]
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

    componentDidMount() {
        document.addEventListener('mousedown',this.handleClick, false)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown',this.handleClick,false)
    }
    

    handleClick = (e) => {
        if(!this.node.contains(e.target)) {
            this.handleClose()
        }
        this.setState({
            path: window.location.pathname
        })
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
                                    {this.state.menu.map((item,i) => (
                                        <li key={i}>   
                                        <h3>{item.title}</h3>
                                        <ul>
                                            {item.items.map((link,key) => (
                                                <li key={key} className={this.state.path === link.link?"active":''}>
                                                    <Link to={link.link} onClick={this.handleClose} >
                                                        {link.title}
                                                    </Link>
                                                </li>   
                                            ))}
                                        </ul>
                                        </li>
                                
                                    ))}
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