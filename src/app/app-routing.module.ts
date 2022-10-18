import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarbybrandComponent } from './carbybrand/carbybrand.component';
import { CarsbybrandComponent } from './carsbybrand/carsbybrand.component';
import { ExploreComponent } from './explore/explore.component';
import { NewCarsComponent } from './new-cars/new-cars.component';
import { UsedCarsComponent } from './used-cars/used-cars.component';


import { AllcarsComponent } from './user/components/allcars/allcars.component';
import { CarsDetailsComponent } from './user/components/cars-details/cars-details.component';

//import { CarbybrandComponent } from './user/components/carbybrand/carbybrand.component';


const routes: Routes = [

  //{path:'products/id',component:ProductdetailsComponent  },
 // {path:"carbybrand",loadChildren:()=>import('./user/user.module').then(m=>m.UserModule) },
 {path:'',component:AllcarsComponent },
  {path:'allcars',component:AllcarsComponent}
  ,
  {path:'carbybrand',component:CarbybrandComponent,


  children:[
    {path:'usedcars',component:UsedCarsComponent },
    {path:'newcars',component:NewCarsComponent },
    {path:'explorecars',component:ExploreComponent }
    
    
  ]


},
{path:'details/:id',component:CarsDetailsComponent },
{path:'model/:brandname',component:CarsbybrandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
