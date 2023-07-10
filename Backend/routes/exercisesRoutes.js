const express=require('express');
const router=express.Router();

//Load in Exercises Models
const { Exercises }=require('../db/models/exercises')

//Get all Exercises 
router.get('/exercises', (req, res) => {
    //we want to return an array of all food items in the database
    Exercises.find().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
  })

 //exporting module
 module.exports=router;