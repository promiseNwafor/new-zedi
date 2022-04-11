import React from "react"
import { TESTIMONIALS } from "./constants"

const Testimonials = () => {
  return (
    <div className="Testimonials container d-flex flex-column align-items-center my-5 py-md-5 pb-sm-0">
      <div className="row py-4">
        <h2 className="text-dark fw-bolder">Why Startups choose us</h2>
      </div>
      <div className="row justify-content-between text-title">
        {TESTIMONIALS.map(item => (
          <div className="col-md-4 mb-3 cover">
            <div
              className="box mx-md-2 d-flex flex-column justify-content-between"
              key={item.id}
            >
              <p>{item.message}</p>
              <div className="d-flex align-items-center">
                <img className="" src={item.src} alt={item.title} />
                <div className="name ps-2">
                  <h5 className="fw-bolder mb-0">{item.title}</h5>
                  <p className="mb-0">{item.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
