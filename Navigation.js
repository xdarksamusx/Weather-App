
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import styled, { css, createGlobalStyle } from "styled-components";
import axios from "axios";
import Trash from "./trashIcon";
import RightArrow from "./RightArrow";
import Form from "../../src/Form/Form";
// const cities = ["london", "paris"]; // make this list dynamic, aka hate it as state in app

const GlobalStyles = createGlobalStyle`

body {
  /* max-width: 340px;
  max-height: 100vh;
  border-right: black 1px solid;
  border-bottom: black 1px solid; */

}

 h3, , h4 h6 , ul, li, img, p{
   margin: 0;
   padding: 0;
 }

 
`;

const ListItem = styled.li`
  overflow: visible;

  display: flex;
  align-items: center;
  gap: 66px;
  position: relative;
`;

const FlagContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #dbdbe0;

  width: 35px;
  height: 35px;
`;

const Country = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;

  &::before {
    margin-right: 0px;
    content: "";
    position: absolute;
    top: 15px;
    right: 321px;
    height: 40px;
    width: 8px;
    background: none;
  }
  &:hover::before {
    background-color: black;
    left: -10px;
  }
`;

const Flag = styled.img`
  width: 87%;
  height: 87%;
`;

const Temperature = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const Navigation = ({
  city,
  setCity,
  cities,
  setCities,
  setShowForecast,
  setInputValue,
  formSubmitted,
  setFormSubmitted,
  inputValue,
  showForecast,
  updateWeatherData,
  setUpdateWeatherData,
  getWeatherData 

}) => {
  return (
    <>
      <GlobalStyles />
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        formSubmitted={formSubmitted}
        setFormSubmitted={setFormSubmitted}
        city={city}
        setCity={setCity}
        cities={cities}
        setCities={setCities}
        updateWeatherData={updateWeatherData}
        setUpdateWeatherData={setUpdateWeatherData}
        getWeatherData={getWeatherData}
      >
        {" "}
      </Form>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {cities.map((city, index) => (
            <ListItem key={city.cityName}>
              <Country>
                <Trash cities={cities} setCities={setCities} index={index} />

                <FlagContainer>
                  <div></div>
                  <Flag
                    src={`https://flagsapi.com/${city.countryCode}/flat/64.png`}
                  />
                </FlagContainer>
                {city.countryCode}

                <Link to={`/city/${city.cityName}`}>{city.cityName}</Link>
              </Country>
              <Temperature>
                <h6> {city.currentTemperature} °C </h6>
                <RightArrow
                  index={index}
                  setCities={setCities}
                  cities={cities}
                  city={city}
                  setCity={setCity}
                  showForecast={showForecast}
                  setShowForecast={setShowForecast}
                ></RightArrow>
              </Temperature>
            </ListItem>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
