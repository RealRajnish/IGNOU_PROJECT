import styled from "styled-components";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import { GlobalStyle } from "./GlobalStyle";
import Form from "./components/Form";
import Home from "./components/Home";

function App() {
  const [isExpanded, setExpanded] = useState("false");

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Wrapper>
          <div
            className={isExpanded ? "container expanded" : "container collapse"}
          >
            <div className={isExpanded ? "header expanded" : "header collapse"}>
              <Sidebar isExpanded={isExpanded} setExpanded={setExpanded} />
            </div>
            <div className="main">
              <Container />
              {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/form" element={<Container />} />
              </Routes> */}
            </div>
          </div>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

const Wrapper = styled.section`
  border-radius: 1rem;
  overflow-x: hidden;

  .container {
    display: grid;
  }
  .expanded {
    grid-template-columns: 1fr 4fr;
  }
  .collapse {
    grid-template-columns: 1fr 12fr;
  }
  .header {
    min-height: 100vh;
  }
  .header.expanded {
    background-color: papayawhip;
  }

  .header.collapse {
    background-color: aqua;
  }

  .main {
    background: linear-gradient(#f5f7fa, #c3cfe2);
  }

  @media (max-width: 768px) {
    /* .expanded {
      grid-template-columns: 1fr 3fr;
    } */
    .collapse {
      grid-template-columns: 1fr 7fr;
    }
  }
  @media (max-width: 959px) {
    .collapse {
      grid-template-columns: 1fr 7fr;
    }
  }
`;

export default App;
