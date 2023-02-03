import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import StrayProduct from '../components/StrayProduct';
import { useProductContext } from '../contexts/productContext'
import Button from '../styles/Button';

const StrayAnimalPage = () => {
    const { strayProducts } = useProductContext();

    return (
        <Wrapper>
            <div className="container">
                <div className="nav-link">
                    <NavLink to="/addStrayAnimal"> <Button>Register new Stray Animal</Button> </NavLink>
                </div>
                <div className="main-image">
                    <figure>
                        <img src="./images/strayAnimalMain.png" alt="stray_animal" />
                    </figure>
                </div>
                <div className="product-list  grid grid-three-column">
                    {
                        strayProducts.map((elem, key) => {

                            const { id, breed, age, title, image, location } = elem;
                            return (
                                <StrayProduct id={id} breed={breed} age={age} title={title} image={image} location={location} key={key} />
                            )
                        })
                    }
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.main-image {
    margin-top: 5rem;
    
    figure {
        display: flex;
        justify-content: center;

        img{
            width: 80%;
            min-width: 40rem;
            height: auto;
            margin-bottom: -8%;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 1), rgba(0, 0, 0, 0.5));
        }
    }
}

.product-list{
    justify-items: center;
    gap: 3.2rem;
}

.product{
    background: ${({ theme }) => theme.colors.bg};
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 20px;
    max-width: 400px;
    min-width: 200px;
    align-items: center;
    width: 100%;
    z-index: 1;
    border-radius: 1rem;
}

.product figure img {
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
}

.nav-link{
    display: flex;
    justify-content: end;

    Button {
        margin-top: 1rem;
    }
}
`;

export default StrayAnimalPage