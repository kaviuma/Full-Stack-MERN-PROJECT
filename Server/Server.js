const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cartRoutes = require("./routes/cart.routes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://kaviuma:kaviuma@cluster0.iavsjhn.mongodb.net/CartTrial?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.use("/api/cart", cartRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
