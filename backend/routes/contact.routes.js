const express = require("express"); 

const {createContact,getContacts,deleteContacts} = require("../controllers/contact.controller");

const router = express.Router(); 

router.post("/", createContact);
router.get("/", getContacts);
router.delete("/:id", deleteContacts);

module.exports = router;