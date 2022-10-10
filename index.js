const express = require("express");
require("./database/config");

const cors = require("cors");
const Ad = require("./models/Ad");
const app = express();
app.use(cors());

app.use(express.json());


app.get("/ads", async (req, resp) => {
  let ads = await Ad.find();
  if (ads.length > 0) {
    resp.send(ads);
  } else {
    resp.send("No Product Found");
  }
});

app.get("/ads/:key", async (req, resp) => {
  let ads = await Ad.findOne({
    "$or": [
  {
      name: { $regex: req.params.key }
  },
  {
      headline: { $regex: req.params.key }
  }
  
]
  });
  
    resp.send(ads);
  
});



app.listen(5000);


