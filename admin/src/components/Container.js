import React from "react";
import styled from "styled-components";
import Form from "./Form";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const Container = () => {
  return (
    <Wrapper>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
      <div className="temp">lorem54kjhkjhjkkjhhkjh</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-content: center;

  height: 100vh;
  overflow-y: scroll;

  /* for scrollbar  customazation start */
  /* scrollbar-color: rgb(98 84 243);
  scrollbar-width: thin;
  section::-webkit-scrollbar {
    width: 1.5rem;
  }

  section::-webkit-scrollbar-track {
    background-color: rgb(24 24 29);
  }

  section::-webkit-scrollbar-thumb {
    background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
  } */

  /* scrollbar customzation end  */

  /* place-items: center; */

  /* margin-top: 2rem; */
`;
export default Container;
