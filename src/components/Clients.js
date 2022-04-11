import React from "react"
import { CLIENTS } from "./constants"

const Clients = () => {
  return (
    <div className="container">
      <div className="row">
        {CLIENTS.map(item => (
          <div key={item.id} className="col d-flex justify-content-center">
            <img className="img-fluid" src={item.src} alt={item.src} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clients
