import React from "react"
import { Link } from "gatsby"
import logo from "../assets/icons/logo.svg"
import linkedin from "../assets/svgs/linkedin.svg"
import facebook from "../assets/svgs/facebook.svg"
import instagram from "../assets/svgs/instagram.svg"
import twitter from "../assets/svgs/twitter.svg"

const Footer = () => {
  return (
    <footer className="text-title">
      <div className="container mt-5 pt-md-5 pb-4">
        <div className="row">
          <div className="col-md-7">
            <Link to="/">
              <img src={logo} className="mb-5 mb-md-0 w-25" alt="logo" />
            </Link>
          </div>
          <div className="col-md-2">
            <h3 className="fw-bolder">Zedi</h3>
            <ul className="p-0">
              <li className="my-3">
                <Link className="" to="/about">
                  About
                </Link>
              </li>
              <li className="my-3">
                <Link className="" to="/about">
                  Services
                </Link>
              </li>
              <li className="my-3">
                <Link className="" to="/about">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="mb-3 fw-bolder">Contact us</h3>
            <p>
              <a href="tel:+012333122221">
                +01 2333 1222 21/ (0001) 111 012 033
              </a>
            </p>
            <p>
              <a href="mailto:hello@zedi.africa">hello@zedi.africa </a>
            </p>
            <p>
              <a href="">
                7, Akin George Street, Obanikoro Estate, Obanikoro, Lagos.
              </a>
            </p>
          </div>
          <div className="col-12 mt-md-5 pt-3">
            <hr />
            <div className="d-md-flex justify-content-between">
              <p className="copyright pt-2">
                © Copyright 2022 - Zedi Africa Limited, All rights reserved.
              </p>
              <div className="">
                <img src={facebook} alt="facebook" />
                <img className="ms-3" src={twitter} alt="twitter" />
                <img className="ms-3" src={instagram} alt="instagram" />
                <img className="ms-3" src={linkedin} alt="linkedin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
