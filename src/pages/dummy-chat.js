import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import AboutUsContent from '../components/DummyChat/AboutUsContent'


const AboutUs = () => {
    return (
        <Layout>
            <Navbar />
            <AboutUsContent />
            <Footer />
        </Layout>
    );
}

export default AboutUs;