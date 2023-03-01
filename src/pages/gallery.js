import React from 'react';
import Layout from "../components/App/Layout";
import Navbar from "../components/App/Navbar";
import PageBanner from '../components/Common/PageBanner';
import Footer from "../components/App/Footer";
import { Link } from 'gatsby';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import gallery1 from '../assets/images/gallery/gallery1.jpg';
import gallery2 from '../assets/images/gallery/gallery2.jpg';
import gallery3 from '../assets/images/gallery/gallery3.jpg';
import gallery4 from '../assets/images/gallery/gallery4.jpg';
import gallery5 from '../assets/images/gallery/gallery5.jpg';
import gallery6 from '../assets/images/gallery/gallery6.jpg';
import gallery7 from '../assets/images/gallery/gallery7.jpg';
import gallery8 from '../assets/images/gallery/gallery8.jpg';
import gallery9 from '../assets/images/gallery/gallery9.jpg';

const images = [
    {
        original: gallery1,
        thumbnail: gallery1,
    },
    {
        original: gallery2,
        thumbnail: gallery2,
    },
    {
        original: gallery3,
        thumbnail: gallery3,
    },
    {
        original: gallery4,
        thumbnail: gallery4,
    },
    {
        original: gallery5,
        thumbnail: gallery5,
    },
    {
        original: gallery6,
        thumbnail: gallery6,
    },
    {
        original: gallery7,
        thumbnail: gallery7,
    },
    {
        original: gallery8,
        thumbnail: gallery8,
    },
    {
        original: gallery9,
        thumbnail: gallery9,
    },
];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Gallery"
                homePageText="Home"
                homePageUrl="/"
                activePageText="Gallery"
            />

            <div className="gallery-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link
                                    to="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentIndex(0);
                                    }}
                                >
                                    <img src={gallery1} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link
                                    to="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentIndex(1);
                                    }}
                                >
                                    <img src={gallery2} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link
                                    to="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentIndex(2);
                                    }}
                                >
                                    <img src={gallery3} alt="event" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link
                                    to="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentIndex(3);
                                    }}
                                >
                                    <img src={gallery4} alt="event" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link
                                    to="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentIndex(4);
                                    }}
                                >
                                    <img src={gallery5} alt="event" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link
                                    to="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentIndex(5);
                                    }}
                                >
                                    <img src={gallery6} alt="event" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link
                                    to="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentIndex(6);
                                    }}
                                >
                                    <img src={gallery7} alt="event" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link
                                    to="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentIndex(7);
                                    }}
                                >
                                    <img src={gallery8} alt="event" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link
                                    to="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentIndex(8);
                                    }}
                                >
                                    <img src={gallery9} alt="event" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Gallery */}
                <ImageGallery
                    items={images}
                    thumbnailPosition="bottom"
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showBullets={true}
                    startIndex={currentIndex}
                    onSlide={(index) => setCurrentIndex(index)}
                />
            </div>

            <Footer />
        </Layout>
    );
};

export default Gallery;
