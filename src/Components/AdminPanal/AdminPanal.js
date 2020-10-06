import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import eventData from "../../eventData/eventdata";
import VolunteerLogo from "../VolunteerLogo/VolunteerLogo";

const AdminPanal = () => {
  const handelEventSubmit = () => {
    // const title = document.getElementById("title").value;
    // const data = document.getElementById("data").value;
    // const description = document.getElementById("description").value;
    // const total = { title, description };
    fetch("https://rocky-fortress-91922.herokuapp.com/addEvent", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(eventData),
    });
  };

  return (
    <>
      <Row>
        <Col md={3}>
          <VolunteerLogo></VolunteerLogo>
        </Col>
        <Col md={9}>
          <h2 className="event-heading">Add event</h2>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <h6 className="admin-textarea">Volunteer register list</h6>
          <p className="admin-textarea">Add event</p>
        </Col>
        <Col md={9}>
          <Form action="">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridTitle">
                <Form.Label>Event Title</Form.Label>
                <Form.Control
                  id="title"
                  type="text"
                  placeholder="Enter Title"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDate">
                <Form.Label>Event Date</Form.Label>
                <Form.Control id="date" type="text" placeholder="Enter Date" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  id="description"
                  placeholder="Enter Description"
                  as="textarea"
                  rows="3"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.File id="exampleFormControlFile1" label="Banner" />
              </Form.Group>
            </Form.Row>

            <Button onClick={handelEventSubmit} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default AdminPanal;
//  action="/addEvent" method="post"
