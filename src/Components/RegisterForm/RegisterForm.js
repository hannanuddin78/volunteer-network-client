import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const { register, handleSubmit, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();

  useEffect(() => {
    fetch("https://rocky-fortress-91922.herokuapp.com/events/" + eventId)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, [eventId]);

  const onSubmit = (data) => {
    const registerEvent = {
      ...loggedInUser,
      title: event.title,
      img: event.img,
      date: event.date,
      register: data,
      registerTime: new Date(),
    };

    fetch("https://rocky-fortress-91922.herokuapp.com/registerEvent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          history.push("/event");
        }
      });
  };

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <Form className="register-form">
            <h3 className="text-center">Register as a Volunteer</h3>
            <Form.Group as={Col}>
              <Form.Control
                ref={register({ required: true })}
                defaultValue={loggedInUser.name}
                placeholder="Full Name"
                name="Name"
              />
              {errors.Name && <span className="error">Name is required</span>}
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                ref={register({ required: true })}
                defaultValue={loggedInUser.email}
                placeholder="Username or Email"
                name="Email"
              />
              {errors.Email && <span className="error">Email is required</span>}
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                ref={register({ required: true })}
                defaultValue={event.date}
                placeholder="Date"
                name="Date"
              />
              {errors.Date && <span className="error">Date is required</span>}
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                ref={register({ required: true })}
                placeholder="Desicription"
                name="Desicription"
              />
              {errors.Desicription && (
                <span className="error">Desicription is required</span>
              )}
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                ref={register({ required: true })}
                defaultValue={event.title}
                placeholder="Organize books at the library"
                name="title"
              />
              {errors.title && <span className="error">title is required</span>}
            </Form.Group>

            <Button onClick={handleSubmit(onSubmit)} as={Col} variant="primary">
              Registration
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
