import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


//Navbar Component
import { NavbarComponent } from './navbar/navbar.component';
//Pages Component
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { BmiPageComponent } from './pages/bmi/bmi-page.component';
import { NutritionPageComponent } from './pages/nutrition/nutrition-page.component';
import { YourdietPageComponent } from './pages/yourdiet/yourdiet-page.component';
import { AboutusPageComponent } from './pages/aboutus/aboutus-page.component';
import { PagenotfoundPageComponent } from './pages/pagenotfound/pagenotfound-page.component';
//Footer Component
import { FooterComponent } from './footer/footer.component';

//Services
import { ExercisesService } from './Services/exercises.service';
import { WeightlossService } from './Services/weightloss.service';
import { WeightgainService } from './Services/weightgain.service';
import { HealthyrecipesService } from './Services/healthyrecipes.service';
import { FoodItemsService } from './Services/food-items.service';
import { ContactusService } from './Services/contactus.service';
import { UsersService } from './Services/usersService';
import { AuthGuard } from './auth.guard';

//Others
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';


//Creating Routes
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'pages/login', component: LoginComponent },
  { path: "pages/signup", component: SignupComponent },
  { path: "pages/home", component: HomePageComponent, canActivate: [AuthGuard] },
  { path: "pages/bmi", component: BmiPageComponent,  canActivate: [AuthGuard]  },
  { path: "pages/nutrition", component: NutritionPageComponent, canActivate: [AuthGuard] },
  { path: "pages/yourdiet", component: YourdietPageComponent, canActivate: [AuthGuard]  },
  { path: "pages/aboutus", component: AboutusPageComponent, canActivate: [AuthGuard] },
  { path: "**", component: PagenotfoundPageComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    BmiPageComponent,
    NutritionPageComponent,
    YourdietPageComponent,
    AboutusPageComponent,
    PagenotfoundPageComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    LayoutModule,
    MatListModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ timeOut: 2000 }), // ToastrModule added
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true })                     //Loader
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ExercisesService, WeightlossService, WeightgainService, HealthyrecipesService, FoodItemsService, UsersService,ContactusService],
  bootstrap: [AppComponent],

})
export class AppModule {

}

