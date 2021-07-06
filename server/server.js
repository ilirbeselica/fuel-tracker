const { response } = require("express");
const express = require("express");
const dotenv = require("dotenv").config();
const connect = require("./db/connect.js");
const { writeData, findData, deleteData } = require("./db/workWithData.js");
const app = express();
const cors = require("cors");
const users = require("./routes/user");
const auth = require("./midlewares/auth");
const path = require('path')

app.use(cors());
app.use(express.json());



connect();

app.listen(5000, () => {
  console.log("Running on port 5000");
});

app.use("/users", users);

app.use(express.static('build'))

app.post("/api/derivate/info", auth, async (req, res) => {
  const { prej, deri, tabela } = req.body;
  const response = await findData(prej, deri, tabela);
  res.json(response);
});

app.post("/api/derivate", auth, async (req, res) => {
  const { data, tabela, pompa, personi, litra, kilometra, totali, serial } = req.body;
  const response = await writeData({
    data,
    tabela,
    pompa,
    personi,
    litra,
    kilometra,
    totali,
    serial
  });
  res.json(response);
});

app.post("/api/derivate/delete", auth, async (req, res) => {
  const { id } = req.body;
  const response = await deleteData(id);
  res.json(response);
});
