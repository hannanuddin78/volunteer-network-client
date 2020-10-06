import React from "react";
import { Button, Col, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../image/logo.png";

const HeaderNavBer = () => {
  return (
    <Row className="HeaderNavBer-container">
      <Col md={4} className="navBer-logo">
        <img src={logo} alt="" />
      </Col>
      <Col md={8}>
        <Nav className="menubar-nav header-event-navber float-right">
          <Link to="/home">Home</Link>
          <Link to="/donation/">Donation</Link>
          <Link to="/event">Events</Link>
          <Link to="/blog">Blog</Link>
          <Button
            variant="primary"
            size="sm"
            className="button-pd navBer-btn btn-margin-right"
          >
            Register
          </Button>
          <Link to="/admin">
            <Button
              variant="secondary"
              size="sm"
              className="button-pd navBer-btn"
            >
              Admin
            </Button>
          </Link>
        </Nav>
      </Col>
    </Row>
  );
};

export default HeaderNavBer;
