const express=require('express')
const {mongo}=require('./connect')//importing mongo function for mongoodse connection from connect.js
const app=express()//declaring app with express
const url=require('./models/url')//import url schema
const bodyParser = require('body-parser');//use body parser from json text
const urlcontroller = require('./controllers/url');
const urlroute=require('./routes/url')//importing routes from routes url.js
const cors=require("cors")//importing cors  for api making

//establishing mongo connection
mongo('mongodb://localhost:27017/urlshortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(console.log('mongo connected'))//message

app.use(bodyParser.urlencoded({ extended: true }));//using body parser
app.use(cors());//using cors
app.use(express.json())//using json from sending structured data

//app.get for shortid by given id
app.get('/:shortId',async(req,res)=>{
    const shortId=req.params.shortId//declaring
    //find by id
    await url.findOneAndUpdate(
        {shortId},
        {$push:{
            totalclicks:{timestamp:Date.now()}
        }}
    )
    res.redirect(entry.redirecturl)//redirecting to main url
})
app.use('/url',urlroute)//using routes
app.listen(8001,()=>{console.log(`http://localhost:8001`)})//port