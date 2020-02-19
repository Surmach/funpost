const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')

// api/auth/register
router.post('/register',[

    check('email', 'Некоректний email').isEmail(),
    check('password', 'Минимальная длинна 6 символов').isLength({min: 6})

], async (req, res) =>{

    
    try{
        const errors = validationResult(req)
        console.log(req.body)

        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array(),massage: 'Некоректные данние'})
        }
         const {email, password} = req.body
         
         const candidate = await User.findOne({email})
         

         if(candidate){
             res.status(400).json({massage: 'User already created'})
         }

         const hashedPassword = await bcrypt.hash(password, 12)
         const user = new User({email, password: hashedPassword })

         
         await user.save()

         res.status(201).json({massage: 'User creates sucsess'})
    }catch(e){
        res.status(500).json({massage: 'Somethin went wron('})
    }
} )


// api/auth/login
router.post('/login',[
    check('email', 'Введите коректный email').normalizeEmail().isEmail(),
    check('password', 'Введите коректный пароль').exists()
], async (req, res)=>{
    try{
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array(),massage: 'Некоректные данние'})
        }

        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({massage: 'User not found'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.status(400).json({massage: 'Неверний пароль'})
        }

        const tocen = jwt.sign({
            userId: user.id
        }, 'secret key', {expiresIn: '1h'})

        res.json({tocen, userId: user.id})

    }catch(e){
        res.status(500).json({massage: 'Somethin went wron('})
    }
})

module.exports = router