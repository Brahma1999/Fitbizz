const mongoose=require('mongoose');

const RecipesSchema=new mongoose.Schema({
    image:{ type: String},
    head:{ type: String},
    title:{ type: String},
    maker:{ type: String},
    link:{ type: String},
})

const Recipes=mongoose.model('Recipes',RecipesSchema);
module.exports={Recipes}