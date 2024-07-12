const mongoose=require('mongoose')//importing mongoose

//creating schema of mongoose for url
const urlschema=new mongoose.Schema(
    {
    //schema for shortid of url
    shortId:{
        type:String,
        required:true,
        unique:true, //shortid should be unique
    },
    //schema for redirect url
    redirecturl:{
        type:String,
        required:true,
    },
    totalclicks:[{timestamp:{type:Number}}],//schema for total clicks with time stamps
    },
    {timestamps:true}
)
const url=mongoose.model("url",urlschema)//declaring url with schema

module.exports=url;//exporting url schema