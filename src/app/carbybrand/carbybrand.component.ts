import { Component, OnInit } from '@angular/core';
import { CarbrandService } from '../services/carbrand.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carbybrand',
  templateUrl: './carbybrand.component.html',
  styleUrls: ['./carbybrand.component.scss']
})
export class CarbybrandComponent implements OnInit {

  constructor(private carbrandService:CarbrandService,private router:Router,private activatedRoute:ActivatedRoute ) { }
  carmodel:any=[];
  ngOnInit(): void {

    this.carbrandService.getmodel().subscribe(
      modeldata=>
      {

this.carmodel=modeldata;


    })


  }
  gotoUsedcars(){this.router.navigate(['usedcars'],{relativeTo:this.activatedRoute})}
  gotoNewcars(){this.router.navigate(['newcars'],{relativeTo:this.activatedRoute})}
  gotoexplorcars(){this.router.navigate(['explorecars'],{relativeTo:this.activatedRoute})}
  }


