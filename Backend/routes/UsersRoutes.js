const express=require('express');
const router=express.Router();

const {Users}=require('../db/models/users')


//Get all Users
router.get('/users', (req, res) => {
    //we want to return an array of all Users in the database
    Users.find().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
})

//Post
router.post('/users', (req, res) => {
    //we want to create a new foodItem and return the new foodItem document back to the user
    let newUser = new Users({
        Name: req.body.Name,
        Mobile: req.body.Mobile,
        Email: req.body.Email,
        Password: req.body.Password,
    });

    newUser.save().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
})

module.exports=router;