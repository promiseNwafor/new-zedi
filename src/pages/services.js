import React from "react"
import Clients from "../components/Home/Clients"
import CreateTeam from "../components/Home/CreateTeam"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Consultancy from "../components/Services/Consultancy"
import DigitalMarketing from "../components/Services/DigitalMarketing"
import ServicesHero from "../components/Services/ServicesHero"
import WebDevelopment from "../components/Services/WebDevelopment"

const services = () => {
  return (
    <Layout>
      <Seo title="Services" />
      <ServicesHero />
      <DigitalMarketing />
      <WebDevelopment />
      <Consultancy />
      <CreateTeam className={"bg-secondary mb-5"} />
      <Clients />
    </Layout>
  )
}

export default services
