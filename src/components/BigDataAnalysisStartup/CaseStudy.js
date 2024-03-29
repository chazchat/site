import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import caseStudy1 from '../../assets/images/case-study/case-study1.jpg'

import Slider from 'react-slick'

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    navText: [
        "<i class='flaticon-left-1'></i>",
        "<i class='flaticon-right-1'></i>"
    ]
};

const CaseStudy = () => {
    const sliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        margin: 100,
        slidesToShow: 1,
        slidesToScroll: 2,
        prevArrow: (
          <button type="button" className="slick-prev">
            <i className="flaticon-left-1"></i>
          </button>
        ),
        nextArrow: (
          <button type="button" className="slick-next">
            <i className="flaticon-right-1"></i>
          </button>
        )
    }

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="case-study-area bg-fffbf5">
            {display ?<Slider className="case-study-slides owl-carousel owl-theme" {...sliderSettings}>

                <div className="single-case-study-item ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="case-study-content">
                                    <span className="sub-title">
                                        <img src={starIcon} alt="case-study" />
                                        Case study #1
                                    </span>
                                    <h2>Data Science in Pharmaceutical Industries</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                    <Link to="/case-studies-details" className="default-btn">
                                        <i className="flaticon-view"></i>
                                        Details More
                                        <span></span>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="case-study-image">
                                    <Link to="/case-studies-details" className="d-block">
                                        <img src={caseStudy1} alt="case-study" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-case-study-item ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="case-study-content">
                                    <span className="sub-title">
                                        <img src={starIcon} alt="case-study" />
                                        Case study #2
                                    </span>
                                    <h2>Mathematics, Advanced Statistics in Python</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                    <Link to="/case-studies-details" className="default-btn">
                                        <i className="flaticon-view"></i>
                                        Details More
                                        <span></span>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="case-study-image">
                                    <Link to="/case-studies-details" className="d-block">
                                        <img src={caseStudy1} alt="case-study" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider> : ''}
        </div>
    )
}

export default CaseStudy