const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");

const User = require('../models/User'); // Move the User model to a separate file

module.exports = async (req, res) => {
  if (!mongoose.connection.readyState) {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Mongoose Connected");
    } catch (err) {
      console.log("Error occurred:", err);
      return res.status(500).send("Database connection error");
    }
  }

  try {
    const users = await User.find();
    const renderedHtml = await ejs.renderFile(path.resolve('views', 'entries.ejs'), { users });
    res.status(200).send(renderedHtml);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("An error occurred.");
  }
};
