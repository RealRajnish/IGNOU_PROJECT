const mongooose = require('mongoose');

const reqAdopt = new mongooose.Schema({
    stray_animal_info: {
        id: {
            type: String
        },
        title: {
            type: String
        },
        breed: {
            type: String
        },
        age: {
            type: String
        }
    },
    customer_info: {
        name: {
            type: String
        },
        email: {
            type: String
        },
        phone: {
            type: Number
        },
        address: {
            type: String
        }
    },
    Date: {
        type: Date,
        default: Date.now
    }

})

const AdoptDb = mongooose.model('adopt', reqAdopt);

module.exports = AdoptDb;