import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-used-cars',
  templateUrl: './used-cars.component.html',
  styleUrls: ['./used-cars.component.scss']
})
export class UsedCarsComponent implements OnInit {
  usedcars:any=[];
  constructor(private carsService:CarsService) { }

  ngOnInit(): void {
    this.getusedcars();
  }
  getusedcars(){


    this.carsService.getusedcars().subscribe(
      (res:any)=>
      
     
      {
        
  console.log(res);
  this.usedcars=res
  
    })
  
  
  }
}
