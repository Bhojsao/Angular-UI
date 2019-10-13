import { Component, OnInit, Input, Inject } from '@angular/core';
import { Login } from '../shared/login';
import { LoginService } from './login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userName : String='';
  private password : String='';
  private enableButton: boolean= false;
  private validateUser: boolean= false;

  login:Login;

  constructor(private loginService:LoginService, private router: Router) { 
    
  }
  ngOnInit(): void {
    this.login=new Login();
  }

  ngDoCheck() {
    if (this.login.userName.length>0 && this.login.password.length>0) {
      this.enableButton=true;
    }
  }

  authenticate(){
    this.enableButton=false;
    console.log(this.login.userName);
    console.log(this.login.password);
    this.loginService.authenticate(this.login).subscribe(data =>{
      console.log(data);
        if (data !==null) {
          if (this.login.userName=== data.userName&& this.login.password===data.password){
            this.router.navigate(['/product']);
          }
        }else{
          this.validateUser=true;
          this.router.navigate(['/login']);
        }
    });

   
  }

 
}
