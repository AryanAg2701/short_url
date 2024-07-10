const express=require('express')
const {newshort,analyse}=require("../controllers/url")
const router=express.Router()

router.post("/api/newshort",newshort)
router.get("/analytics/:shortId",analyse)

module.exports=router;