const mongodb = require('mongodb');
const { default: mongoose } = require('mongoose');


const productSchemma = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"please enter product name"]
        },
        quantity:{
            type:String,
            required:true,
            default:0
        },
        price:{
            type:Number,
            required:true,

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

const Product = mongoose.model('Poduct',productSchemma);
module.exports = Product