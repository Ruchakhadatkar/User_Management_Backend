const express = require("express");
const User = require("../models/userSchema");

const routes = express.Router();

routes.post("/", async (req, res) => {
  const { name, email, gender, status } = req.body;
  const data = new User({
    name,
    email,
    gender,
    status,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

routes.get("/", async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

routes.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const data = await User.findOne({ _id: id });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

routes.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await User.findOne({ _id: id });
    data.deleteOne();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// routes.put("/:id", async (req, res) => {
//   const id = req.params.id;
//   const { name, email, gender, status } = req.body;
  
//   try {
//     const data = await User.findIdAndUpdate(id, { name, email, gender, status } );
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
 
// });

routes.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, email, gender, status } = req.body;
  
  try {
    const data = await User.findByIdAndUpdate(id, { name, email, gender, status });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});




module.exports = routes;
