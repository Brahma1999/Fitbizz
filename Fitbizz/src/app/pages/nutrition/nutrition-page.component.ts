import { Component, OnInit } from '@angular/core';

//Importing weightloss model and weightloss service
import { Weightloss } from 'src/app/models/weightloss';
import { WeightlossService } from 'src/app/Services/weightloss.service';
//Importing weightgain model and weightgain service
import { Weightgain } from 'src/app/models/weightgain';
import { WeightgainService } from 'src/app/Services/weightgain.service';
//Importing recipes model and recipes service
import { Recipes } from 'src/app/models/recipes';
import { HealthyrecipesService } from 'src/app/Services/healthyrecipes.service';

@Component({
  selector: 'app-nutrition-page',
  templateUrl: './nutrition-page.component.html',
  styleUrls: ['./nutrition-page.component.css']
})
export class NutritionPageComponent implements OnInit {

  weightloss: Weightloss[] = [];
  weightgain: Weightgain[] = [];
  recipes: Recipes[] = [];

  //Variables showing which option is active now
  var_recipes = true;
  var_weightLoss = false;
  var_weightgain = false;
  //Variables Storing initial color of Options
  optionlosscolor = "white";
  optiongaincolor = "white";
  optionrecipecolor = "#2464f2";


  //Toggling Healthy Recipes Option Function
  disRecipes() {
    this.var_recipes = !this.var_recipes;          //Toggles the active state of Healthy Recipes Option
    this.var_weightgain = false;                   //Deactivates Gain Mass option
    this.var_weightLoss = false;                   //Deactivates Lose Fat option

    //Sets the color of the active option to #2464f2 and rest to white
    this.optionrecipecolor = "#2464f2";
    this.optiongaincolor = "white";
    this.optionlosscolor = "white";

  }

  //Toggling Loss Mass Option Function
  disLoss() {
    this.var_weightLoss = !this.var_weightLoss;       //Toggles the active state of Loss Fat Option
    this.var_weightgain = false;                      //Deactivates Gain Mass option
    this.var_recipes = false;                         //Deactivates Healthy Recipes option

    //Sets the color of the active option to #2464f2 and rest to white
    this.optionlosscolor = "#2464f2";                
    this.optiongaincolor = "white";
    this.optionrecipecolor = "white";
  }

  //Toggling Gain Mass Option Function
  disGain() {

    this.var_weightgain = !this.var_weightgain;      //Toggles the active state of Gain Mass Option
    this.var_weightLoss = false;                     //Deactivates Lose Fat option
    this.var_recipes = false;                        //Deactivates Healthy Recipes option

    //Sets the color of the active option to #2464f2 and rest to white
    this.optiongaincolor = "#2464f2";
    this.optionlosscolor = "white";
    this.optionrecipecolor = "white";
  }



  constructor(private _weightloss: WeightlossService, private _weightgain: WeightgainService, private _recipes: HealthyrecipesService) { }

  ngOnInit() {

    //Subscribing the recipes observables
    this._recipes.getRecipes().subscribe(data => {
      this.recipes = data;
    }, err => {
      console.log("Failed to get healthy recipes from database",err);
    })

    //Subscribing the weightgain observables
    this._weightgain.getWeightGain().subscribe(data => {
      this.weightgain = data;
    }, err => {
      console.log("Failed to get weight gain diet plan from database",err);
    })

    //Subscribing the weightloss observables
    this._weightloss.getWeightLoss().subscribe(data => {
      this.weightloss = data;
      console.log(this.weightloss);
    }, err => {
      console.log("Failed to get weight loss diet plan from database",err);
    })

    

  }
}

