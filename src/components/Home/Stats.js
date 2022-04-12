import React from "react"
import { STATS } from "./constants"

const Stats = () => {
  return (
    <div className="Stats container py-5 my-5 d-none d-md-block">
      <div className="row justify-content-start">
        {STATS.map(stat => (
          <div key={stat.id} className="col">
            <div className="stat my-2 mx-sm-auto mx-lg-0 ps-5 d-flex align-items-center text-dark">
              <h2 className="fs-1 mb-0">{stat.title}</h2>
              <p className="w-25 ps-3 text-info mb-0">{stat.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats
