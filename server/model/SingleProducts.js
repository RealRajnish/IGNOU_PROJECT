const mongoose = require("mongoose");

const singleProductSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        uniqure: true
    },
    breed: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    colors: [
        {
            type: String
        }
    ],
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        required: true
    },
    shipping: {
        type: Boolean,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    reviews: {
        type: Number,
        required: true
    },
    stars: {
        type: String,
        required: true
    },
    image: [
        {
            id: {
                type: String,
                required: true
            },
            height: {
                type: Number,
                required: true,
                default: 650
            },
            width: {
                type: Number,
                required: true,
                default: 1080
            },
            url: {
                type: String,
                required: true
            },
            filename: {
                type: String,
                required: true
            },
            size: {
                type: Number,
                default: 1080
            },
            type: {
                type: String,
                default: "image/png"
            }
        }
    ]

})

const SingleProducts = mongoose.model("singleProduct", singleProductSchema);

module.exports = SingleProducts;