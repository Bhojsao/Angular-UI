import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
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
