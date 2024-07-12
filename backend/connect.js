const mongoose=require('mongoose')//impoting mongoose

//functiob mongo forconnecting mongoose
async function mongo(url){
    return mongoose.connect(url)
}
module.exports={mongo}//exporting mongo