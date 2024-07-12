const express=require('express')
const {newshort,analyse}=require("../controllers/url")//importing  the functions from conyrollers url.js
const router=express.Router()//creating router from express module

router.post("/api/newshort",newshort)//creating route for posting the new shortid
router.get("/analytics/:shortId",analyse)//creating route for getting the analysis of total clicks

module.exports=router;//exporting router