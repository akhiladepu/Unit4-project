const express = require("express");    // express imported
const mongoose = require("mongoose");   // mongoose imported
const app = express();                  // to handle the function express lin1

app.use(express.json());               // providing middleware 




//////////////  operations-ends ////////////////////////////

app.listen(4002, () => {                                       // connect is fetching data from database (hence calling as promise)
    console.log("listening on http://localhost4002")        // setting up port from which it will listen for requests
})


