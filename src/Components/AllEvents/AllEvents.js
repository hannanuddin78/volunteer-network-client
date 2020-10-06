import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllEvents = (props) => {
  const { img, title, eventId } = props.event;
  return (
    <Col md={3}>
      <Link to={"/registration/" + eventId}>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="text-center card-body-title">
              {title}
            </Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default AllEvents;
