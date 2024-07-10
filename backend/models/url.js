const mongoose=require('mongoose')

const urlschema=new mongoose.Schema(
    {
    shortId:{
        type:String,
        required:true,
        unique:true, 
    },
    redirecturl:{
        type:String,
        required:true,
    },
    totalclicks:[{timestamp:{type:Number}}],
    },
    {timestamps:true}
)
const url=mongoose.model("url",urlschema)

module.exports=url;