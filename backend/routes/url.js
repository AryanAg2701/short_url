const express = require('express');
const { newshort, analyse, redirect } = require("../controllers/url");

const router = express.Router();

// route to create a new short URL
router.post("/api/newshort", newshort);

// route to retrieve analytics for a short URL
router.get("/analytics/:shortid", analyse);

// route to redirect to the original URL associated with a short URL
router.get("/:shortid", redirect);

module.exports = router;
