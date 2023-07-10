const mongoose=require('mongoose');

const ContactUsSchema=new mongoose.Schema({
    Name:{ type: String},
    Mobile:{ type: String},
    Email:{ type: String},
    Message:{ type: String},
})

const ContactUs=mongoose.model('ContactUs',ContactUsSchema);
module.exports={ContactUs}