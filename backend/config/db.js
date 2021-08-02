require("dotenv").config();
const db = require("./../models");
const Role = db.role;

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongo DB connection SUCCESS");
    } catch (error) {
        console.error("Mongo DB connection FAIL");
        process.exit();
    }
};

module.exports = connectDB;
