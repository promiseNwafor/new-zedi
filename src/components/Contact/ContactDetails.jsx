import React from "react"
import { Link } from "gatsby"
import linkedin from "../../assets/svgs/linkedin.svg"
import facebook from "../../assets/svgs/facebook.svg"
import instagram from "../../assets/svgs/instagram.svg"
import twitter from "../../assets/svgs/twitter.svg"
import phone from "../../assets/icons/phone.svg"
import mail from "../../assets/icons/mail.svg"
import location from "../../assets/icons/location.svg"

const ContactDetails = () => {
  return (
    <div className="contact-details container py-5">
      <div className="row pb-2 pt-md-5">
        <div className="col">
          <h1 className="fw-bolder text-dark">Contact details</h1>
        </div>
      </div>
      <div className="row text-title justify-content-between align-items-center">
        <div className="col-md-7">
          <p className="mb-4">
            Give us a call or drop by anytime, we endeavour to answer all
            enquiries within 24 hours on business days. We will be happy to
            answer your questions.
          </p>
          <div className="social d-none d-md-block">
            <Link>
              <img className="img-fluid" src={facebook} alt="facebook" />
            </Link>
            <Link>
              <img className="ms-3 img-fluid" src={twitter} alt="twitter" />
            </Link>
            <Link>
              <img className="ms-3 img-fluid" src={instagram} alt="instagram" />
            </Link>
            <Link>
              <img className="ms-3 img-fluid" src={linkedin} alt="linkedin" />
            </Link>
          </div>
        </div>
        <div className="col-md-5">
          <li className="pb-3">
            <img className="me-3" src={phone} alt="phone" />
            <a href="tel:+01 2333 1222 21">
              +01 2333 1222 21/ (0001) 111 012 033
            </a>
          </li>
          <li className="pb-3">
            <img className="me-3" src={mail} alt="mail" />
            <a href="mailto:hello@zedi.africa">Hello@zedi.africa</a>
          </li>
          <li className="pb-3">
            <img className="me-3" src={location} alt="location" />
            <a href="">
              7, Akin George Street, Obanikoro Estate, Obanikoro, Lagos.
            </a>
          </li>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
