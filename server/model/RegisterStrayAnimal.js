const mongooose = require('mongoose');

const reqRegisterStrayAnimal = new mongooose.Schema({

    added_by: {
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
    stray_animal_info: {
        title: {
            type: String
        },
        breed: {
            type: String
        },
        age: {
            type: String
        },
        location: {
            type: String
        }
    },
    Date: {
        type: Date,
        default: Date.now
    }
})

const ReqRegisterStray = mongooose.model('reqRegisterStray', reqRegisterStrayAnimal);

module.exports = ReqRegisterStray;