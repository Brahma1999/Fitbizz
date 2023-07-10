const express=require('express');
const router=express.Router();

const {Weightgain}=require('../db/models/weightgain');

//Get all weight gain diet plan
router.get('/weightgain', (req, res) => {
    //we want to return an array of all food items in the database
    Weightgain.find().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
})

 //exporting module
 module.exports=router;