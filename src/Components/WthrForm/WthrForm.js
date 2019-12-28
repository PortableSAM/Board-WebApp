import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./WthrForm.css";

export const Form = props => {
  return (
    <Container>
      <Row>
        <Col />
        <Col lg={8} md={"auto"} sm={"auto"}>
          <form onSubmit={""}>
            <div>{/*{props.error ? error() : ""}*/}</div>
            <Row>
              <Col lg={12} md={"auto"} sm={"auto"}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="city"
                  name="city"
                  autoComplete="off"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Country"
                  name="Country"
                  autoComplete="off"
                />
                <button className="btn btn-warning">Get Weather</button>
              </Col>
            </Row>
          </form>
        </Col>
        <Col />
      </Row>
    </Container>
  );
};

export default Form;
