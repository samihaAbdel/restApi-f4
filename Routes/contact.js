const express = require("express");
const Contact = require("../Models/Contact");

const router = express.Router();

// router.get("/test", (req, res) => {
//   res.send("Hello world");
// });
router.post("/add", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newContact = new Contact({ name, email, phone });
    await newContact.save();
    res.status(200).send({ mes: "Contatct added", newContact });
  } catch (error) {
    res.status(400).send({ mes: "Contatct not added", error });
  }
});
router.get("/all", async (req, res) => {
  try {
    const listContacts = await Contact.find();
    res.status(200).send({ mes: "All contacts", listContacts });
  } catch (error) {
    res.status(400).send({ mes: `Can't get`, error });
  }
});
router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const contactToGet = await Contact.findOne({ _id });
    res.status(200).send({ mes: "The contact is", contactToGet });
  } catch (error) {
    res.status(400).send({ mes: `Can't get`, error });
  }
});
router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await Contact.findOneAndDelete({ _id });
    res.status(200).send({ mes: "Contact deleted" });
  } catch (error) {
    res.status(400).send({ mes: `Can't Delete`, error });
  }
});
router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Contact.updateOne({ _id }, { $set: { ...req.body } });
    res.status(200).send({ mes: "updeted" });
  } catch (error) {
    res.status(400).send({ mes: `Can't updated`, error });
  }
});

module.exports = router;
