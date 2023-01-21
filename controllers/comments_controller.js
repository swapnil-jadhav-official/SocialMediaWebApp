const Comment = require('../models/comment');
const Post = require('../models/Post');

module.exports.create = function(req, res){
    console.log('comments controller');
    Post.findById(req.body.post,function(err,post){
        if(err){
            console.log(err);
        }

        if(post){
            Comment.create({
                content : req.body.content,
                post : req.body.post,
                user : req.user._id
            },
            function(err, comment){
                //handle error
                if(err){
                    console.log(err);
                }
                post.comments.push(comment);
                post.save();
                res.redirect('/');
            })
        }
    })
}

console.log('comments controller loaded')