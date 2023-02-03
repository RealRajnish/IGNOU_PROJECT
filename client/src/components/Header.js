import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from './Navbar';

const Header = () => {
  return (
    <Wrapper>
      <NavLink to="/">
        <figure>
          <img src="/images/logo1.svg" alt="logo" className='logo' />
        </figure>
      </NavLink>
      <Navbar />
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;

export default Header