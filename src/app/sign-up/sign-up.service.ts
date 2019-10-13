import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Login } from '../shared/login';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private url = '/AuthService/auth/login/createLoginDetails';

  constructor(private http:HttpClient) { }

  createLoginDetails(login: Login) : Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', '*');

    return this.http.post(this.url, login,{headers})
      .pipe(map((res:HttpResponse<any>)=> {
           console.log(res);
           return res;
        }));   
    }  
}
