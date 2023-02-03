import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../styles/Button';
import { useUserContext } from '../contexts/userContext';
import { GiSittingDog } from "react-icons/gi";
import axios from 'axios';

const AddStrayAnimalPage = () => {
    const { userLoggedIn, rootUser } = useUserContext();
    let Navigate = useNavigate();

    const [StrayState, setStrayState] = useState({
        title: "", breed: "", age: "", location: ""
    })


    const handleInputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setStrayState({ ...StrayState, [name]: value })
    }

    const clicked = async (e) => {
        e.preventDefault();

        console.log(`Puchase Btn Clicked with id : `);
        const stray_animal_info = StrayState;
        const added_by = rootUser;

        if (userLoggedIn) {
            try {
                const resp = await axios.post("/reqRegisterStray", { stray_animal_info, added_by });
                console.log(resp.data);
                window.alert(`Your Request for registering this stray animal has been sent successfully.
                Our team will contact you soon !!`);
                Navigate("/");

            } catch (error) {
                console.log(error);
                // console.log(resp);
            }

        } else {
            Navigate("/loginPage");
        }

    }

    return (
        <Wrapper>
            <div className="container">
                <div className="nav-link">
                    <NavLink to="/strayAnimalPage"> <Button>Want to Adapt Stray Animals</Button> </NavLink>
                </div>

                <div className="main_div">
                    <div className="box">
                        <div className="icon-div">
                            <GiSittingDog className='icon' />
                        </div>
                        <h2>Add Stray Animals</h2>
                        <form >
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
                                <input type="text" onChange={handleInputs} name='location' id='location' autoComplete='off' required />
                                <label htmlFor="location">Enter its location</label>
                            </div>

                            <Button onClick={clicked} >Register</Button>


                            <div className="links">
                                <p>
                                    <strong>Note: Please keep a picture of this animal</strong>
                                </p>
                                <p>
                                    Want to Adapt Stray Animals <NavLink to="/strayAnimalPage">
                                        Click Here
                                    </NavLink>
                                </p>
                            </div>
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
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;

    p{
        text-align : center;
    }
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

.nav-link{
    display: flex;
    justify-content: end;

    Button {
        margin-top: 1rem;
    }
}
`;

export default AddStrayAnimalPage