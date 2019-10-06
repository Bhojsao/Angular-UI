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

 private userUrl = '/SpringBootFlyway/channel/getAllChannel';
 //private userUrl = '/SpringBootEnvers/parcel/getAllParcel';

  authenticate() : Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', '*');

    return this.http.get(this.userUrl, {headers})
      .pipe(map((res:HttpResponse<any>)=> {
           console.log(res);
           return res;
        }));     
  }
}
