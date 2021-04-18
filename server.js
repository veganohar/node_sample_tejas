const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./app/models");
const dbconfig = require("./app/config/db.config");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.listen(port,()=>{
    console.log("http://localhost:"+port);
}); 

db.mongoose.connect(`mongodb://${dbconfig.HOST}:${dbconfig.PORT}/${dbconfig.DB}`, {
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
require('./app/routes/user.routes')(app);