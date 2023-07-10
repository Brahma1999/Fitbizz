const express=require('express');
const router=express.Router();

const {Weightloss}=require('../db/models/weightloss');

//Get all weight loss diet plan
router.get('/weightloss', (req, res) => {
    //we want to return an array of all food items in the database
    Weightloss.find().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
})

 //exporting module
 module.exports=router;