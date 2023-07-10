import { Component } from '@angular/core';
import { ExercisesService } from 'src/app/Services/exercises.service';
import { Exercises } from 'src/app/models/exercises';

@Component({
  selector: 'app-bmi-page',
  templateUrl: './bmi-page.component.html',
  styleUrls: ['./bmi-page.component.css']
})
export class BmiPageComponent {
  data: Exercises[] = [];
  weight = 0;
  height = 0;
  bmi = 0;
  category = '';
  categoryColor = '';

  //Calculation of BMI
  calBmi() {
    this.bmi = ((this.weight) / Math.pow((this.height / 3.281), 2));

    //On basis of bmi finding the category
    switch (true) {
      case this.bmi < 18:
        this.category = "Underweight";
        this.categoryColor = "yellow"
        break;
      case this.bmi >= 18 && this.bmi < 25:
        this.category = "Normal";
        this.categoryColor = "green"
        break;
      case this.bmi >= 25 && this.bmi < 30:
        this.category = "Overweight";
        this.categoryColor = "orange"
        break;
      case this.bmi > 30:
        this.category = "Obese";
        this.categoryColor = "red"
        break;
      default:
        break;
    }
  }


  constructor(private _exercises: ExercisesService) { }

  ngOnInit() {
    this._exercises.getExercise().subscribe(x => {
      this.data = x;
      console.log(this.data);
    }, err => {
      console.log("Failed to get Exercises from database", err);
    })
  }



  scroll(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth'
    })
  }
}
