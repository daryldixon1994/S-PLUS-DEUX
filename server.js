const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
require("dotenv").config();
const path = require("path");

const port = process.env.PORT;
const URI = process.env.URI;

mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log("Connected to DB"))
    .catch((error) => console.log(error));
//**************************************ROUTES**********************///////////////////////////////
app.use("/api/user", require("./routes/user/user"));
app.use("/api/admin", require("./routes/admin/admin"));
// Upload
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//////////////////////////////SERVER LISTEN////////////////////////////////////////////
app.listen(port, () => console.log(`server up and running at ${port}`));
