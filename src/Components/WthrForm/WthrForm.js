import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./WthrForm.css";

export const Form = props => {
  return (
    <Col lg={8} md={"auto"} sm={"auto"}>
      <form onSubmit={""}>
        <div>{props.error ? error() : ""}</div>
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
            <Button variant="warning">Get Weather</Button>
          </Col>
        </Row>
      </form>
    </Col>
  );
};

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country...!
    </div>
  );
};

export default Form;
