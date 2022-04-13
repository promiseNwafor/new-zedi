import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const ServicesHero = () => {
  return (
    <div className="bg-secondary text-dark container-fluid">
      <div className="services container d-flex align-items-center">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-5 text">
            <h1 className="fw-bolder">How we can help</h1>
            <p className="fs-6 text-title">
              Our engagements are end-to-end solutions for scaling startups;
              from awareness to traffic generation to prospect education and
              finally closing the deal.
            </p>
            <div className="my-5">
              <button className="btn btn-primary d-none d-lg-inline border-2 px-4 my-1 me-3">
                <Link to="/contact">Let’s Get to Work</Link>
              </button>
            </div>
          </div>
          <div className="col-md-7 d-flex justify-content-end">
            <StaticImage
              src="../../assets/images/your-problem.png"
              alt="section image"
              width={600}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesHero
