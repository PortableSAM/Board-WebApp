import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const WeatherForm = props => {
  return (
    <Row>
      <Col />
      <Col lg={6} md={"auto"} sm={"auto"}>
        <Form onSubmit={props.loadWeather}>
          <Row>
            <Col />
            <Col md={"auto"} sm={"auto"}>
              <Form.Control
                type="text"
                placeholder="City"
                name="City"
                autoComplete="off"
              />
            </Col>
            <Col md={"auto"} sm={"auto"}>
              <Button variant="outline-warning">Get Weahter</Button>
            </Col>
            <Col />
          </Row>
        </Form>
      </Col>
      <Col />
    </Row>
  );
};

export default WeatherForm;
