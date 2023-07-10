const express=require('express');
const router=express.Router();

//Load in Exercises Models
const { Recipes }=require('../db/models/recipes')


//Get all Recipes 
router.get('/recipes', (req, res) => {
    //we want to return an array of all food items in the database
    Recipes.find().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
  })

 //exporting module
 module.exports=router;