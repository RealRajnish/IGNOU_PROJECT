import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";

const Product = (curElem) => {
    const { id, breed, image, price, category } = curElem;
    return (
        <NavLink to={`/singleproduct/${id}`}>
            <div className="card">
                <figure>
                    <img src={image} alt={breed} />
                    <figcaption className="caption">{category}</figcaption>
                </figure>

                <div className="card-data">
                    <div className="card-data-flex">
                        <h3>{breed}</h3>
                        <p className="card-data--price">{<FormatPrice price={price} />}</p>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default Product;
