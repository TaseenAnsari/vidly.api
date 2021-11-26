const movie = require('../models/movies.model');

async function getMovie(querry) {
    try {
        if (!querry) return await movie.find().populate("genre").select();
        return await movie.find(querry).populate("genre").select()
    }
    catch(err){
        console.log(err.message)
    }
}

async function addMovie(data) {
    try {
        const result = new movie(data)
        return await result.save()
    }
    catch(err){
        console.log(err.message)
    }
}

async function updateMovie(id,data) {
    try {
        console.log(data)
        return await movie.updateOne({_id:id},{$set:data}); 
    }
    catch(err){
        console.log(err.message)
    }
}
async function deleteMovie(id) {
    try {
        return await movie.deleteOne({_id:id}); 
    }
    catch(err){
        console.log(err.message)
    }
}

module.exports.getMovie = getMovie;
module.exports.addMovie = addMovie;
module.exports.updateMovie = updateMovie;
module.exports.deleteMovie = deleteMovie;

