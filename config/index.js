const mongoose = require("mongoose");
async function connectDb() {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("connected to db")
  } catch (error) {
    console.log("error", error);
  }
}

module.exports = connectDb;
