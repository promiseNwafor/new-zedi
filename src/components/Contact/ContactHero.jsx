import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const ContactHero = () => {
  return (
    <div className="bg-secondary text-dark container-fluid">
      <div className="services container d-flex align-items-center">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-5 text">
            <h1 className="fw-bolder">Let’s create magic together</h1>
            <p className="fs-6 text-title">Elevate your brand without a wand</p>
          </div>
          <div className="col-md-7 d-flex justify-content-end">
            <StaticImage
              src="../../assets/images/contact-hero.png"
              alt="section image"
              width={600}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactHero
