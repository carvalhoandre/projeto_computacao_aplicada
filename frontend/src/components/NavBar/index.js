import React, { Component } from 'react'
import './styles.css'

const initialState = {
    nav: false
}

export default class NavBar extends Component {

    state = {
        ...initialState
    }

    render() {
        return (
            <>
                <header className="header" id="header">
                    <nav className="nav container">
                        <div className={`nav_header ${this.state.nav === true ? 'close-menu' : 'show-menu'}`} id="nav-menu">
                            <h1 className="nav_title">The gourmet Request</h1>
                        </div>

                        <div className={`nav_menu ${this.state.nav === true ? 'show-menu' : 'close-menu'}`} id="nav-menu">
                            <ul className="nav_list grid">
                                <li className="nav_item">
                                    <a href="#" className="nav_link">
                                        <i className={`uil uil-estate nav_icon`} />
                                        Home
                                    </a>
                                </li>
                                <li className="nav_item">
                                    <a href="#delivery" className="nav_link">
                                        <i className={`uil uil-user nav_icon`} />
                                        Delivery
                                    </a>
                                </li>
                                <li className="nav_item">
                                    <a href="#contactme" className="nav_link case">
                                        <i className={`uil uil-message nav_icon`} />
                                        Contate nos
                                    </a>
                                </li>
                            </ul>
                            <div>
                                <i
                                    className="uil uil-times nav_close nav_icon"
                                    onClick={() => this.setState({ nav: false })}
                                />
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}