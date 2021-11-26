const express = require('express')
const {getRental,updateRental,deleteRental,addRental} = require('../controllers/rental')
const route = express.Router();



route.get('/',async (req,res)=>{
    const result = await getRental(req.query)
    res.status(200).send(result);
})


route.post('/',async(req,res)=>{
    const result = await addRental(req.body)
    res.status(200).send(result);
})

route.put('/:id',async (req,res)=>{
    const result = await updateRental(req.params.id,req.body)
    res.status(200).send(result);
})

route.delete('/:id',async (req,res)=>{
    const result = await deleteRental(req.params.id)
    res.status(200).send(result);
})


module.exports = route