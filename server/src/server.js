const express = require("express");  

const connect = require("./configs/db");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());      

const carController = require("./controllers/car.controller")
const bikeController = require("./controllers/bike.controller")
const laptopController = require("./controllers/laptop.controller")
const mobileController = require("./controllers/mobile.controller")
const userController = require("./controllers/user.controller");

app.use("/cars", carController);
app.use("/bikes", bikeController);
app.use("/laptops", laptopController);
app.use("/mobiles", mobileController);
app.use("/users", userController);


app.listen(4000, async () => {    
    await connect();
    console.log("Listening on port 4000");
})