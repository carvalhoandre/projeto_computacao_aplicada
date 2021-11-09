import React, { Component } from 'react'
import NavBar from '../../components/NavBar'
import './styles.css'
import Image from '../../assets/emphasis.png'
import Footer from '../../components/Footer'
import Boot from '../../components/Boot'

export default class Home extends Component {

    render() {
        return (
            <body>
                <NavBar />

                <Boot />
                <main>
                    <section id="home">
                        <div>
                            <p className="emphasis_title">Onde há<br /> VONTATE,</p>
                            <h1 className="emphasis_hover_title">há sempre <br />um AMARELINHO</h1>
                        </div>
                        <div>
                            <img src={Image} alt="Imagem_Ilustrativa" className="image_emphasis" />
                            <div className="circle" />
                        </div>

                    </section>

                    <section id="delivery">
                        <h1 className="delivery_title">Delivery</h1>
                        <h2 className="delivery_subtitle">Peça pelo nosso...</h2>

                        <div className="delivery_itens">
                            <div>
                                <i className="uil uil-android-alt delivery_icon margin" />
                                <i className="uil uil-apple-alt delivery_icon margin" />
                                <h3 className="delivery_option">Aplicativo</h3>
                            </div>
                            <div>
                                <i className="uil uil-globe delivery_icon" />
                                <h3 className="delivery_option">Site</h3>
                            </div>
                        </div>
                    </section>

                    <Footer />
    
                </main>
            </body>
        )
    }
}
