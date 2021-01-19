import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AllEvents from "../AllEvents/AllEvents";
import loader from "../../image/loding/200.gif"

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
        {events.length < 1 && (
          <img src={loader} style={{ width: "300px", margin: "auto" }} alt="" />
        )}
      </Row>
    </Container>
  );
};

export default VolunteerItems;
