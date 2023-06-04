const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({

    name: {type:String,required:[true,'Please enter your name it is mandotary.']},
    date: { type: Date, default: Date.now },
    age: {type:Number,min:[7,'Your age should be above 7 years'],max:[100,'Your age should be below 100 years']},
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function (value) {
              return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
            },
            message: 'Invalid email format',
        }
      }
})

exports.User = mongoose.model('User',userSchema);
