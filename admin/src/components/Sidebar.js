import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";

const Sidebar = ({ isExpanded, setExpanded }) => {
  return (
    <Wrapper>
      <div
        className={isExpanded ? "expanded sidebar-nav-btn" : "sidebar-nav-btn"}
      >
        <div className="admin-logo">ADMIN</div>
        <GiHamburgerMenu
          className="menu-btn"
          onClick={() => {
            setExpanded(!isExpanded);
          }}
        />
      </div>
      <div className={isExpanded ? "expanded nav-links" : "nav-links"}>
        <nav>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/form">Add Product</NavLink>
          </li>
        </nav>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  .sidebar-nav-btn {
    position: absolute;
    right: 0.2rem;
    padding: 0.2rem;
    font-size: 2.5rem;

    .menu-btn {
      font-size: 4rem;
    }

    .admin-logo {
      display: none;
    }
  }

  .sidebar-nav-btn.expanded {
    .admin-logo {
      display: inline-block;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-grow: 1;
    min-height: 100vh;
    li {
      list-style: none;
      padding: 1rem;
      font-size: 2rem;
      display: none;
    }
  }

  .expanded.nav-links {
    nav li {
      display: inline-block;
    }
  }
`;

export default Sidebar;
