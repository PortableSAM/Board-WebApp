import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WthrForm from "../WthrForm/WthrForm";
import "./WthrApp.css";
import Wthr from "./Wthr";

export default class WthrApp extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col lg={2} md={"auto"} sm={"auto"}></Col>
            <Col lg={8} md={"auto"} sm={"auto"}>
              <h2>Weather Infomation</h2>
            </Col>
            <Col lg={2} md={"auto"} sm={"auto"}></Col>
          </Row>
          <Col lg={8}>
            <WthrForm />
          </Col>
          <Col lg={8}>
            <Wthr />
          </Col>
        </Container>
      </>
    );
  }
}
