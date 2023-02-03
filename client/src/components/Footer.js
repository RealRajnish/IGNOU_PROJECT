import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../styles/Button";
import { FaGithub, FaInstagram, FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-content">
        <h3>CutePets.com</h3>
        <p>
          Dear Customer you are very valueable for us, Feel free to contact us for any kind of information / suggestion regarding any of our services. You can contact us using any of the links given below:
        </p>
        <ul className="socials">
          <li>
            <a href="https://www.instagram.com/rajnish.sharma777/" target="_blank"> <FaInstagram className="icons" /> </a>
          </li>
          <li>
            <a href="https://github.com/RealRajnish" target="_blank"> <FaGithub className="icons" /> </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/real-rajnish-kumar/" target="_blank"> <FaLinkedin className="icons" /> </a>
          </li>
          <li>
            <a href="mailto:rajnishf3@gmail.com" target="_blank"> <MdEmail className="icons" /> </a>
          </li>
          <li>
            <a href="tel:+917210729658" target="_blank"> <FaPhoneSquareAlt className="icons " /> </a>
            {/* <div >+91 7210729658</div> */}

          </li>
          <li>+91 7210729658</li>
        </ul>
        <div className="footer-bottom">
          <p>copyright &copy; {new Date().getFullYear()} all rights reserved by <span>Rajnish Kumar</span></p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 /* position: absolute; */
 bottom: 0;
 left: 0;
 right: 0;
 background: ${({ theme }) => theme.colors.bg};
 height: auto;
 width: 100vw;
 padding: 4rem 3rem;
 margin-top: 10rem;
 color: #000;
 

 .footer-content{
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   text-align: center;

   h3{
     font-size: 2.5rem;
     font-weight: 400;
     text-transform: capitalize;
     line-height: 3rem;
   }

   p{
     max-width: 100rem;
     margin: 1rem auto;
     line-height: 2.8rem;
     font-size: 2rem;
   }
 }

.socials{
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 3rem 0;

  li{
    margin: 0 1rem;
    font-size: 1.4rem;
  }

  a{
    text-decoration: none;
    color: #000;

    .icons{
      font-size: 3.2rem;
      transition: color .4s ease;
    }
  }

  a:hover ,a:active .icons{
    color: ${({ theme }) => theme.colors.helper};
  }
}

.footer-bottom{
  p{
    text-transform: capitalize;
  }

  span{
    text-transform: uppercase;
  }
}
`;

export default Footer;
