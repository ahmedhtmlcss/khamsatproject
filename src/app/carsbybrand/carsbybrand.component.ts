import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CarsService } from '../user/services/cars.service';



@Component({
  selector: 'app-carsbybrand',
  templateUrl: './carsbybrand.component.html',
  styleUrls: ['./carsbybrand.component.scss']
})
export class CarsbybrandComponent implements OnInit {
  carsbybrand:any=[];
  name:any;
  constructor(private route:ActivatedRoute,private carsService:CarsService) {


     this.name=this.route.snapshot.paramMap.get('brandname');
      
    

console.log(this.name)
   }
  
  ngOnInit(): void {
    this.getcarbybrandname()
  }
  getcarbybrandname(){


    this.carsService.getcarbybrandname(this.name).subscribe(
      (res:any)=>
      
     
      {
        console.log(res)
  
  this.carsbybrand=res
  
    })
  
  
  }

}
