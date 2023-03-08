import React from 'react'
import { Link } from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import icon1 from '../../assets/images/services/service-icon1.png'
import icon2 from '../../assets/images/services/service-icon2.png'
import icon3 from '../../assets/images/services/service-icon3.png'
import icon4 from '../../assets/images/services/service-icon4.png'
import icon5 from '../../assets/images/services/service-icon5.png'
import icon6 from '../../assets/images/services/service-icon6.png'
import shape2 from '../../assets/images/shape/circle-shape2.png'

const OurServices = () => {
    return (
        <section className="services-area ptb-100 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="banner" />
                        Características
                    </span>
                    <h2>¡Mira todo lo que ChatChaz tiene para ofrecer!</h2>
                    <p>¡Aprende más sobre todas estas características y cómo ChatChaz puede ayudarte a construir relaciones duraderas con tus clientes! Haz clic en "Leer más" para obtener más información!</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <img src={icon1} alt="banner" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Website Live Chat
                                </Link>
                            </h3>
                            <p>Simple y elegante chat en vivo para su sitio web. </p><p> ¡Mejore la experiencia del usuario en su sitio web!</p>

                            <Link to="/service-details" className="read-more-btn">
                                Leer más <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <img src={icon2} alt="banner" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Omnichannel inbox
                                </Link>
                            </h3>
                            <p>Conecte cualquier canal y interactúe con sus clientes desde un solo lugar.</p><p> ¡Entregue una experiencia de cliente consistente en todos los canales!</p>

                            <Link to="/service-details" className="read-more-btn">
                                Leer más <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <img src={icon3} alt="banner" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    Team collaboration
                                </Link>
                            </h3>
                            <p>Colabore y administre conversaciones utilizando una bandeja de entrada compartida. </p><p> ¡Trabaje en equipo para resolver las consultas de sus clientes de manera más eficiente!</p>

                            <Link to="/service-details" className="read-more-btn">
                                Leer más <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <img src={icon4} alt="banner" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                Chatbots
                                </Link>
                            </h3>
                            <p>Integre fácilmente con plataformas de chatbots como Rasa o Dialogflow para reducir la carga de trabajo de sus agentes. </p><p> ¡Brinde respuestas rápidas y precisas a sus clientes utilizando chatbots!</p>

                            <Link to="/service-details" className="read-more-btn">
                                Leer más <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <img src={icon5} alt="banner" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                Automations
                                </Link>
                            </h3>
                            <p>Evite tareas repetitivas automatizando sus flujos de trabajo y haga funcionar su negocio en piloto automático. </p><p> ¡Ahorre tiempo y recursos automatizando sus procesos de trabajo! Mobile apps</p>

                            <Link to="/service-details" className="read-more-btn">
                                Leer más <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <img src={icon6} alt="banner" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                Pre-Chat Form
                                </Link>
                            </h3>
                            <p>Agregue un formulario de chat personalizable antes de que un usuario inicie un chat.</p><p> ¡Capture información útil de sus clientes para mejorar la calidad del servicio de atención al cliente!</p>

                            <Link to="/service-details" className="read-more-btn">
                                Leer más <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="load-more-btn text-center">
                            <Link to="/services" className="default-btn">
                                <i className="flaticon-refresh"></i> Aprender más <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape2">
                <img src={shape2} alt="banner" />
            </div>
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </section>
    )
}

export default OurServices