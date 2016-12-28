var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String, //hash created from password
    created_at: {type: Date, default: Date.now}
});

// var postSchema = new mongoose.Schema({
//  text: String,
//  username: String,
//  created_at:{type: Date, default: Date.now}
// });

var postSchema = new mongoose.Schema({
    username:String,  //{ type: Schema.ObjectId, ref: 'User' },
    created_at: {type: Date, default: Date.now},
    text: String
});

// Declare a model called User which has schema userschema
mongoose.model("Post", postSchema);
mongoose.model("User", userSchema);
