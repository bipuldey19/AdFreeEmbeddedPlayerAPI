const express = require("express");
const cors = require("cors");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cors());

const port = 3000 || process.env.PORT;

app.get("/", (req, res) => {
res.send("Please use /watch?v=EMBEDDED_VIDEO_URL to watch the video without any ads. For example, /watch?v=https://chillx.top/v/JqBvYyPgiFdC/");
});

app.get("/watch", (req, res) => {
  const url = req.query.v;
  res.render("watch", {
    url: url,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
