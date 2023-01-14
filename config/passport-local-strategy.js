const passport = require('passport');
const LocalStratagy = require('passport-local');

const User = require('../models/user');

passport.use(new LocalStratagy({
    usernameField : 'email'
    },

    function(email,password,done){
        User.findOne({email:email},function(err,user){
            if(err){
                console.log('Error in fnding user --> passport');
                return done(err);
            }

            if(!user || user.password!=password){
                console.log('Invalid UserName OR Password');
                return done(null, false);
            }

            return done(null,user);
        })
    }


))


//serialising the user for which key should be stored in the cookie

passport.serializeUser(function(user,done){
    done(null,user.id);
});

//deserialzing the user from the key stored in the cookie

passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('Error in finding user --> passport');
            return done(err);
        }

        return done(null, user);
    })
})

module.exports = passport;