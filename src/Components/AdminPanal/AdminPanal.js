import React from "react";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import VolunteerLogo from "../VolunteerLogo/VolunteerLogo";

const AdminPanal = () => {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const history = useHistory();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error("AHHHHHHHH!!");
    };
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch("https://rocky-fortress-91922.herokuapp.com/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          sessionStorage.setItem("upImgLink", result.url);
        });
      setFileInputState("");
      setPreviewSource("");
      uploadEventSubmitData();
    } catch (err) {
      console.error(err);
    }
  };

  const uploadEventSubmitData = async () => {
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;
    const img = sessionStorage.getItem("upImgLink");
    const total = { title, date, description, img };
    try {
      await fetch("https://rocky-fortress-91922.herokuapp.com/addEvent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(total),
      })
        .then((res) => res.json())
        .then((dt) => {
          console.log(dt);
          sessionStorage.removeItem("upImgLink");
          history.push("/");
        });
    } catch (err) {
      console.error(err);
    }
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
          <Link to="/">
            <h6 className="admin-textarea">Volunteer register list</h6>
          </Link>
          <p className="admin-textarea">Add event</p>
        </Col>
        <Col md={9}>
          <Row>
            <Col md={12}>
              <Form onSubmit={handleSubmitFile}>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Event Title</Form.Label>
                    <Form.Control id="title" type="text" placeholder="Enter Title" />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Event Date</Form.Label>
                    <Form.Control id="date" type="text" placeholder="Enter Date" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      id="description"
                      placeholder="Enter Description"
                      as="textarea"
                      rows="3"
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.File
                      id="fileInput"
                      type="file"
                      name="image"
                      onChange={handleFileInputChange}
                      value={fileInputState}
                    />
                  </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="ml-5">
              {previewSource && (
                <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default AdminPanal;
