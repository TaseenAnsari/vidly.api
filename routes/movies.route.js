const express = require('express')
const {getMovie,updateMovie,deleteMovie,addMovie} = require('../controllers/movie')
const route = express.Router();



route.get('/',async (req,res)=>{
    const result = await getMovie(req.query)
    res.status(200).send(result);
})


route.post('/',async(req,res)=>{
    const result = await addMovie(req.body)
    res.status(200).send(result);
})

route.put('/:id',async (req,res)=>{
    console.log(req.params.id)
    const result = await updateMovie(req.params.id,req.body)
    res.status(200).send(result);
})

route.delete('/:id',async (req,res)=>{
    const result = await deleteMovie(req.params.id)
    res.status(200).send(result);
})


module.exports = route