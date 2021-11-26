const {customers,customerValidate} = require('../models/customers.model');

async function getCustomer(querry) {
    try {
        if (!querry) return await customers.find().select();
        return await customers.find(querry).select()
    }
    catch(err){
        console.log(err.message)
    }
}

async function addCustomer(data) {
    try {
        const {error,value} = customerValidate.validate(data)
        if(error) return error.message
        const result =  new customers(data)
        return await result.save()
    }
    catch(err){
        console.log(err.message)
    }
}

async function updateCustomer(id,data) {
    try {
        return await customers.updateOne({_id:id},{$set:data}); 
    }
    catch(err){
        console.log(err.message)
    }
}
async function deleteCustomer(id) {
    try {
        return await customers.deleteOne({_id:id}); 
    }
    catch(err){
        console.log(err.message)
    }
}

module.exports.getCustomer = getCustomer;
module.exports.addCustomer = addCustomer;
module.exports.updateCustomer = updateCustomer;
module.exports.deleteCustomer = deleteCustomer;

