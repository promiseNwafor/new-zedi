import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FEATURED } from "./constants"

const Featured = () => {
  return (
    <div className="Featured container py-5 mb-md-5">
      <div className="row">
        {FEATURED.map(item => (
          <div key={item.id} className="col-md-4 py-2 text-info">
            <StaticImage
              src="../assets/svgs/featured.svg"
              formats={["auto", "webp", "avif"]}
              alt="Featured image"
            />
            <h3 className="py-2 pt-4 text-dark">{item.title}</h3>
            <p className="pe-md-4">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Featured
