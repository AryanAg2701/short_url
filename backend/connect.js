const mongoose=require('mongoose')

async function mongo(url){
    return mongoose.connect(url)
}
module.exports={
    mongo
}