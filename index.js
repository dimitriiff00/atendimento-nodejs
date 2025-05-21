const express = require("express")
const router = require("./routers/index")
const app = express();
const port = 3000;

router(app)
app.listen(port, (error) => {
  if (error) {
    console.log("Deu erro");
    return;
  }
  console.log("Subiu showw");
});

