const shortid=require("shortid")
const url = require("../models/url")
async function newshort(req,req){
    const body=req.body
    if(!body.url){
        return res.status(400).json({error:'url not found'})
    }
    const shortID=shortid()

    await url.create({
        shortId:shortID,
        redirecturl:body.url,
        totalclicks:[],
    })
    return res.json({id:shortID})
}
async function analyse(req,res){
    const shortId=req.params.shortId;
    const result=await url.findone({shortId});
    return res.json({click:result.totalclicks.length,
                    analytics:result.totalclicks
    })
}
module.exports={newshort, analyse }