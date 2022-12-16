const mongoose = require("mongoose")
const {Schema, model} = mongoose

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowerCase: true,
        index: {unique: true}
    },
    password:{
        type: String,
        required: true,
    }
})
const User = model("user", userSchema)
module.exports = User
