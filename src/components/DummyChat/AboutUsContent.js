import React from 'react'
import shape1 from '../../assets/images/shape/circle-shape1.png'
import loginRigth from '../../assets/images/dummy-chat/login-rafiki.png'
import login from '../../assets/images/dummy-chat/login-dummy.png'

const AboutUsContent = () => {
    return (
        <section className="about-area ptb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={login} alt="banner" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={loginRigth} alt="banner" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src={shape1} alt="banner" />
            </div>
        </section>
    )
}

export default AboutUsContent;