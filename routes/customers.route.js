const express = require('express')
const {getCustomer,updateCustomer,deleteCustomer,addCustomer} = require('../controllers/customer')
const route = express.Router();



route.get('/',async (req,res)=>{
    const result = await getCustomer(req.query)
    res.status(200).send(result);
})


route.post('/',async(req,res)=>{
    const result = await addCustomer(req.body)
    res.status(200).send(result);
})

route.put('/:id',async (req,res)=>{
    const result = await updateCustomer(req.query)
    res.status(200).send(result);
})

route.delete('/:id',async (req,res)=>{
    const result = await deleteCustomer()
    res.status(200).send(result);
})


module.exports = route