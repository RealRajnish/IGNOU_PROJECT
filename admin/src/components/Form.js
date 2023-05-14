import React from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Form = () => {
  const [animalData, setAnimalData] = useState({
    id: "",
    breed: "",
    age: "",
    price: "",
    color1: "",
    color2: "",
    color3: "",
    description: "",
    category: "",
    featured: false,
    shipping: true,
    stock: "",
    reviews: "",
    stars: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
  });

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setAnimalData({ ...animalData, [name]: value });
  };

  const handleClick = () => {
    setAnimalData({ ...animalData, featured: !animalData.featured });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("addSingleProduct", {
        id: animalData.id,
        breed: animalData.breed,
        age: animalData.age,
        price: animalData.price,
        colors: [animalData.color1, animalData.color2, animalData.color3],
        description: animalData.description,
        category: animalData.category,
        featured: animalData.featured,
        shipping: animalData.shipping,
        stock: animalData.stock,
        reviews: animalData.reviews,
        stars: animalData.stars,
        image: [
          { id: "random1", url: animalData.image1, filename: "product-1.png" },
          { id: "random2", url: animalData.image2, filename: "product-2.png" },
          { id: "random3", url: animalData.image3, filename: "product-3.png" },
          { id: "random4", url: animalData.image4, filename: "product-4.png" },
        ],
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className="add-product--form">
        <div className="add-product-form-label">
          Enter the product details to add
        </div>
        <form action="">
          <div className="form-content">
            <div className="input-lable">
              <label htmlFor="id">ID: </label>
              <input
                id="id"
                type="text"
                name="id"
                required
                placeholder="give it unique"
                onChange={handleInputs}
                value={animalData.name}
              />
            </div>
            <div className="input-lable">
              <label htmlFor="Breed">Breed:</label>
              <input
                id="Breed"
                name="breed"
                required
                placeholder="Breed of animal"
                type="text"
                onChange={handleInputs}
              />
            </div>
            <div className="input-lable">
              <label htmlFor="age">Age</label>
              <input
                id="age"
                required
                placeholder="Enter its age"
                name="age"
                type="text"
                onChange={handleInputs}
              />
            </div>
            <div className="input-lable">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                name="price"
                required
                type="number"
                placeholder="Enter its effective price"
                onChange={handleInputs}
              />
            </div>
            <div className="input-lable">
              <label htmlFor="color1">color 1</label>
              <input
                id="color1"
                name="color1"
                required
                type="color"
                onChange={handleInputs}
              />
            </div>
            <div className="input-lable">
              <label htmlFor="colors2">color 2</label>
              <input
                id="colors2"
                name="color2"
                required
                type="color"
                onChange={handleInputs}
              />
            </div>
            <div className="input-lable">
              <label htmlFor="colors3">color 3</label>
              <input
                id="colors3"
                name="color3"
                required
                type="color"
                onChange={handleInputs}
              />
            </div>
            <div className="input-lable">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                type="text"
                onChange={handleInputs}
              ></textarea>
            </div>
            <div className="input-lable">
              <label htmlFor="category">Category</label>
              <input
                id="category"
                name="category"
                type="text"
                onChange={handleInputs}
              />
            </div>
            <div className="input-lable">
              <label htmlFor="featured">Featured</label>
              <input
                id="featured"
                type="checkbox"
                name="featured"
                // onChange={handleInputs}
                onChange={handleClick}
                checked={animalData.featured}
                // value={animalData.featured}
              />
            </div>
            {/* <div className="input-lable">
            <label htmlFor="shipping">Shipping</label>
            <input
              id="shipping"
              type="number"
              placeholder="shipping charge"
              required
              onChange={handleInputs}
            />
          </div> */}
            <div className="input-lable">
              <label htmlFor="stock">Stock</label>
              <input
                id="stock"
                name="stock"
                type="text"
                onChange={handleInputs}
              />
            </div>
            <div className="input-lable">
              <label htmlFor="reviews">Reviews</label>
              <input
                id="reviews"
                name="reviews"
                type="text"
                onChange={handleInputs}
              />
            </div>
            <div className="input-lable">
              <label htmlFor="stars">Stars</label>
              <input
                id="stars"
                name="stars"
                type="text"
                onChange={handleInputs}
              />
            </div>

            {/* Enter Images here */}
            <div className="image-blocks">
              <div>Enter Image URLs here</div>

              <div className="input-lable">
                <label htmlFor="image1">Image 1</label>
                <input
                  id="image1"
                  type="text"
                  name="image1"
                  onChange={handleInputs}
                />
              </div>

              <div className="input-lable">
                <label htmlFor="image2">Image 2</label>
                <input
                  id="image2"
                  type="text"
                  name="image2"
                  onChange={handleInputs}
                />
              </div>
              <div className="input-lable">
                <label htmlFor="image3">Image 3</label>
                <input
                  id="image3"
                  type="text"
                  name="image3"
                  onChange={handleInputs}
                />
              </div>
              <div className="input-lable">
                <label htmlFor="image4">Image 4</label>
                <input
                  id="image4"
                  type="text"
                  name="image4"
                  onChange={handleInputs}
                />
              </div>
            </div>
            <input
              type="submit"
              onClick={handleSubmit}
              value="Register Animal"
            />
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  overflow-y: scroll;
  max-height: 40rem;

  .image-blocks {
    background-color: aqua;
    margin-top: 2rem;
  }
  .input-lable {
    display: flex;
    justify-content: space-between;
  }
  .form-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .add-product--form {
    /* max-height: 40rem;
    overflow-y: scroll; */
  }
`;
export default Form;
