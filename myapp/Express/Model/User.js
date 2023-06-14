const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({

    first_name: {type:String,required:[true,'Please enter your first name it is mandotary.']},
    last_name: {type:String,required:[true,'Please enter your last name it is mandotary.']},
    date: { type: Date, default: Date.now },
    dob:{type:Date},
    age: {type:Number,min:[14,'Your age should be above 14 years'],max:[100,'Your age should be below 100 years']},
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function (value) {
              return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
            },
            message: 'Invalid email format',
        }
      },
    country: String,
    state: String,
    city: String,
    gender: String,
    
   
})

exports.User = mongoose.model('User',userSchema);
