
const Fawn = require("fawn");
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://taseenansari:"tensea98351"@cluster0.2o2yq.mongodb.net/test')
.then(()=>console.log("connect to mongodb"))
.catch((err)=>console.error(err.message));

Fawn.init('mongodb+srv://taseenansari:"tensea98351"@cluster0.2o2yq.mongodb.net/test')




module.exports.mongoose = mongoose;
module.exports.Fawn = Fawn;