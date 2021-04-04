

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