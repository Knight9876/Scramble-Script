const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // To handle JSON requests
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongoose Connected"))
  .catch((err) => console.log("Error occured:", err));

// Define Schema and Model
const userSchema = new mongoose.Schema({
  username: String,
  timeTaken: Number, // Store time taken in seconds
});

const User = mongoose.model("User", userSchema);

// Routes
// Home Route (Game Page)
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Handle Form Submission
app.post("/submit", async (req, res) => {
  const { username, timeTaken } = req.body;

  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      // Update time if the new time is better
      if (timeTaken < existingUser.timeTaken) {
        existingUser.timeTaken = timeTaken;
        await existingUser.save();
      }
    } else {
      // Create a new user if not found
      const newUser = new User({ username, timeTaken });
      await newUser.save();
    }

    res.redirect("/entries"); // Redirect to the entries page
  } catch (error) {
    console.error("Error handling submission:", error);
    res.status(500).send("An error occurred.");
  }
});

// Display Previous Entries
app.get("/entries", async (req, res) => {
  const users = await User.find(); // Fetch all users from the database
  res.render("entries", { users }); // Render the entries page
});

// **Export the app for Vercel**
module.exports = app;
