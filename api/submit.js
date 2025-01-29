const mongoose = require("mongoose");
const User = require('../models/User');
const bodyParser = require("body-parser");

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { username, timeTaken } = req.body;

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
      const existingUser = await User.findOne({ username });

      if (existingUser) {
        if (timeTaken < existingUser.timeTaken) {
          existingUser.timeTaken = timeTaken;
          await existingUser.save();
        }
      } else {
        const newUser = new User({ username, timeTaken });
        await newUser.save();
      }

      res.redirect('/api/entries'); // Redirect to the entries function
    } catch (error) {
      console.error("Error handling submission:", error);
      res.status(500).send("An error occurred.");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
};
