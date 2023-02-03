const mongooose = require('mongoose');

const addAppointment = new mongooose.Schema({
    customer_details: {

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
    animal_detals: {
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
        appointment: {
            type: Date,
            required: true
        },
        clinic: {
            type: String,
            required: true
        }
    },
    Date: {
        type: Date,
        default: Date.now
    }
})

const AddAppointment = mongooose.model('appointment', addAppointment);

module.exports = AddAppointment;