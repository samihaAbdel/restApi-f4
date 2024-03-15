const express= require ('express');
const app = express();
require('dotenv').config();
//connecxion bd
const connectDB = require('./Config/connectDB');
connectDB();

//middleware
app.use(express.json());
app.use('/api/contact', require('./Routes/contact'))

//server
const PORT= process.env.PORT;
app.listen(PORT, (err)=>{
    err
    ? console.log(`Ther is an error:${err}`)
    : console.log(`The server is running on : http://localhost:${PORT}`);
    
})  