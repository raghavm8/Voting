var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    polls: [{
        type: Schema.Types.ObjectId,
        ref: 'Poll'
    }]
});

module.exports = mongoose.model('user', userSchema);