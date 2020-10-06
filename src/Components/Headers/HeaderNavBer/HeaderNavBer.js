import React from "react";
import { Button, Col, Nav, Row } from "react-bootstrap";
import logo from "../../../image/logo.png";

const HeaderNavBer = () => {
  return (
    <Row className="HeaderNavBer-container">
      <Col md={4} className="navBer-logo">
        <img src={logo} alt="" />
      </Col>
      <Col md={8}>
        <Nav className="float-right">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/donation">Donation</Nav.Link>
          <Nav.Link href="/event">Events</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Button
            variant="primary"
            size="sm"
            className="navBer-btn btn-margin-right"
          >
            Register
          </Button>
          <Button variant="secondary" size="sm" className="navBer-btn">
            Admin
          </Button>
        </Nav>
      </Col>
    </Row>
  );
};

export default HeaderNavBer;
