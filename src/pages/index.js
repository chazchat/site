import React from "react"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"
import MainBanner from "../components/Index/MainBanner"
import OurSolutions from "../components/Index/OurSolutions"
import AboutUs from "../components/Index/AboutUs"
import OurServices from "../components/Index/OurServices"
import HowItWork from "../components/Index/HowItWork"
import CaseStudySlider from "../components/Index/CaseStudySlider"
import TeamMembers from "../components/Index/TeamMembers"
import Testimonials from "../components/Index/Testimonials"
import Partner from "../components/Index/Partner"
import OurBlog from "../components/Index/BlogPost"
import StartProject from "../components/Index/StartProject"

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <MainBanner />
      <OurSolutions />
      <AboutUs />
      <OurServices />
      <HowItWork />
      <CaseStudySlider />
      <TeamMembers />
      <Testimonials />
      <Partner />
      <OurBlog />
      <StartProject />
      <Footer />
    </Layout>
  )
}

export default Home