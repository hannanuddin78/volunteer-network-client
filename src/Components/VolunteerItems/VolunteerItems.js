import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AllEvents from "../AllEvents/AllEvents";

const VolunteerItems = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://rocky-fortress-91922.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <Container>
      <Row>
        {events.map((event) => (
          <AllEvents event={event} key={event._id} />
        ))}
      </Row>
    </Container>
  );
};

export default VolunteerItems;
