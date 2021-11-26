const rental = require('../models/rental.model');
const {customers} = require('../models/customers.model')
const movies = require('../models/movies.model')
const getperiod = require('../validation/getPeriod')
const {Fawn , mongoose} = require('../models/conection.db')


let task = Fawn.Task();
async function getRental(querry) {
    try {
        if (!querry) return await rental.find().select();
        return await rental.find(querry).select()
    }
    catch (err) {
        console.log(err.message)
    }
}


async function addRental(data) {
    try {
        const customerId = data.customerid;
        const movieId = data.movieid;
        const customer = await customers.find({ _id: customerId }).select();
        const movie = await movies.find({ _id: movieId }).select();
        if (customer[0].isGold === false) return "Customer is not Gold member"
        if (movie[0].numberInStock === 0) return "Movies out of stock"
        let rdate = new Date(data.returnDate);
        let ndate = Date.now()
        ndate  = new Date(ndate);   
        let period = getperiod(ndate,rdate)
        if(period.message) return period.message;
        const result = new rental({
            customer: {
                name: customer[0].name,
                isGold: customer[0].isGold,
                phone: customer[0].phone
            },
            movie: {
                title: movie[0].title,
                dailyRentalRate: movie[0].dailyRentalRate
            },
            dateOut: ndate,
            returnDate: rdate,
            rentalFee:period * Number(movie[0].dailyRentalRate)
        })
        console.log(data.movieid)
        console.log(data.movieid,movie[0]._id);
        const value  =  await task
        .update('movies',{_id:new mongoose.Types.ObjectId(data.movieid)},{
            $inc:{
                numberInStock:-1
            }
        })
       .save('rentals',result)
        .run();
        return result;
        
    }
    catch (err) {
        console.log(err.message)
    }
}

async function updateRental(id, data) {
    try {
        return await rental.updateOne({ _id: id }, { $set: data });
    }
    catch (err) {
        console.log(err.message)
    }
}
async function deleteRental(id) {
    try {
        console.log(_id)
        if(id) return "no id available"
        return await rental.deleteOne({ _id: id });
    }
    catch (err) {
        console.log(err.message)
    }
}

module.exports.getRental = getRental;
module.exports.addRental = addRental;
module.exports.updateRental = updateRental;
module.exports.deleteRental = deleteRental;

