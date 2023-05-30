const mongoose = require("mongoose");


const contactSchema = mongoose.Schema({
    name:{
        type : String,
        required:[true,"name is required"],
    },
    Age:{
        type: Number,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    selfie:{
        type:String,
        required:false
    }

    
},
    {
        timestamps:true
    }
)

const Contact = mongoose.model("contact",contactSchema);


module.exports = Contact