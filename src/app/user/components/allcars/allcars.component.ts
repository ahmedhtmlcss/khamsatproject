import { Component, OnInit } from '@angular/core';


import { CarbrandService } from 'src/app/services/carbrand.service';
import { CarsService } from '../../services/cars.service';
import { CarsbymodelService } from '../../services/carsbymodel.service';

@Component({
  selector: 'app-allcars',
  templateUrl: './allcars.component.html',
  styleUrls: ['./allcars.component.scss']
})
export class AllcarsComponent implements OnInit {
 
  constructor(private carsService:CarsService,private carbrandService:CarbrandService,
    private carsbymodelService :CarsbymodelService ) { }
  cars:any=[];
  carmodel:any=[];
  carbrand:any=[];
 
  arrimage=[]
  loading:boolean=false;
   
  filterbrand(event:any){
    
   let  value=event.target.value;
    this.loading=true;
   (value=="all") ? this. carsService.getcars().subscribe(
    userdata=>
    {

this.cars=userdata;

  })            :  this.getbrand(value);

  this.loading=false;
  }
  /////////////////////////////////////////////////////////filter by model
  filtermodel(event:any){
    
    let  value=event.target.value;
     console.log(value);
    (value=="all") ? this. carsService.getcars().subscribe(
     userdata=>
     {
 
 this.cars=userdata;
 
   })            :  this.getbymodel(value);
 
  
   }
  
  ngOnInit(): void {

    this.loading=true;
    this. carsService.getcars().subscribe(
      userdata=>
      {

this.cars=userdata;
    
console.log(this.cars)


    })
    this.loading=false;
    ///////////////////////////////////////////
 
    this.carbrandService.getmodel().subscribe(
      modeldata=>
      {

this.carmodel=modeldata;

    })


  //////////////////////////////////get all models

  
  this.carbrandService.getallmodel().subscribe(
    modeldata=>
    {
      console.log(modeldata)

this.carbrand=modeldata;

  })
  


  ////////////////////////////// filtration
 
  }
  

  getbrand(Keyword:string){


    this.carbrandService.getbrand(Keyword).subscribe(
      (res:any)=>
      
     
      {
  
  this.cars=res
  
    })
  
  
  }
////////////////////////////////////////////////////filtration

getbymodel(Keyword:string){


  this.carsbymodelService.getmodel(Keyword).subscribe(
    (res:any)=>
    
   
    {

this.cars=res

  })


}

////////////////////////////////////////////////////////////
}

