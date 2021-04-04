const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true, limit:'1mb' }));
app.listen(port,()=>{
    console.log("http://localhost:"+port);
}); 

app.get("/",(req,res)=>{ 
    res.send("Hellow World");
});

require('./app/routes/test.routes')(app);