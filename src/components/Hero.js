import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => (
  <div className="bg-secondary text-dark container-fluid">
    <div className="hero home container d-flex align-items-center">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-5 text">
          <h1 className="">The marketing force for Startups</h1>
          <p className="fs-6">
            A value-driven Digital marketing and media agency passionate about
            scaling startups and helping them reach their growth potential.
          </p>
          <div className="my-5">
            <button className="btn btn-primary border-2 px-4 my-1 me-3">
              <Link to="/contact">Get Started</Link>
            </button>
            <button className="btn btn-outline-dark border-2 px-2 px-md-3 my-1">
              <Link to="/contact">Create Marketing Team</Link>
            </button>
          </div>
        </div>
        <div className="col-md-7">
          <StaticImage
            src="../assets/images/hero-img.png"
            width={700}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Hero image"
            // style={{ marginBottom: `1.45rem` }}
          />
        </div>
      </div>
    </div>
  </div>
)

export default Hero
