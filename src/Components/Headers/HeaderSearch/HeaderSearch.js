import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";

const HeaderSearch = () => {
  return (
    <Row className="HeaderSearch-container">
      <Col sm={12}>
        <div className="text-center">
          <h1 className="text-uppercase">I grow by helping people in need.</h1>
        </div>
      </Col>
      <Col sm={12}>
        <Form className="search-content">
          <InputGroup>
            <FormControl
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
        </Form>
      </Col>
    </Row>
  );
};

export default HeaderSearch;
