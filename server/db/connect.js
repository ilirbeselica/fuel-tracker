const mongoose = require("mongoose");
const dotenv = require("dotenv").config({ path: "../.env" });

const connect = async () => {
  try {
    const res = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("MongoDB connectedw");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
