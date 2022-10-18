import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';

import { SharedModule } from './shared/shared.module';

import { AllcarsComponent } from './user/components/allcars/allcars.component';
import { NewCarsComponent } from './new-cars/new-cars.component';
import { UsedCarsComponent } from './used-cars/used-cars.component';
import { CarbybrandComponent } from './carbybrand/carbybrand.component';
import { CarsbybrandComponent } from './carsbybrand/carsbybrand.component';
import { ExploreComponent } from './explore/explore.component';
import { FooterComponent } from './footer/footer.component';

//import { CarbybrandComponent } from './user/components/carbybrand/carbybrand.component';
//import { CarbymodelComponent } from './user/components/carbymodel/carbymodel.component';

@NgModule({
  declarations: [
     AppComponent
      ,
      AllcarsComponent,
      NewCarsComponent,
      UsedCarsComponent,
      CarbybrandComponent,
      CarsbybrandComponent,
      ExploreComponent,
      FooterComponent 
    
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
     UserModule,
      
     

   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
