import React from 'react'
import { Link } from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import client1 from '../../assets/images/testimonials/client1.jpg'
import client2 from '../../assets/images/testimonials/client2.jpg'
import client3 from '../../assets/images/testimonials/client3.jpg'
import shape from '../../assets/images/shape/shape1.svg'


import Slider from 'react-slick'

const Testimonials = () => {
  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: (
      <button type="button" className="slick-prev">
        <i className="flaticon-left-1"></i>
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next">
        <i className="flaticon-right-1"></i>
      </button>
    ),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  }

  return (
    <section className="testimonials-area bg-f1f8fb">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="about" />
            Testimonials
          </span>
          <h2>What Our Clients are Saying?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna.
          </p>
        </div>

        <Slider className="testimonials-slides owl-carousel owl-theme" {...sliderSettings}>
          <div className="single-testimonials-item">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
              vel facilisis.
            </p>

            <div className="client-info">
              <div className="d-flex justify-content-center align-items-center">
                <img src={client1} alt="about" />
                <div className="title">
                  <h3>Alex Maxwell</h3>
                  <span>CEO at ChazChat</span>
                </div>
              </div>
            </div>
          </div>

          <div className="single-testimonials-item">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum
              suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>

            <div className="client-info">
              <div className="d-flex justify-content-center align-items-center">
                <img src={client2} alt="about" />
                <div className="title">
                  <h3>David Warner</h3>
                  <span>CEO at Envato</span>
                </div>
              </div>
            </div>
          </div>

          <div className="single-testimonials-item">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum
              suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>

            <div className="client-info">
              <div className="d-flex justify-content-center align-items-center">
                <img src={client3} alt="about" />
                <div className="title">
                  <h3>Sarah Taylor</h3>
                  <span>CEO at ThemeForest</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="testimonials-view-btn text-center">
            <Link to="/testimonials" className="default-btn">
                <i className="flaticon-view"></i>
                Check Out All Reviews <span></span>
            </Link>
        </div>
      </div>
      <div className="shape-img1">
        <img src={shape} alt="about" />
      </div>
    </section>
  )
}
export default Testimonials