import * as React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import logo from "../assets/icons/logo.svg"

const NavComponent = () => (
  <Navbar className="container-fluid" bg="light" expand="lg">
    <Container className="d-flex justify-content-between">
      <Navbar.Brand>
        <Link to="/">
          <img src={logo} className="img-fluid mb-0" alt="logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="" id="basic-navbar-nav">
        <Nav className="navbar-collapse text-center">
          <ul className="navbar-nav mb-0 mb-lg-0">
            <li className="nav-item mb-0">
              <Link className="nav-link mx-3 text-dark" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item mb-0">
              <Link className="nav-link mx-3 text-dark" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item mb-0">
              <Link className="nav-link mx-3 text-dark" to="/contact">
                Create Team
              </Link>
            </li>
            <li className="nav-item mb-0">
              <Link className="nav-link mx-3 text-dark" to="/about">
                Blog
              </Link>
            </li>
          </ul>
        </Nav>
        <div className="action-button text-center">
          <button className="btn btn-primary px-4 py-2">
            <Link className="text-light" to="/about">
              Contact Us
            </Link>
          </button>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default NavComponent
