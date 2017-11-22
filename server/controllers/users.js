const User = require('mongoose').model('User')

module.exports={
    login(req, res){
        User.findOne({email: req.body.email})
        .then(user =>{
            if(user === null){
                res.status(401).json('email/pw combo not found.')
                return;
            };
            //else check if pw is correct
            var valid_pw;
            User.validatePassword(req.body.password, user.password, function(err, res){
                valid_pw=res;
                if(valid_pw){
                    user=completeLogin(req, res, user);
                }
                else{
                    res.status(401).json('email/pw combo not found');
                }
            });
        })
        .catch(console.log);
    },

    register(req, res){
        console.log('request body', req.body);
        User.create(req.body)
            .then(user => res.json(user))
            .catch(console.log)
    },


    logout(req, res){
        req.session.destroy();
        res.json(true);
    },

    browse(req, res){
        User.find(req.body)
        .then(user=>res.json(user))
        .catch(console.log);
    }

}
function completeLogin(req, res, user){
        req.session.user = user.toObject();
        delete req.session.user.password;
        return user
}
