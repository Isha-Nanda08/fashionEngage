const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const cors=require("cors")


const app=express();
app.use(cors());

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{})
    .then(()=>console.log("connected to DB"))
    .catch((err)=> console.log("could not connect to DB",err));

app.use(express.json());
// app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

