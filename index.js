const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

// /Connecting to th Database

// const MongoClient = require("mongodb").MongoClient;
mongoose
  .connect("mongodb://localhost/mydata")

  .then(() => console.log(`succesfully connected to mongodb..`))
  .catch(err => console.error("an error occured", err));

// MongoClient.connect("mongodb://localhost/mydata", (err, database) => {
//   // ... start the server
// });
const Mydata = mongoose.model(
  "mydatas",
  new mongoose.Schema({
    // name: {
    //   type: String
    // },
    // lastName: {
    //   type: String
    // }
  })
);

//geting all all records
app.get("/all", async (req, res) => {
  // console.log(Mydata);

  const data = await Mydata.find();

  res.status(200).send(data);
});

// app.post("/", (req, res) => {
//   const user = new Mydata({
//     name: req.body.name,
//     lastName: req.body.lastName
//   });
//   user.save();
//   res.send(user);
// });

// geting company Name data

app.get("/companynames/:NameofThecompany", async (req, res) => {
  const NameofThecompany = req.params.NameofThecompany;

  const data = await Mydata.findById({ Company: NameofThecompany });

  res.status(200).send(data);
});

app.get("/id", async (req, res) => {
  // console.log(Mydata);

  const data = await Mydata.find().select(
    "Company Price Beta description.Country Analyst Recom"
  );

  res.status(200).send(data);
  description;
});

app.get("/ss", async (req, res) => {
  // console.log(Mydata);
  //$lt is less than $gt grater than
  const data = await Mydata.find({
    Price: { $gt: 500 }
  }).select("Company Price Beta description.Country Analyst Recom");

  res.status(200).send(data);
  description;
});
const port = 8000;
const server = app.listen(port, () =>
  console.log(`lisenting on port ${port}..`)
);
module.exports = server;

// https://docs.mongodb.com/manual/tutorial/query-embedded-documents/
