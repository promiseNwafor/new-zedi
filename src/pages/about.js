import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutHero from "../components/About/AboutHero"
import WhoWeAre from "../components/About/WhoWeAre"
import YourProblems from "../components/About/YourProblems"
import StayKnow from "../components/About/StayKnow"
import Leadership from "../components/About/Leadership"

const about = () => (
  <Layout>
    <Seo title="About" />
    <AboutHero />
    <WhoWeAre />
    <YourProblems />
    <StayKnow />
    <Leadership />
  </Layout>
)

export default about
