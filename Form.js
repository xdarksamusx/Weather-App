import React, { useState, useEffect } from "react";
import styled, { css, createGlobalStyle } from "styled-components";

const SearchIcon = styled.svg`
  fill: currentColor;

  display: inline-block;
  position: absolute;
  z-index: 999;
  height: 10px;
  width: 10px;
  top: 7px;
  left: 8px;
`;

const StyledForm = styled.form`
  display: flex;
  margin: 50px auto;
  position: relative;
`;

const Input = styled.input`
  background: #dbdbe0;
  width: 270px;
  height: 20px;
  padding-left: 20px;

  border-radius: 7px;
  border: none;
`;

const InputContainer = styled.div`
  position: relative;
  margin-right: 10px;
`;
const Form = ({
  inputValue,
  setInputValue,
  cities,
  setCities,
  city,
  setCity,
  updateWeatherData,
  setUpdateWeatherData,
  getWeatherData
}) => {
  const handleChange = (value) => {
    setInputValue(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newCity = inputValue;

     

 
      
 
    // const isDuplicateEntry = cities.find((city) => city.cityName === newCity);
    // if (isDuplicateEntry) {
    //   setInputValue("");
    //   return;
    // }
    console.log("form city  " , city)
    setCity({ cityName: newCity });

     setCities(prevList => [...prevList, { cityName: newCity }]);
    console.log("form city  array ", cities)

 
    
    setInputValue('')

   };

   useEffect(() => {
     console.log("more cities")
   }, [cities]);


  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <InputContainer>
          <SearchIcon
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </SearchIcon>

          <Input
            type="text"
            placeholder=" Search for Location..."
            onChange={(e) => handleChange(e.target.value)}
            value={inputValue}
          />
        </InputContainer>
      </StyledForm>
    </>
  );
};

export default Form;
