const {mongoose} = require('./conection.db');
const Joi = require('joi')

const customer = mongoose.model('customers', new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    isGold:{
        type:Boolean,
        default:false
    },
    phone:{
        type:String,
        min:10,
        max:10,
        required:true
    }
}))
const customerValidate = Joi.object({
    name: Joi.string()
    .min(4)
    .max(20)
    .required(),
    isGold: Joi.boolean()
    .required(),
    phone:Joi.number()
    .required()
})
module.exports.customerValidate = customerValidate 
module.exports.customers = customer