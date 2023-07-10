const express=require('express');
const router=express.Router();

const { Foods } = require('../db/models/foodItems')


//Get all food Items
router.get('/foodItems', (req, res) => {
    //we want to return an array of all food items in the database
    Foods.find().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
})

//Post
router.post('/foodItems', (req, res) => {
    //we want to create a new foodItem and return the new foodItem document back to the user
    let newFood = new Foods({
        Food: req.body.Food,
        Measure: req.body.Measure,
        Grams: req.body.Grams,
        Calories: req.body.Calories,
        Carbs: req.body.Carbs,
        Category: req.body.Category
    });

    newFood.save().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
})

//PATCH   Path- /foodItems/:id
// Update a Food Item
router.patch('/foodItems/:id', (req, res) => {
    //we want to to update the specified food (food item with id in the url) with the new values of  food 
    Foods.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    });
});

//DELETE  Path- /foodItems/:id
//Purpose- Delete a Food Item
router.delete('/foodItems/:id', (req, res) => {
    //we want to delete the specified food (food item with id in the url) with the new values of  food 
    Foods.findOneAndRemove({
        _id: req.params.id
    }).then((removedFoodItem) => {
        res.send(removedFoodItem);
    });
});



 //exporting module
 module.exports=router;