import React, { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Events from "../Events/Events";
import { UserContext } from "../../App";

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
      <Row>
        {registerEvent.map((event) => (
          <Events event={event} updateEvent={updateEvent}></Events>
        ))}
      </Row>
    </Container>
  );
};

export default EventRegistration;
