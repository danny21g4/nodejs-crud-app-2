const mongodb = require('mongodb');
const { default: mongoose } = require('mongoose');


const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"please enter product name"]
        },
       
        image:{
            type:String,
            required:false,
        }
    },
    {
        timestamps:true
    }
)

const User = mongoose.model('User',userSchema);
module.exports = Product