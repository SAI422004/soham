const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    Email:String,
    Password:String,
})

module.exports=mongoose.model('studentdetali',studentSchema)