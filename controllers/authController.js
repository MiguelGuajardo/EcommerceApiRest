const {validationResult} = require("express-validator")

const login = (req,res)=>{
    res.json({ok: "Login"})
}
const register = (req,res)=>{
    console.log(req.body)
    res.json({ok:true})
}

    module.exports = {login,register}