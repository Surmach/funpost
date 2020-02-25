const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    phonenomber: {type: String, unique: true},
    password: {type: String, required: true},

    links : [{type: Types.ObjectId, ref: 'link'}]
    
})

module.exports = model('User', schema)