import React from "react"
import { WEB_DEVELOPMENT } from "./constants"

const WebDevelopment = () => {
  return (
    <div className="digital-marketing container py-md-5">
      <div className="row py-3 ps-md-3">
        <h1 className="text-dark fw-bolder">Web Development & Design</h1>
      </div>
      <div className="row">
        {WEB_DEVELOPMENT.map((item, i) => (
          <div key={i} className="col-md-6 p-4">
            <div className="box text-title">
              <img src={item.icon} alt={item.title} />
              <h3 className="ps-2 my-4 mb-3 fw-bolder">{item.title}</h3>
              <p className="ps-2">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WebDevelopment
