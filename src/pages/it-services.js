import React from "react"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"
import Banner from "../components/ItServices/Banner"
import OurSolutions from "../components/ItServices/OurSolutions"
import OurServices from "../components/ItServices/OurServices"
import OurFeatures from "../components/ItServices/OurFeatures"
import TeamMember from "../components/ItServices/TeamMember"
import RecentProjects from "../components/ItServices/RecentProjects"
import Pricing from "../components/ItServices/Pricing"
import Testimonials from "../components/ItServices/Testimonials"
import Partner from "../components/ItServices/Partner"
import ProjectStartArea from "../components/ItServices/ProjectStartArea"
import OurBlog from "../components/ItServices/OurBlog"

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <Banner />
      <OurSolutions />
      <OurServices />
      <OurFeatures />
      <TeamMember />
      <RecentProjects />
      <Pricing />
      <Testimonials />
      <Partner />
      <OurBlog />
      <ProjectStartArea />
      <Footer />
    </Layout>
  )
}

export default Home