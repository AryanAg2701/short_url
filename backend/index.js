const express=require('express')
const {mongo}=require('./connect')
const app=express()
const url=require('./models/url')
const bodyParser = require('body-parser');
const urlController = require('./controllers/url');
const urlroute=require('./routes/url')
const cors=require("cors")

mongo('mongodb://localhost:27017/urlshortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(console.log('mongo connected'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json())
app.get('/:shortId',async(req,res)=>{
    const shortId=req.params.shortId
    await url.findOneAndUpdate(
        {shortId},
        {$push:{
            totalclicks:{timestamp:Date.now()}
        }}
    )
    res.redirect(entry.redirecturl)
})
app.use('/url',urlroute)
app.listen(8001,()=>{console.log(`http://localhost:8001`)})