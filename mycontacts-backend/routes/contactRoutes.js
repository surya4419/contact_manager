const express = require("express");
const router = express.Router();
const {getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact} = require("../controllers/contactController.js");
const validateToken = require("../middleware/validateTokenHandler.js");


//when you want to validate projected routes
router.use(validateToken);
router.route("/").get(validateToken,getContacts).post(createContact);

//router.route("/").post(createContact);

router.route("/:id").get(getContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);



module.exports = router;