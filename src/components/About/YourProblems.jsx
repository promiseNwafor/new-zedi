import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const YourProblems = () => {
  return (
    <div className="bg-secondary text-body container-fluid pt-md-5">
      <div className="container d-flex align-items-center py-5 mt-md-5">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 text pe-md-5">
            <h1 className="fw-bolder text-dark">We want your problems</h1>
            <p>
              Business problems always exist, from teething to maturity and we
              navigate through yours and solve them by understanding your
              audience, and the best and most budget-friendly ways to engage
              them using detailed research, insights and creativity to push the
              boundaries of what is possible.
            </p>
            <p>
              Consider us as an extension of your team. Let’s discuss your
              growth goals and put together a strategy on how to achieve those
              goals. It’s that simple.
            </p>
          </div>
          <div className="col-md-6 mt-5 mt-md-0 d-flex justify-content-end">
            <StaticImage
              src="../../assets/images/your-problem.png"
              alt="section image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourProblems
