const express = require("express")
const { login, register } = require("../controllers/authController")
const {body} = require("express-validator")
const validationResultExpress = require("../middlewares/validationResultExpress")
const router = express.Router()


router.get("/login",[
    body("email", "Formato de email Incorrecto").trim().isEmail().normalizeEmail(),
    body("password", "Mínimo 10 caracteres").trim().isLength({min:10}),   
],validationResultExpress,login)
router.post("/register",[
    body("email", "Formato de email Incorrecto").trim().isEmail().normalizeEmail(),
    body("password", "Mínimo 10 caracteres").trim().isLength({min:10}),
    body("password", "Formato de password Incorrecto").custom((value,{req})=>{
        if (value !== req.body.repassword) {
            throw new Error("No coinciden las contraseñas")
        }
        return value
    })
],validationResultExpress,register)
module.exports = router