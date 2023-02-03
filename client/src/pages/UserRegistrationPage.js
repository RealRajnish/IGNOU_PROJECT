import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import Button from '../styles/Button';
import axios from 'axios';

const UserRegistrationPage = () => {
    let Navigate = useNavigate();

    const [user, setUser] = useState({
        name: "", email: "", phone: "", address: "", password: "", cpassword: ""
    })

    const handleInputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, phone, address, password, cpassword } = user;

        if (password === cpassword) {
            const resp = await axios.post("/registeruser", { name, email, phone, address, password, cpassword });
            // debugger
            console.log(resp.data);
            if (resp.data.code === 1) {
                window.alert("Email address is invalid");
            } else {
                window.alert("Registration successfull")
                Navigate("/loginpage");
            }
        }
        else {
            window.alert("Password mismatched");
        }
        console.log("Register Button Clicked......")
    }

    return (
        <Wrapper>
            <div className="container">

                <div className="main_div">
                    <div className="box">
                        <div className="icon-div">
                            <FaUserCircle className='icon' />
                        </div>
                        <h2>Registration</h2>
                        <form method='POST'>
                            <div className="inputBox">
                                <input type="string" name='name' id='username' value={user.name} onChange={handleInputs} autoComplete='off' required />
                                <label htmlFor="username">Name</label>
                            </div>
                            <div className="inputBox">
                                <input type="email" name='email' id='email' value={user.email} onChange={handleInputs} autoComplete='off' required />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="inputBox">
                                <input type="number" name='phone' id='phone' value={user.phone} onChange={handleInputs} autoComplete='off' required />
                                <label htmlFor="phone">Phone</label>
                            </div>
                            <div className="inputBox">
                                <input type="string" name='address' id='address' value={user.address} onChange={handleInputs} autoComplete='off' required />
                                <label htmlFor="address">Address</label>
                            </div>
                            <div className="inputBox">
                                <input type="password" name='password' id='password' value={user.password} onChange={handleInputs} autoComplete='off' required />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="inputBox">
                                <input type="password" name='cpassword' id='cpassword' value={user.cpassword} onChange={handleInputs} autoComplete='off' required />
                                <label htmlFor="cpassword">Confirm Password</label>
                            </div>

                            <input type="submit" onClick={PostData} value="Sign Up" />
                            <div className="links">
                                <p>Already Registered Click here <NavLink to="/loginpage">
                                    Login
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
.container{
    display: block;
}
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
    position: relative;
    display: block;
    display: flex;
    justify-content: center;
}

.box{
    width: 40rem;
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
`;

export default UserRegistrationPage