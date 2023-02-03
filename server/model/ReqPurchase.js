const mongooose = require('mongoose');

const reqPurchase = new mongooose.Schema({
    order_details: {
        cart: [
            {
                id: {
                    type: String
                },
                breed: {
                    type: String
                },
                amount: {
                    type: String
                },
                price: {
                    type: Number
                },
                image: {
                    type: String
                }
            }
        ],
        total_price: {
            type: Number
        },
        shipping_fee: {
            type: Number,
            default: 50000
        }
    },
    customer_details: {
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
        },
        address: {
            type: String,
            required: true
        }
    },
    Date: {
        type: Date,
        default: Date.now
    }
})

const PurchaseDb = mongooose.model('purchase', reqPurchase);

module.exports = PurchaseDb;