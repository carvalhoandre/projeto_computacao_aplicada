import React, { Component } from 'react'
import './styles.css'
import Image from '../../assets/emphasis.png'
//components
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Contact from '../../components/Contact'

export default class Home extends Component {

    render() {
        return (
            <body>
                <NavBar />

                <main className="main">
                    <div>
                        <h1 className="emphasis_container_title">Em breve...</h1>
                    </div>
                    <section id="home">
                        <div>
                            <p className="emphasis_title">Onde há<br /> VONTADE,<br />há sempre</p>
                            <h1 className="emphasis_hover_title"><br />GOURMET<br />REQUEST</h1>
                        </div>
                        <div className="all_image">
                            <img src={Image} alt="Imagem_Ilustrativa" className="image_emphasis" />
                            <div className="circle" />
                        </div>

                    </section>


                    <section id="delivery">
                        <h2 className="section_title">Delivery</h2>
                        <span className="section_subtitle">Peça pelo nosso...</span>

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

                    <Contact />

                    <Footer />

                </main>
            </body>
        )
    }
}
