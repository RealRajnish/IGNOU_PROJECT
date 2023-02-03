const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    added_by: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        }
    }

})

const StrayProducts = mongoose.model("strayProduct", productSchema);

module.exports = StrayProducts;