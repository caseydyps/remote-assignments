const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("Hello, My Server!");
});

app.get("/getData", (req, res) => {
  var userId = req.query.number;
  //res.send('Lack of Parameter')
  var check = typeof userId;
  console.log(check);
  if (userId > 0) {
    var real_number = 0.5 * parseInt(userId, 10) * (1 + parseInt(userId, 10));
    res.send(`${real_number}`);
  } else if (check == "string") {
    res.send("Wrong Parameter");
  } else {
    res.send("Lack of Parameter");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
