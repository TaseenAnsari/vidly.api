
const Fawn = require("fawn");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/moviesrental')
.then(()=>console.log("connect to mongodb"))
.catch((err)=>console.error(err.message));

Fawn.init('mongodb://localhost/moviesrental')




module.exports.mongoose = mongoose;
module.exports.Fawn = Fawn;