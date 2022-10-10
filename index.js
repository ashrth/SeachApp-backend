const express = require("express");
require("./database/config");
const cors = require("cors");
const Ad = require("./database/Ad");
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", async (req, resp) => {
  let ads = await Ad.find();
  if (ads.length > 0) {
    resp.send(ads);
  } else {
    resp.send("No Product Found");
  }
});

// "$or": [
//   {
//       name: { $regex: req.params.key }
//   },
//   {
//       company: { $regex: req.params.key }
//   },
//   {
//       category: { $regex: req.params.key }
//   }
// ]

app.listen(5000);


