import React from "react"
import { Carousel } from "react-bootstrap"
import ized from "../../assets/images/ized.jpg"
import elizabeth from "../../assets/images/elizabeth.jpg"
import jude from "../../assets/images/jude.jpg"

const Leadership = () => {
  return (
    <div className="container py-md-5">
      <div className="row text-dark py-5">
        <div className="col-12">
          <h1 className="fw-bolder">Our leadership</h1>
        </div>
      </div>
      <div className="row d-none d-md-flex justify-content-between align-items-center">
        <div className="col-md-4 p-3">
          <img className="img-fluid" src={ized} alt="ized" />
        </div>
        <div className="col-md-4 p-3">
          <img className="img-fluid" src={elizabeth} alt="elizabeth" />
        </div>
        <div className="col-md-4 p-3">
          <img className="img-fluid" src={jude} alt="jude" />
        </div>
      </div>
      <Carousel className="d-md-none">
        <Carousel.Item className="">
          <div className="col-md-4 m-3">
            <img className="img-fluid" src={ized} alt="ized" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="">
          <div className="col-md-4 m-3">
            <img className="img-fluid" src={elizabeth} alt="elizabeth" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="">
          <div className="col-md-4 m-3">
            <img className="img-fluid" src={jude} alt="jude" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Leadership
