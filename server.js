const express = require('express')
const app = express();
const PORT = process.env.PORT | 5500;
const customersRoute = require('./routes/customers.route') 
const genresRoute = require('./routes/genres.route') 
const moviesRoute = require('./routes/movies.route') 
const rentalRoute = require('./routes/rental.route') 

app.use(express.json())
app.use('/api/customers',customersRoute)
app.use('/api/genres',genresRoute)
app.use('/api/movies',moviesRoute)
app.use('/api/rental',rentalRoute)

app.get('/',(req,res)=>{
    res.send("HOME PAGE")
})



app.listen(PORT,()=>console.log('Server estabilished @localhost:5500'))