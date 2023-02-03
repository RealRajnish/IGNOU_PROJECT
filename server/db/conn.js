const mongoose = require("mongoose")

const DB = process.env.DATABASE;
const connectToMongo = async () => {
    try {
        await mongoose.connect(DB);
        console.log("connected successfully........");
    } catch (error) {
        console.log(error);
    }
}
connectToMongo();
