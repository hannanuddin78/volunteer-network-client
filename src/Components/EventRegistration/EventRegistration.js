import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import Events from "../Events/Events";
import { UserContext } from "../../App";
import VolunteerLogo from "../VolunteerLogo/VolunteerLogo";
import { Link } from "react-router-dom";

const EventRegistration = () => {
  const [registerEvent, setRegisterEvent] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(registerEvent);
  useEffect(() => {
    fetch(
      "https://rocky-fortress-91922.herokuapp.com/seeEvents?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setRegisterEvent(data));
  }, []);

  const updateEvent = (id) => {
    const update = registerEvent.filter((event) => event._id !== id);
    setRegisterEvent(update);
  };

  return (
    <Container>
      <Row className="HeaderNavBer-container">
        <Col md={4} className="navBer-logo">
          <VolunteerLogo></VolunteerLogo>
        </Col>
        <Col md={8}>
          <Nav className="menubar-nav event-navber float-right">
            <Link to="/home">Home</Link>
            <Link to="/donation/">Donation</Link>
            <Link to="/event">Events</Link>
            <Link to="/blog">Blog</Link>
            <h4>{loggedInUser.name}</h4>
          </Nav>
        </Col>
      </Row>
      <Row>
        {registerEvent.map((event) => (
          <Events event={event} updateEvent={updateEvent}></Events>
        ))}
      </Row>
    </Container>
  );
};

export default EventRegistration;
