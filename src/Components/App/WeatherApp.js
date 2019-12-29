import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WeatherForm from "../Form/Form";
import Api_Key from "../lib/Api_Key";
import "./Weather.css";

export default class WeatherApp extends Component {
  state = {
    Country: undefined,
    city: undefined,
    condition: undefined,
    temp_max: null,
    temp_min: null,
    wind: null,
    description: "",
    icon: undefined
  };

  getWeather = async e => {
    const city = e.target.Elements.City.value();

    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APP_ID=${Api_Key}`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
      });
  };

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
        <WeatherForm loadWeather={this.getWeather} />
      </Container>
    );
  }
}
