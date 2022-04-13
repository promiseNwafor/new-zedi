import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const AboutHero = () => {
  return (
    <div className="about hero bg-secondary text-dark container-fluid">
      <div className="container h-100">
        <div className="row h-100 justify-content-between align-items-center">
          <div className="col-md-7 pe-md-5">
            <h1 className="fw-bolder pe-md-5 me-md-5">
              We live for businesses and startups who want to do things
              <span style={{ color: "pink" }}> differently</span>
            </h1>
          </div>
          <div className="col-md-5">
            <StaticImage
              src="../../assets/images/about-hero.png"
              alt="section image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHero
