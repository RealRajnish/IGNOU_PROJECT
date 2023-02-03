import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Button from '../styles/Button';
import { FaStethoscope } from "react-icons/fa";
import { useUserContext } from '../contexts/userContext';
import axios from 'axios';

const BookAppointment = () => {
    const { userLoggedIn, rootUser } = useUserContext();
    let Navigate = useNavigate();

    const [state, setState] = useState({
        title: "", breed: "", age: "", clinic: "Tara Clinic , Delhi", appointment: ""
    })


    const handleInputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setState({ ...state, [name]: value })
    }

    const customer_details = rootUser;
    const animal_detals = state;

    const clicked = async (e) => {
        e.preventDefault();
        console.log(`appointment button clicked`);
        if (userLoggedIn) {
            try {
                const resp = await axios.post("/addAppointments", { customer_details, animal_detals });
                console.log(resp);
                if (resp.status === 200 && resp.data.code === "success") {
                    window.alert(`${resp.data.msg}`);
                    Navigate("/");
                } else {
                    window.alert("please fill all fields properly")
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            Navigate("/loginPage");
        }
    }

    return (
        <Wrapper>
            <div className="container">
                {/* <div className="nav-link">
                    <NavLink to="/strayAnimalPage"> <Button>Book Your Appointments Here</Button> </NavLink>
                </div> */}

                <div className="main_div">
                    <div className="box">
                        <div className="icon-div">
                            <FaStethoscope className='icon' />
                        </div>
                        <h2>Book Your Appointments Here</h2>
                        <form action="">
                            <div className="inputBox">
                                <input type="text" onChange={handleInputs} name='title' id='title' autoComplete='off' required />
                                <label htmlFor="title">Name of Animal</label>
                            </div>
                            <div className="inputBox">
                                <input type="text" onChange={handleInputs} name='breed' id='breed' autoComplete='off' required />
                                <label htmlFor="breed">Breed of Animal</label>
                            </div>
                            <div className="inputBox">
                                <input type="text" onChange={handleInputs} name='age' id='age' autoComplete='off' required />
                                <label htmlFor="age">Age of Animal</label>
                            </div>
                            <div className="inputBox">
                                <select className="form-control" name="clinic" id="clinic" onChange={handleInputs} >
                                    <option value="Tara Clinic , Delhi">Tara Clinic , Delhi</option>
                                    <option value="Manchanda Clinic, Delhi">Manchanda Clinic, Delhi</option>
                                    <option value="Naveen Clinic, Delhi">Naveen Clinic, Delhi</option>
                                    <option value="Max Clinic, Delhi">Max Clinic, Delhi</option>
                                </select>
                                <label htmlFor="clinic">Enter its location</label>
                            </div>

                            <div className="inputBox">
                                <input type="Date" onChange={handleInputs} name='appointment' id='appointment' autoComplete='off' required />
                                <label htmlFor="appointment">Date of Appointment</label>
                            </div>

                            {/* <input type="submit" name='' value="Book Appointment" /> */}
                            <Button onClick={clicked} >Book Appointment</Button>
                            {/* <div className="links">
                                <p>Want to Adapt Stray Animals <NavLink to="/strayAnimalPage">
                                    Click Here
                                </NavLink></p>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </Wrapper>

    )
}

const Wrapper = styled.section`
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
input[type="submit"]{
    max-width: 30rem;
}

.form-control{
    width: 100%;
    padding: 1rem;
    font-size: 1.6rem;
    letter-spacing: .1rem;
    margin-bottom: 3rem;
    border: none;
    border-bottom: .1rem solid #000;
    background: transparent;
    outline: none;
}

.box .inputBox select:focus ~ label, .box .inputBox select:valid ~ label{
    top: -2rem;
    left: 1rem;
    color: #03a9f4;
    font-size: 1.2rem;
}
.box .inputBox input[type="Date"] ~ label{
    top: -2rem;
    left: 1rem;
    color: #03a9f4;
    font-size: 1.2rem;
}

`;

export default BookAppointment