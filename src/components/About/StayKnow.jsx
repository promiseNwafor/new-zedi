import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const StayKnow = () => {
  return (
    <div className="bg-secondary text-body container-fluid pb-md-5">
      <div className="container d-flex align-items-center py-5 mb-md-5">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 d-none d-md-block pe-5">
            <StaticImage
              src="../../assets/images/stay-know.png"
              alt="section image"
            />
          </div>
          <div className="col-md-6 ps-md-5">
            <h1 className="fw-bolder text-dark">Stay in the know</h1>
            <p>
              As an agile startup, you need an agency that thinks like you and
              can immediately develop chemistry. Our stepwise approach to
              campaigns and rapid-response times means we’re flexible and can
              work seamlessly as part of your team.
            </p>
            <p>
              Your in-house team will be kept in the loop throughout the
              campaign by making provision of marketing reports, customized to
              your startup’s needs, to show exactly what we’re doing, how it’s
              going, what the results are and how we can optimize.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StayKnow
