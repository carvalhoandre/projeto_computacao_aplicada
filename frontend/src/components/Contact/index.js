import React, { useState } from 'react'
import './styles.css'
//didLoad
import ClockLoader from "react-spinners/ClockLoader";
/* contact */
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify';
//for api
//import { message } from '../../service/api'

export default function Contact() {

    const [loading, setLoading] = useState(false);

    const handleSubimit = data => {
        setLoading(true)

        // Do this instead
        setTimeout(function () {
            toast('😁 Obrigado! E-mail enviado com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
            });
        }, 5000);

        setTimeout(function () {
            setLoading(false)
        }, 5000);

        //for api
        // message(data)
        //     .then((response) => {
        //         setLoading(false)
        //         toast('😁 Thanks! Check your email!', {
        //             position: "top-center",
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: 0,
        //         });
        //     },
        //         error => {
        //             setLoading(false)
        //             toast.error('Unable to connect to server, please try again later', {
        //                 position: "top-center",
        //                 autoClose: 5000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 progress: 0,
        //             })
        //         })
    }

    const validations = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
    })

    return (
        <>
            {loading ? (
                <div className="loader">
                    <ClockLoader size={100} color={'#DB0007'} loading={loading} />
                    <h3 className="home_subtitle">Um minuto por favor, estamos enviado email de confirmação...</h3>
                </div>
            ) : (

                <section className="contact section" id="contactme">
                    <h2 className="section_title">Email Service</h2>
                    <span className="section_subtitle">Cadastre-se eseja atualizado de nossas novidades</span>

                    <div className="contact_container container grid">
                        <div>
                            <div className="contact_information">
                                <i className="uil uil-phone contact_icon" />

                                <div>
                                    <h3 className="contact_title">Ligue</h3>
                                    <span className="contact_subtitle">11 95875-0047</span>
                                </div>
                            </div>

                            <div className="contact_information">
                                <i className="uil uil-envelope contact_icon" />

                                <div>
                                    <h3 className="contact_title">Email</h3>
                                    <span className="contact_subtitle">
                                        <a
                                            href="mailto:cavalho.devel@gmail.com?Subject=Olá André"
                                            target="_new"
                                            rel="external"
                                            className="contact_email"
                                        >
                                            gourmet_request@gmail.com
                                        </a>
                                    </span>
                                </div>
                            </div>

                            <div className="contact_information">
                                <i className="uil uil-map-marker contact_icon" />

                                <div>
                                    <h3 className="contact_title">Localização</h3>
                                    <span className="contact_subtitle">Brasil - São Paulo</span>
                                </div>
                            </div>
                        </div>

                        <Formik
                            initialValues={{}}
                            onSubmit={handleSubimit}
                            validationSchema={validations}
                            enableReinitialize
                        >
                            {({ isValid, dirty }) => (
                                <Form className="contact_form grid">
                                    <div className="contact_inputs grid">
                                        <div className="contact_content">
                                            <Field
                                                name="name"
                                                className="contact_input"
                                            />
                                            <label className="contact_label">Nome</label>
                                        </div>
                                    </div>
                                    <ErrorMessage
                                        component="span"
                                        name="name"
                                        className="form-error"
                                    />
                                    <div className="contact_content">
                                        <Field
                                            name="email"
                                            type="email"
                                            id="email"
                                            className="contact_input"
                                        />
                                        <label className="contact_label">Email</label>
                                    </div>
                                    <ErrorMessage
                                        component="span"
                                        name="email"
                                        className="form-error"
                                    />
                                    <div className="contact_content">
                                        <Field
                                            name="project"
                                            id="project"
                                            type="text"
                                            className="contact_input"
                                        />
                                        <label className="contact_label">Menssage</label>
                                    </div>

                                    <div>
                                        <button
                                            variant="info"
                                            fill
                                            wd
                                            type="submit"
                                            className="button button--flex button_send"
                                            disabled={!(dirty && isValid)}
                                        >
                                            Enviar
                                            <i className="uil uil-message button_icon" />
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </section>
            )
            }
        </>
    )
}
