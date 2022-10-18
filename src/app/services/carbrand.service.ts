import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { icars } from 'src/app/services/icars';

import { catchError, Observable, throwError } from 'rxjs';
import { icarbrand } from './carbrand';
@Injectable({
  providedIn: 'root'
})
export class CarbrandService {

  constructor(private http:HttpClient) { }
  public _url="http://localhost:5278/api/Car_Brand";
public url2="http://localhost:5278/api/Car_Model";

  getmodel():Observable<icarbrand[]>
  {


    return this.http.get<icarbrand[]>(this._url).pipe(catchError((err)=>{

return throwError(()=>err.message)


    }))
  }
  /////////////////////////////////////////////////////////////////get all models

  getallmodel():Observable<icarbrand[]>
  {


    return this.http.get<icarbrand[]>(this.url2).pipe(catchError((err)=>{

return throwError(()=>err.message)


    }))
  }








  ////////////////////////////////////////////////////////////////////////
  getbrand(keyword:string):Observable<icars[]>{

    return this.http.get<icars[]>('http://localhost:5278/byBrand?brand='+keyword).pipe(catchError((err)=>{

      return throwError(()=>err.message)
      
      
          }))

  }
  
 
}
