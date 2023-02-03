import React, { useState } from 'react'
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../styles/Button';
import { FaUserCircle } from "react-icons/fa";
import { useUserContext } from "../contexts/userContext"
import axios from 'axios';

const LoginPage = () => {
    const { checkLoggedInStatus } = useUserContext();

    let Navigate = useNavigate();
    const [userLogin, setuserLogin] = useState({
        email: "", password: ""
    })

    const handleInputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setuserLogin({ ...userLogin, [name]: value })
    }
    const SignInBtn = async (e) => {
        e.preventDefault();

        const { email, password } = userLogin;
        try {
            const resp = await axios.post("/signin", { email, password });
            console.log(resp.data);
            if (resp.data.code === 1) {
                window.alert("Please fill all fields properly");
            }
            if (resp.data.code === 3) {

                window.alert("Signed In Successfully ...!!")
                Navigate("/");
            }
            checkLoggedInStatus();
        } catch (error) {
            window.alert("Invalid Credentials..................")
            console.log(error);
        }
    }


    return (
        <Wrapper>
            <div className="container">

                <div className="main_div">
                    <div className="box">
                        <div className="icon-div">
                            <FaUserCircle className='icon' />
                        </div>
                        <h2>Login</h2>
                        <form action="">
                            <div className="inputBox">
                                <input type="email" onChange={handleInputs} name='email' id='email' autoComplete='off' required />
                                <label htmlFor="email">email</label>
                            </div>
                            <div className="inputBox">
                                <input type="password" onChange={handleInputs} name='password' id='password' autoComplete='off' required />
                                <label htmlFor="password">password</label>
                            </div>
                            <input type="submit" name='' onClick={SignInBtn} value="login" />
                            <div className="links">
                                <p>New User Click here <NavLink to="/signuppage">
                                    Register
                                </NavLink></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
/* .container{
    padding: 9rem 0rem;
    border: 2px black;
} */
.links{
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}
.icon-div{
    display: flex;
    justify-content: center;
    .icon{
        font-size: 5rem;
    }
}

box-sizing: border-box;

.main_div{
    width: 100%;
    /* min-height: 100vh;  */
    position: relative;
    display: block;
    display: flex;
    justify-content: center;
    /* align-items: center;  */
}

.box{
    min-width: 40rem;
    /* max-width: 800rem; */
    margin: 5rem 0;
    padding: 5rem;
    background: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
}
.box h2{
    margin-bottom: 3rem;
    /* color: #fff; */
    text-align: center;
    /* text-transform: capitalize; */
    text-transform: none;
}

.box .inputBox{
    position: relative;
}

.box .inputBox input{
    width: 100%;
    padding: 1rem;
    font-size: 1.6rem;
    /* color: #fff; */
    letter-spacing: .1rem;
    margin-bottom: 3rem;
    border: none;
    border-bottom: .1rem solid #000;
    background: transparent;
    outline: none;
}

.box .inputBox label{
    position: absolute;
    top: 0;
    left: 1rem;
    letter-spacing: .1rem;
    padding: 1rem 0;
    font-size: 1.6rem;
    color: rgba(0,0,0,.5);
    transition: .5s;
}

.box .inputBox input:focus ~ label, .box .inputBox input:valid ~ label{
    top: -2rem;
    left: 1rem;
    color: #03a9f4;
    font-size: 1.2rem;
}
input, textarea{
    text-transform: none;
}

/* @media (max-width: ${({ theme }) => theme.media.mobile}) {
.box{
    top:20%;
}
} */

`;

export default LoginPage