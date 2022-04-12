import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Home/Hero"
import Stats from "../components/Home/Stats"
import Featured from "../components/Home/Featured"
import Supercharge from "../components/Home/Supercharge"
import CreateTeam from "../components/Home/CreateTeam"
import Testimonials from "../components/Home/Testimonials"
import Clients from "../components/Home/Clients"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Stats />
    <Featured />
    <Supercharge />
    <CreateTeam />
    <Testimonials />
    <Clients />
  </Layout>
)

export default IndexPage
