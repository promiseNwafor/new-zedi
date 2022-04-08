import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import logo from "../assets/icons/logo.svg"
import "./styles.scss"

const NavComponent = () => (
  <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="img-fluid mb-0" alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="navbar-collapse" id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul className="navbar-nav m-auto mb-0 mb-lg-0">
              <li className="nav-item mb-0">
                <Link className="nav-link mx-3 text-dark" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item mb-0">
                <Link className="nav-link mx-3 text-dark" to="/about">
                  Services
                </Link>
              </li>
              <li className="nav-item mb-0">
                <Link className="nav-link mx-3 text-dark" to="/about">
                  Create Team
                </Link>
              </li>
              <li className="nav-item mb-0">
                <Link className="nav-link mx-3 text-dark" to="/about">
                  Blog
                </Link>
              </li>
            </ul>
            <button className="btn btn-primary px-4 py-2">
              <Link className="text-light" to="/about">
                Contact Us
              </Link>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <nav className="navbar navbar-expand-lg container-fluid navbar-light">
      <div className="container py-2">
        <Link to="/">
          <img src={logo} className="img-fluid mb-0" alt="logo" />
        </Link>
        <button
          className="navbar-toggler text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav m-auto mb-0 mb-lg-0">
            <li className="nav-item mb-0">
              <Link className="nav-link mx-3 text-dark" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item mb-0">
              <Link className="nav-link mx-3 text-dark" to="/about">
                Services
              </Link>
            </li>
            <li className="nav-item mb-0">
              <Link className="nav-link mx-3 text-dark" to="/about">
                Create Team
              </Link>
            </li>
            <li className="nav-item mb-0">
              <Link className="nav-link mx-3 text-dark" to="/about">
                Blog
              </Link>
            </li>
          </ul>
          <div className="action-button">
            <button className="btn btn-primary px-4 py-2">
              <Link className="text-light" to="/about">
                Contact Us
              </Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </>
)

export default NavComponent
