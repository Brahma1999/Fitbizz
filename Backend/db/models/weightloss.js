const mongoose=require('mongoose');

const WeightlossSchema=new mongoose.Schema({
    meal:{ type: String},
    monday:{ type: String},
    tuesday:{ type: String},
    wednesday:{ type: String},
    thursday:{ type: String},
    friday:{ type: String},
    saturday:{ type: String},
    sunday:{ type: String},
})

const Weightloss=mongoose.model('Weightloss',WeightlossSchema);
module.exports={Weightloss}
