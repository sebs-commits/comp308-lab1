require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const studentRoutes = require('./routes/authRoute.js') 


const app = express();
const port = process.env.PORT || 3000;


// connect to mongo
mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {
        console.error("Connection error", err);
    });

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// routes
app.get('/', (req, res) => {
    res.json({ message: 'Home' });
});
app.use("/api", studentRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

