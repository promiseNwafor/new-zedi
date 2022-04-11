import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Stats from "../components/Stats"
import Featured from "../components/Featured"
import Supercharge from "../components/Supercharge"
import CreateTeam from "../components/CreateTeam"
import Testimonials from "../components/Testimonials"
import Clients from "../components/Clients"
import Subscribe from "../components/Subscribe"

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
    <Subscribe />
  </Layout>
)

export default IndexPage
