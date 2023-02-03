const express = require('express');
const router = express.Router();
const User = require("../model/UserSchema");
const PurchaseDb = require("../model/ReqPurchase")
const AdoptDb = require("../model/ReqAdopt");
const ReqRegisterStray = require("../model/RegisterStrayAnimal")
const AddAppointment = require("../model/AddAppointments")
const bcrypt = require("bcryptjs");
const Authenticate = require('../middleware/authenticate');
const SingleProducts = require("../model/SingleProducts");
const StrayProducts = require('../model/StrayAnimalsSchema');



// for adding the stray products in the database
router.post("/addStray", async (req, res) => {
    try {
        const data = new StrayProducts(req.body);
        const resp = await data.save();
        res.json({ msg: "Stray Animal Added Successfully" });
        console.log(resp);
    } catch (error) {
        res.send(error);
        console.log(error);
    }
});

// for adding the single products in the database
router.post("/addSingleProduct", async (req, res) => {
    try {
        const productExist = await SingleProducts.findOne({ id: req.body.id });
        if (productExist) {
            return res.status(422).json({ error: "Product id already Exist" })
        }

        console.log(req.body);
        const data = new SingleProducts(req.body);
        const resp = await data.save();

        res.json({ msg: "Single Product Added successfully" }).status(200);
        console.log(resp);
    } catch (error) {
        console.log(error);
        res.send(error)
    }
});

// getting all the products for the main products page
router.get("/reqProducts", async (req, res) => {
    const filter = {};
    try {
        const data = await SingleProducts.find(filter);
        const temp = data.map((elem) => {
            const { id, breed, age, price, colors, description, category, featured } = elem;
            const image = elem.image[0].url;
            const resData = { id, breed, age, price, colors, description, category, featured, image };
            return (resData);
        })
        res.send(temp);
        console.log("Hurray got the data !!")
    } catch (error) {
        console.log(error);
    }
});


// getting all the stray animals for stray animal page
router.get("/reqStrayProducts", async (req, res) => {
    const filter = {};
    try {
        const data = await StrayProducts.find(filter);
        const temp = data.map((elem) => {
            const { id, breed, age, title, image, location } = elem;
            const resData = { id, breed, age, title, image, location };
            return (resData);
        })
        res.send(temp);
        console.log("Hurray got the Stray Animal data !!")
    } catch (error) {
        console.log(error);
    }
});

// for getting the single product page using the id of the pdoduct
router.get("/reqSingleProducts/:id", async (req, res) => {
    const uid = req.params.id;
    try {
        const data = await SingleProducts.find({ id: uid });
        const tempStars = data[0].stars;
        const stars = parseFloat(tempStars);
        const temp = data.map((elem) => {
            const { id, breed, age, price, colors, description, category, featured, shipping, stock, reviews, image } = elem;
            const resData = { id, breed, age, price, colors, description, category, featured, shipping, stock, reviews, image, stars };
            return (resData);
        })
        res.send(temp);
        console.log(temp);
        console.log(stars);
    } catch (error) {
        console.log(error);
    }
});

// for getting the data using cookies from the browser for authentication purpose
router.get('/hii', Authenticate, (req, res) => {
    const { name, email, phone, address } = req.rootUser;
    res.json({ name, email, phone, address });
    console.log(req.rootUser.name);
});

// registering the user
router.post('/registeruser', async (req, res) => {
    try {
        const { name, email, phone, address, password, cpassword } = req.body;
        if (!name || !email || !phone || !address || !password || !cpassword) {
            return res.status(422).json({ error: "Please fill all fields properly" })
        }
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(422).json({ error: "email already exists" })
        }

        const user = new User(req.body);
        // Hashing the password
        if (user.password === user.cpassword) {

            const registeredUser = await user.save();
            res.send(registeredUser);
        } else {
            res.send("Password mismatched")
        }
    } catch (e) {
        console.log(e);
        res.json({ error: "Email is invalid", code: 1 });
    }
});

// user login page
router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ error: "Plz Fill the data", code: 1 });
        }
        const userLogin = await User.findOne({ email });
        if (userLogin) {

            const isMatch = await bcrypt.compare(password, userLogin.password);

            if (!isMatch) {
                res.status(400).json({ error: "Password mismatched.......", code: 2 })
            } else {
                const token = await userLogin.generateAuthToken();
                console.log(token);
                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 258920000)
                });
                res.json({ message: "user signin successfully.......", code: 3 })
            }
        } else {
            res.status(400).json({ error: "User Not Found.......", code: 4 })
        }
    } catch (error) {
        console.log(error)
    }
});

// Logout page
router.get('/logout', (req, res) => {
    console.log("Hello my logout page");
    res.clearCookie("jwtoken", { path: "/" });
    res.status(200).json({
        message: "Logout successfully"
    });
});

// requesting for purchase of the products
router.post("/reqPurchase", async (req, res) => {
    try {
        console.log(req.body);
        const data = new PurchaseDb(req.body);
        const resp = await data.save();

        res.json({ msg: "Ordered Successfully" }).status(200);
        console.log(resp);
    } catch (error) {
        console.log(error);
        res.send(error)
    }
});

// user send request for adoption of stray animals
router.post("/reqAdopt", async (req, res) => {
    try {
        console.log(req.body);
        const data = new AdoptDb(req.body);
        const resp = await data.save();

        res.json({ msg: "Adoption request sent Successfully" }).status(200);
        console.log(resp);
    } catch (error) {
        console.log(error);
        res.send(error)
    }
});

// users requests for adding stray animals
router.post("/reqRegisterStray", async (req, res) => {
    try {
        const productExist = await ReqRegisterStray.findOne({ id: req.body.id });
        if (productExist) {
            return res.status(422).json({ error: "Product id already Exist" })
        }

        console.log(req.body);
        const data = new ReqRegisterStray(req.body);
        const resp = await data.save();

        res.json({ msg: "Adoption request sent Successfully" }).status(200);
        console.log(resp);
    } catch (error) {
        console.log(error);
        res.send(error)
    }
});

// for adding the doctors appointments 
router.post("/addAppointments", async (req, res) => {
    try {
        console.log(req.body);
        const data = new AddAppointment(req.body);
        const resp = await data.save();

        res.json({ msg: "Appointment request sent Successfully", code: "success" }).status(200);
        console.log(resp);
    } catch (error) {
        console.log(error);
        res.send(error)
    }
});

module.exports = router;

