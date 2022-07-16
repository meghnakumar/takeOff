const express = require("express");
const router = express.Router();

const { getCards, addCard } = require("../controller/payment");

// to get all the available cards
router.get("/getcards", getCards);

// to get the biggest offer going on
router.post("/addcard", addCard);

module.exports = router;
