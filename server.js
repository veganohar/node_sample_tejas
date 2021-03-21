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

app.get("/test",(req,res)=>{
    res.send("API Testing");
});

app.post("/postTest",(req,res)=>{
    res.send("Post Call Testing");
})

app.put("/putTest",(req,res)=>{
    res.send("Put Call Testing");
})

app.delete("/deleteTest",(req,res)=>{
    res.send("Delete Call Testing");
})

app.post("/databody",(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

app.post("/dataParams/:name",(req,res)=>{
    console.log(req.params);
    res.send(req.params);
})

app.post("/dataQuery",(req,res)=>{
    console.log(req.query);
    res.send(req.query);
});