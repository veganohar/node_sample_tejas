var controller = require('../controller/test.controller');

module.exports = function(app){
    app.get("/test",controller.test);
    app.post("/postTest",controller.postTest);
    app.put("/putTest",controller.putTest);
    app.delete("/deleteTest",controller.deleteTest);
    app.post("/databody",controller.databody);
    app.post("/dataParams/:name",controller.dataParams);
    app.post("/dataQuery",controller.dataQuery);
}