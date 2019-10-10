import { Component, OnInit, Input, Inject } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userName : String='';
  private password : String='';

  login:Login;
 // loginService :LoginService;
  constructor(private loginService:LoginService) { 
    
  }
  ngOnInit(): void {
    this.login=new Login();
  }

  onSubmit(){
    console.log(this.login.userName);
    console.log(this.login.password);
    this.loginService.createLoginDetails(this.login).subscribe(data =>{
      console.log(data);
    });
  }

 
}
