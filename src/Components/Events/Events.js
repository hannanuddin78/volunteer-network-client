import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const Events = (props) => {
  const { img, title, date, _id } = props.event;

  const handleCancel = (event, id) => {
    console.log(id);
    fetch("https://rocky-fortress-91922.herokuapp.com/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          props.updateEvent(id);
        }
      });
  };

  return (
    <>
      <Col md={6}>
        <Card className="event-container">
          <Row>
            <Col md={4}>
              <img src={img} alt="" />
            </Col>
            <Col md={5} className="event-container-detail">
              <h4>{title}</h4>
              <h6>{date}</h6>
            </Col>
            <Col md={3}>
              <Button onClick={(e) => handleCancel(e, _id)} variant="secondary">
                Cancel
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default Events;
