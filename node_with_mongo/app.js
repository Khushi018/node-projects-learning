const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const taskRouter = require("./routes/taskRouter");

const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();
// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/users", taskRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
