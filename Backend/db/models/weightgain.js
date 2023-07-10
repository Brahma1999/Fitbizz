const mongoose=require('mongoose');

const WeightgainSchema=new mongoose.Schema({
    meal:{ type: String},
    monday:{ type: String},
    tuesday:{ type: String},
    wednesday:{ type: String},
    thursday:{ type: String},
    friday:{ type: String},
    saturday:{ type: String},
    sunday:{ type: String},
})

const Weightgain=mongoose.model('Weightgain',WeightgainSchema);
module.exports={Weightgain}
