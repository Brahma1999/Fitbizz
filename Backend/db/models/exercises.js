const mongoose=require('mongoose');

const ExerciseSchema=new mongoose.Schema({
    exercise:{ type: String},
    url:{ type: String},
    description:{ type: String},
    bodyPart:{ type: String},
})

const Exercises=mongoose.model('Exercises',ExerciseSchema);
module.exports={Exercises}