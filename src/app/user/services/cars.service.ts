import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { icarimages } from './icarimages';

import { icars } from './icars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http:HttpClient) { }
  public _url="http://localhost:5278/api/Car";
 
  
 public _urlpost="http://localhost:5278/api/Reports"

  getcars():Observable<icars[]>
  {


    return this.http.get<icars[]>(this._url).pipe(catchError((err)=>{

return throwError(()=>err.message)


    }))
  }

  getcarbyid(id:any):Observable<icars[]>
  {


    return this.http.get<icars[]>("http://localhost:5278/api/Car/"+id).pipe(catchError((err)=>{

return throwError(()=>err.message)


    }))
  }
  //////////////////////////////////////////////////////
  getimagesbyid(id:any):Observable<icarimages[]>
  {


    return this.http.get<icarimages[]>("http://localhost:5278/api/Car/GetImagesId?carid="+id).pipe(catchError((err)=>{

return throwError(()=>err.message)


    }))
  }
  /////////////////////////////////////////////////////
  getcarbybrandname(name:any):Observable<icars[]>
  {

   
    return this.http.get<icars[]>("http://localhost:5278/byBrand?brand="+name).pipe(catchError((err)=>{

return throwError(()=>err.message)


    }))
  }

  SaveReport(data:any)
  {
return this.http.post(this._urlpost,data);

  }

}
