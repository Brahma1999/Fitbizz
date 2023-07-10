import { Component ,OnInit} from '@angular/core';

//importing food model and FoodItems service
import { Foods } from 'src/app/models/foods';
import { FoodItemsService } from 'src/app/Services/food-items.service';
//importing FormBuilder and validators for reactive form
import { FormBuilder, Validators} from '@angular/forms';
//Importing ToasterService for popups
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-yourdiet-page',
  templateUrl: './yourdiet-page.component.html',
  styleUrls: ['./yourdiet-page.component.css']
})
export class YourdietPageComponent  implements OnInit{

  food!: Foods;
  allFoods: Foods[] = [];

  constructor(private fb: FormBuilder, private _foodItems: FoodItemsService,private toastr: ToastrService) { }

  //Reactive ADD FOOD Form
  addFoodForm = this.fb.group({
    Food: ['', Validators.required],
    Measure: ['', Validators.required],
    Grams: ['', Validators.required],
    Calories: ['', Validators.required],
    Carbs: ['', Validators.required],
    Category: ['', Validators.required]
  })

  //Setters
  get Food() { return this.addFoodForm.get('Food'); }
  get Measure() { return this.addFoodForm.get('Measure'); }
  get Grams() { return this.addFoodForm.get('Grams'); }
  get Calories() { return this.addFoodForm.get('Calories'); }
  get Carbs() { return this.addFoodForm.get('Carbs'); }
  get Category() { return this.addFoodForm.get('Category'); }



  // //delete food by id
  deleteFoodById(food: Foods) {
    this._foodItems.deleteFoodById(food).subscribe(res => {
      let i = this.allFoods.indexOf(res as Foods);
      this.allFoods.splice(i, 1);

      this.toastr.error('Food item is deleted successfully.', 'Deleted ');

      this._foodItems.getFoods().subscribe(data => {
        this.allFoods = data;
        console.log(this.allFoods);

      })
    }, err => {
      console.log("Failed to Delete food",err);
    })
  }


 login(){
  this._foodItems.getFoods().subscribe(data => {
    
    const user=data.find((a:Foods)=>{
      return a.Food === this.addFoodForm.value.Food  &&  a.Measure===this.addFoodForm.value.Measure;
    })


  }, err => {
    console.log("Failed to get foods from database",err);
  })
 }
  //Add Food to database
  createFoodItem() {
    console.log(this.addFoodForm.value);
    this.food=this.addFoodForm.value as Foods;

    this._foodItems.createFoodItem(this.food).subscribe((res) => {
      this.ngOnInit();
      this.toastr.success('Food item is added successfully.', 'Successful!');
      this.addFoodForm.reset();
      
    }, err => {
      console.log("Failed to add food to database",err);
    })
  }

  ngOnInit(): void {
    this._foodItems.getFoods().subscribe(data => {
      this.allFoods = data;
      console.log(this.allFoods);
    }, err => {
      console.log("Failed to get foods from database",err);
    })
  }

 
}

 
