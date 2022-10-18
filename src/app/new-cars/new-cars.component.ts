import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';
@Component({
  selector: 'app-new-cars',
  templateUrl: './new-cars.component.html',
  styleUrls: ['./new-cars.component.scss']
})
export class NewCarsComponent implements OnInit {
  newcars:any=[]
  constructor(private carsService:CarsService) { }

  ngOnInit(): void {
    this.getnewcars()
  }
  getnewcars(){


    this.carsService.getnewcars().subscribe(
      (res:any)=>
      
     
      {
        
  console.log(res);
  this.newcars=res
  
    })
  
  
  }
}
