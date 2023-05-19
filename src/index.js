const express = require("express");
// const req = require("express/lib/request");
const app = express();

//importing a file
//const quotes = require("./quotes.json");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/notesRoutes");
const dotenv = require("dotenv");
const cors = require("cors");



dotenv.config();

//import mongoose for mongodb
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

app.use(express.json());

app.use(cors());

//middle-ware
// app.use((req,res,next)=>{
//     console.log("HTTP Method - " + req.method + ", URL - " + req.url);
//     next();
// });



//letting our application know about our routes
app.use("/users",userRouter);
app.use("/notes",noteRouter);

app.get("/", (req,res)=>{
    res.send("Notes API from Anurag");
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    //starting a server at port 5000
    app.listen(PORT,()=>{
    console.log("Started a server at " + PORT);
});
})

.catch((error)=>{
    console.log(error);
})



/*
app.get("/", (req,res)=>{
    res.send("Hello");
})

app.get("/gobar",(req,res)=>{
    res.send("You are gobar");
})
*/

/*
//for getting json file as response
app.get("/quote", (req,res)=>{
    res.status(200).json(quotes);
})

//for getting a random quote as response from quotes.json file as response
app.get("/random", (req,res)=>{
    
    //random index -- floor is used because quotes.length will give a dec number
    let index = Math.floor(Math.random() * quotes.length);

    let quote = quotes[index];

    res.status(200).json(quote);
})

*/