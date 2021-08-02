require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

connectDB();
const app = express();

app.use(express.json());
// require("./routes/auth.routes")(app);
app.use("/api/products", productRoutes);
app.use("/api/user", authRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Sever is running on port ${PORT}`));
