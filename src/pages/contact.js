import React from "react"
import ContactDetails from "../components/Contact/ContactDetails"
import ContactHero from "../components/Contact/ContactHero"
import GetInTouch from "../components/Contact/GetInTouch"
import Layout from "../components/layout"
import Seo from "../components/seo"

const contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <ContactHero />
      <GetInTouch />
      <ContactDetails />
    </Layout>
  )
}

export default contact
