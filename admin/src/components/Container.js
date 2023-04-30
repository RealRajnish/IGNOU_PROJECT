import React from "react";
import styled from "styled-components";
import Form from "./Form";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const Container = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-content: center;
  /* place-items: center; */

  margin-top: 2rem;
`;
export default Container;
