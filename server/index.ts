const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({ type: "application/json" }));

let path = {};

app.use("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

app.post("/path", (req, res) => {
  path = req.body;
  res.json();
});

app.get("/path", (_, res) => {
  res.json(path);
});

app.get("/devices", async (_, res) => {
  const response = await axios.get("https://cloud.estimote.com/v3/devices", {
    headers: {
      Authorization:
        "Basic cGF0aC1ndWlkZS1ia3E6YThmNWYxZWU1OTE0ZmVmYzNkM2FmNjdiODk0YzVmODk="
    }
  });

  res.json(response.data);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
