import React from 'react'
import ReactWOW from 'react-wow'

import { Link } from 'gatsby'
// import BotAgent from '../../assets/svgs/chat-bot-animate.svg';

import Loadable from '@loadable/component'
const ModalVideo = Loadable(() => import('react-modal-video'))

const MainBanner = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    // const openModal = () => {
    //     setIsOpen(!isOpen);
    // }
    return (
        <React.Fragment>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo
                channel='youtube'
                isOpen={!isOpen}
                videoId='bk7McNUjWgw'
                onClose={() => setIsOpen(!isOpen)}
            />

            <div className="main-banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="main-banner-content">
                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <h1>Servicio al cliente centralizado</h1>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <p>Imagínese tener todas las herramientas necesarias para manejar conversaciones, construir relaciones y deleitar a sus clientes en un solo lugar. ¡Eso es lo que les ofrece ChatChaz!</p>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInRight'>
                                    <div className="btn-box">
                                        <Link
                                            to="/dummy-chat"
                                            className="default-btn"
                                        >
                                            <i className="flaticon-structure"></i>
                                            Crea una cuenta gratis <span></span>
                                        </Link>

                                        {/* <Link
                                            to="#"
                                            onClick={e => {e.preventDefault(); openModal()}}
                                            className="video-btn popup-youtube"
                                        >
                                            <i className="flaticon-google-play"></i> Watch Video
                                        </Link> */}
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="banner">
                                {/* <BotAgent /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainBanner