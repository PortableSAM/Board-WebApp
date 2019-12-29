import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Weather.css";

export default class WeatherApp extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col />
          <Col lg={4} md={"auto"} sm={"auto"}>
            <h3>Weather Infomation</h3>
          </Col>
          <Col />
        </Row>
        <hr />
      </Container>
    );
  }
}
