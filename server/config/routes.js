const mongoose = require('mongoose');
const userController = require('./../controllers/users');

module.exports = function(app){
    app.post('/login', userController.login);
    app.post('/register', userController.register);
    app.delete('/logout', userController.logout);
    app.get('/browse', userController.browse);

    app.all('*', function(req, res){
        res.sendFile(path.resolve('dist', 'index.html'))
    })

}
