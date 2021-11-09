import { Component } from 'react'
import './styles.css'
import ImageBoot from '../../assets/boot.png'
import ProfilePhoto from '../../assets/profile.png'


const initialState = {
    chat: false,
    message: [

        'Olá, tudo bem? Bem vindo ao Amarelinho!',
        'Pedimos que antes de realizar o pedido, clique na opção CADASTRAR',
        'Todos os pedidos acompanham arroz, feijão, fritas esalada',
        'Atualmente estamos antendendo somente via Telegram (LINK) ',
        'Em breve estaremos no WhatsApp e muito mais, aguardem'
    ]
}

export default class Boot extends Component {

    state = {
        ...initialState
    }

    render() {

        var messages = []

        this.state.message.forEach((i) => {
            messages.push(
                <div className="message">
                    <p>{i}</p>
                </div>
            )
        })

        return (
            <>
                {this.state.chat ? (
                    <div className="boot_chat_container">
                        <i className="uil uil-times close_icon"
                            onClick={(() => {
                                this.state.chat ? this.setState({ chat: false }) : this.setState({ chat: true })
                            })}
                        />
                        <div className="boot_chat">
                            <div className="header_chat">
                                <img src={ProfilePhoto} alt="ProfilePhoto" />
                                <h1>Amarelinho</h1>
                            </div>
                            {messages}
                        </div>
                    </div>
                ) :
                    <div className="initial_state">
                        <div className="initial_message">
                            <p>Olá, posso ajudar?</p>
                        </div>
                        <img
                            src={ImageBoot} alt="BootImage"
                            onClick={(() => {
                                this.state.chat ? this.setState({ chat: false }) : this.setState({ chat: true })
                            })}
                        />
                    </div>
                }
            </>
        )
    }
}
