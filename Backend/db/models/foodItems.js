const mongoose=require('mongoose');

const FoodSchema=new mongoose.Schema({
    Food: { type: String},
    Measure: { type: String},
    Grams: { type: String},
    Calories: { type: String },
    Carbs: { type: String},
    Category: { type: String }
})

const Foods=mongoose.model('Foods',FoodSchema);
module.exports={Foods}
