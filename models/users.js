const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },

    password:{
        require:true,
        type:String
    },
    name:{
        type:String,
        require:true
    }

},{
    timestamps:true
})

const User =mongoose.model('user',userSchema);

module.exports=User;
   