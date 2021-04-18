var controller = require('../controller/user.controller');

module.exports = function(app){
    app.post("/api/user/createNewUser",controller.createNewUser);
    app.get("/api/user/getAllUsers",controller.getAllUsers);
    app.delete("/api/user/deleteUser/:uid",controller.deleteUser);
    app.put("/api/user/updateUser",controller.updateUser);
}