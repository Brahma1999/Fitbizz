const mongoose=require('mongoose');

const UsersSchema=new mongoose.Schema({
    Name:{ type: String},
    Mobile:{ type: String},
    Email:{ type: String},
    Password:{ type: String},
})

const Users=mongoose.model('Users',UsersSchema);
module.exports={Users}