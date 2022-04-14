import React from "react"
import { SELECT_SERVICES } from "./constants"

const GetInTouch = () => {
  return (
    <div className="get-in-touch container py-5">
      <div className="row pb-3 pt-md-5">
        <div className="col">
          <h1 className="fw-bolder text-dark">Get in touch</h1>
          <p className="mb-4">
            Please select from the services below and send us a message, we’ll
            make sure to get back to you.
          </p>
        </div>
      </div>
      <div className="row text-title justify-content-between align-items-center">
        <div className="col-12">
          <h4 className="">Select service</h4>
          {SELECT_SERVICES.map((item, i) => (
            <button key={i} className="btn m-2">
              {item}
            </button>
          ))}
        </div>
        <div className="row py-4">
          <div className="col-md-6">
            <label className="fw-bolder pb-3" htmlFor="name">
              Your name
            </label>
            <input
              type="text"
              className="form-control py-2 me-1 me-md-2"
              placeholder="John Adebayo"
              aria-label="name"
              aria-describedby="button-addon2"
              id="name"
            />
          </div>
          <div className="col-md-6 pt-4 pt-md-0">
            <label className="fw-bolder pb-3" htmlFor="email">
              Your email
            </label>
            <input
              type="text"
              className="form-control py-2 me-1 me-md-2"
              placeholder="John Adebayo"
              aria-label="email"
              aria-describedby="button-addon2"
              id="email"
            />
          </div>
        </div>
        <div className="col-12 d-flex flex-column">
          <label className="fw-bolder pb-3" htmlFor="message">
            Your message
          </label>
          <textarea name="message" id="message" cols="30" rows="7" />
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
