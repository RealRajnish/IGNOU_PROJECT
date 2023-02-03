import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../contexts/userContext';
import Button from '../styles/Button';

const StrayProduct = ({ id, breed, age, title, image, location }) => {
    const { userLoggedIn, rootUser } = useUserContext();
    const Navigate = useNavigate();

    const stray_animal_info = { id, breed, age, title };
    const customer_info = rootUser;

    const clicked = async () => {
        console.log(`Puchase Btn Clicked with id : ${id}`);

        if (userLoggedIn) {
            // console.log("user is logged in to purchase")
            const userRes = window.confirm(`Are you sure you want to Adapt this cute ${breed}..!!`);
            if (userRes) {
                try {
                    const resp = await axios.post("/reqAdopt", { stray_animal_info, customer_info });
                    console.log(resp.data);
                    window.alert(`Dear ${customer_info.name} Your Request for ${title} ${breed} has been placed Successfully..!! Our team will contact you soon!!`);
                    Navigate("/");

                } catch (error) {
                    console.log(error);
                }
            }
        } else {
            Navigate("/loginPage");
        }
    }

    return (
        <div className="product">
            <div className="product__info">
                <p><b>{title} </b> </p>
                <p><b> Breed :</b> {breed}</p>
                <p><b>Age :</b>{age}</p>
                <p className="product__price">
                    <strong>Location :</strong>{location}
                </p>
            </div>
            <figure>
                <img src={image} alt="" />
            </figure>
            <Button onClick={() => clicked()} >Want To Adopt</Button>

        </div>
    )
}

export default StrayProduct