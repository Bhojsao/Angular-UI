import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {

  constructor(private http:HttpClient) { 

  }

 private flywayUrl = '/SpringBootFlyway/channel/getAllChannel';
 private enversUrl = '/SpringBootEnvers/parcel/getAllParcel';

 SpringBootFlyway() : Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', '*');

    return this.http.get(this.flywayUrl, {headers})
      .pipe(map((res:HttpResponse<any>)=> {
           console.log(res);
           return res;
        }));     
  }

  SpringBootEnvers() : Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', '*');

    return this.http.get(this.enversUrl, {headers})
      .pipe(map((res:HttpResponse<any>)=> {
           console.log(res);
           return res;
        }));     
  }
}
