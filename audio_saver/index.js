const express = require("express");
const multer = require("multer");
const path = require("path");
const axios = require("axios");

const app = express();
const PORT = 3001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});
// Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Specify the directory to save the file
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original filename
  },
});

const upload = multer({ storage: storage });

// Route to handle file upload
app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);
  console.log("Request file: ", req.file);
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  axios
    .post(
      "http://localhost:3002/process_audio",
      {
        filename: req.file.filename,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  res.json({
    message: "File uploaded successfully",
    filename: req.file.filename,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
