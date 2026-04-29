const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;



// Serve static files from the current directory
app.use(express.static(__dirname));

// Fallback route for index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "bot.html"));
});

app.listen(PORT, () => {
  console.log(`Blooketbl running at http://localhost:${PORT}`);
});
app.get("/flooder", (req, res) => {
  res.sendFile(path.join(__dirname, "/flooder.html"));
});