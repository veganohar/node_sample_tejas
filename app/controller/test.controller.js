

exports.test = (req,res)=>{
    res.send("API Testing");
}

exports.postTest = (req,res)=>{
    res.send("Post Call Testing");
}

exports.putTest = (req,res)=>{
    res.send("Put Call Testing");
}

exports.deleteTest = (req,res)=>{
    res.send("Delete Call Testing");
}

exports.databody = (req,res)=>{
    console.log(req.body);
    res.send(req.body);
}

exports.dataParams = (req,res)=>{
    console.log(req.params);
    res.send(req.params);
}

exports.dataQuery = (req,res)=>{
    console.log(req.query);
    res.send(req.query);
}

exports.testejs = (req,res)=>{
    let data ={title:"Test Ejs",heading:"Welcome to Ejs"};
    res.render("test",data);
}

exports.form = (req,res)=>{
    res.render("form");
}

exports.result = (req,res)=>{
    console.log(req.body);
    let data = req.body
    res.render("result",data);
}