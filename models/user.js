// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const passportLocalMongoose = require("passport-local-mongoose");


// const userSchema = new Schema({
//     email: {
//         type: String,
//         required: true,
//     },
// });

// userSchema.plugin(passportLocalMOngoose);

// module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose"); 

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
});

// Use the plugin
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);