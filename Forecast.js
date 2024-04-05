import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import styled, { css, createGlobalStyle } from "styled-components";

import axios from "axios";
import Navigation from "./Navigation";

const Conditions = styled.div`
  margin-left: 50px;
  border-top: 1px black solid;

  gap: 22px;
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 400px;
`;

const Headline = styled.h2`
  text-align: center;
`;

const RowOne = styled.div`
  background-size: cover;
  background-image: url(${(props) => props.url});
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const BoxOne = styled.div`
  height: 300px;
  width: 200px;
`;

const Row = styled.div`
  gap: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  background-size: cover;
  background-image: url(${(props) => props.url});
  width: 250px;
  height: 120px;
  border: 1px solid black;
  text-align: center;
`;

const Forecast = ({ city  }) => {



  const {
    currentWeather,
    currentTemperature,
    cityName,
    feels_Like,
    description,
    max_Temperature,
    iconURL,
    min_Temperature,
    countryCode,
    regularURL,
    secondaryUrl
  } = city;

 
  return (
    <>

    
      <Conditions>
        <Headline>Here you can find a world wide weather forecast</Headline>
        <RowOne url={regularURL}>
          <BoxOne>
            <p>
              {currentWeather}{" "}
              <span>
                {" "}
                <img src={`https://${iconURL}`} />
              </span>{" "}
            </p>
            <p> {currentTemperature} °C </p>
            <p> {cityName} </p>
          </BoxOne>
        </RowOne>

        <Row>
          <Box url={secondaryUrl}>
            <p> Feels Like </p>
            <p> {feels_Like} °C </p>
            <p> {description} </p>
          </Box>
          <Box url={secondaryUrl}>
            {" "}
            <p> Max Temp </p>
            <p>{max_Temperature} °C </p>
            <p> {description} </p>{" "}
          </Box>
        </Row>

        <Row>
          <Box url={secondaryUrl}>
            <p> Min Temp </p>
            <p>{min_Temperature} °C </p>
            <p> {description} </p>
          </Box>
          <Box url={secondaryUrl}>
            <p> Country </p>
            <p>{countryCode}</p>
            <p> {description} </p>
          </Box>
        </Row>
      </Conditions>
    </>
  );
};

export default Forecast;

 
