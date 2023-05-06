const express = require("express");
const app = express();
const port = 3001 || process.env.PORT;
const cors = require("cors");
const connect = require("./db/connect");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
