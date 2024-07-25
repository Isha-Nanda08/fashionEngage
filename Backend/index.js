const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const cors=require("cors");
const User = require('./models/User')
const Blog = require('./models/Blog')
const bodyParser=require('body-parser');
const AuthRouter =require('./routes/AuthRouter') 


const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{})
    .then(()=>console.log("connected to DB"))
    .catch((err)=> console.log("could not connect to DB",err));

app.use('/auth',AuthRouter)



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

