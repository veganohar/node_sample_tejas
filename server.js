const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.listen(port,()=>{
    console.log("http://localhost:"+port);
}); 

mongoose.connect('mongodb://localhost/tejas_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(console.log("Db connected successfully")).
catch((err)=>{
    console.log(err);
    process.abort();
})

app.set("view engine", "ejs");
app.get("/",(req,res)=>{ 
    res.send("Hellow World");
});




require('./app/routes/test.routes')(app);