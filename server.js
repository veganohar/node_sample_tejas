const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.listen(port,()=>{
    console.log("http://localhost:"+port);
}); 

app.set("view engine", "ejs");
app.get("/",(req,res)=>{ 
    res.send("Hellow World");
});

require('./app/routes/test.routes')(app);