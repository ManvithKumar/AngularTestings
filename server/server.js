const express = require("express");
const cors = require("cors")
const app = express();
const port = 9000;
const auth = "1000";

app.use(cors())

app.get("/auth", (req, res) => {
  const result = req.headers.auth;
  console.log(result);
  if (result === auth) {
    res.json({ message: "Valid" });
  } else {
    res.json({ message: "Error" });
  }
});

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
