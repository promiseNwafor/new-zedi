import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const CreateTeam = ({ className }) => (
  <div className={`container-fluid ${className}`}>
    <div className="text-dark container-fluid py-5">
      <div className="CreateTeam container d-flex align-items-center py-md-5 pb-sm-0">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-5 pt-5">
            <h1 className="fw-bolder pb-1">Create your marketing team</h1>
            <p className="fs-6 text-title">
              Immediately set up a dedicated marketing team for your startup
              from across Africa, think of them as an extension of your office.
            </p>
            <div className="my-5">
              <button className="btn btn-primary border-2 px-4">
                <Link to="/contact">Get Started</Link>
              </button>
            </div>
          </div>
          <div className="col-md-7 d-flex justify-content-end">
            <StaticImage
              src="../assets/images/create-team.png"
              formats={["auto", "webp", "avif"]}
              alt="Hero image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default CreateTeam
