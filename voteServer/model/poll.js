var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');


var optionSchema = new Schema({
    options: String,
    votes:{
        type: Number,
        default: 0
    }
});

var pollSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    question: String,
    voted:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    created: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save',async function(next){
    try{
        if(!this.isModified('password'))
        {
            return next(err);
        }
        const hashed = await bcrypt.hash(this.password,10);
        this.password = hashed;
        return next();
    }
    catch{
        return next(err);
    }
});

UserSchema.methods.comparePasswords = async function(attempt,next){
    try{
        return await bcrypt.compare(attempt,this.password);
    }
    catch(err)
    {
        return next(err)
    }
}

module.exports = mongoose.model('poll',pollSchema);