const shortid=require("shortid")//import shorid
const url = require("../models/url")//import model of a url from models url.js

//function to return shortid
async function newshort(req,req){
    const body=req.body
    if(!body.url){
        return res.status(400).json({error:'url not found'})//if input is left empty
    }
    const shortID=shortid()//creating short id method

    //creating shortid for given url with redirecting link
    await url.create({
        shortId:shortID,
        redirecturl:body.url,
        totalclicks:[],
    })
    return res.json({id:shortID})//return shortid
}

//function for getting analysis of total clicks and their time for id
async function analyse(req,res){
    const shortId=req.params.shortId;
    const result=await url.findone({shortId});//find shortid by id
    return res.json({click:result.totalclicks.length,analytics:result.totalclicks}) //returning the values
}
module.exports={newshort, analyse }//exporting the functions