const express=require('express');
const router=express.Router();

const {ContactUs}=require('../db/models/contactus')


//Get all Users
router.get('/contactUs', (req, res) => {
    //we want to return an array of all Users in the database
    ContactUs.find().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
})

//Post
router.post('/contactUs', (req, res) => {
    //we want to create a new foodItem and return the new foodItem document back to the user
    let newUser = new ContactUs({
        Name: req.body.Name,
        Mobile: req.body.Mobile,
        Email: req.body.Email,
        Message: req.body.Message,
    });

    newUser.save().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
})

module.exports=router;