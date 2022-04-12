import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Supercharge = () => (
  <div className="bg-secondary text-dark container-fluid py-5">
    <div className="Supercharge container d-flex align-items-center py-md-5 pb-sm-0">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-7">
          <StaticImage
            src="../assets/images/supercharge.png"
            width={500}
            formats={["auto", "webp", "avif"]}
            alt="Hero image"
          />
        </div>
        <div className="col-md-5 pt-5">
          <h1 className="fw-bolder">Supercharge your marketing</h1>
          <p className="fs-6 text-title">
            Build your audience, grow your customer base, increase your bottom
            lines, amplify your content, drive download numbers up and all you
            need to do right now is click "Get Started"
          </p>
          <div className="my-5">
            <button className="btn btn-primary border-2 px-4">
              <Link to="/contact">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Supercharge
