require("dotenv").config();

const productsData = require("./data/product");
const usersData = require("./data/user");

const connectDB = require("./config/db");

const Product = require("./models/Product");
const User = require("./models/User");

connectDB();

const importData = async () => {
    console.log("Data Import Success");

    try {
        await Product.deleteMany({});
        await Product.insertMany(productsData);

        await User.deleteMany({});
        await User.insertMany(usersData);

        console.log("Data Import Success");

        process.exit();
    } catch (error) {
        console.error("Error with data import");
        process.exit(1);
    }
};

importData();
