express = require("express");

app = express();

app.get("/", (req, res) => {
  res.send({ msg: "Hello, World!" });
});

const PORT = process.env.PORT || 5000;

console.log("Running the server on PORT: %s", PORT);
app.listen(PORT);
