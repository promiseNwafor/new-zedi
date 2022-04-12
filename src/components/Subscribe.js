import React from "react"

const Subscribe = () => {
  return (
    <div className="text-white text-center container-fluid py-5 my-5">
      <div className="Subscribe container d-flex align-items-center py-5">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-md-9 m-auto">
            <h3 className="pb-2">Sign up for our monthly newsletter</h3>
            <p>
              Be a Zedi Insider, grow your knowledge, join 100s of Zedians, and
              get the recent trends, top industry news, freebies and offerings
              when you join our newsletter, we promise we don't spam
            </p>
            <div className="input-group mt-4">
              <input
                type="text"
                className="form-control py-2 me-1 me-md-2"
                placeholder="Enter your email address"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-primary px-3 px-md-4"
                type="button"
                id="button-addon2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
