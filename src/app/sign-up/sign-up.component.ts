import { Component, OnInit } from '@angular/core';
import { Login } from '../shared/login';
import { Router } from '@angular/router';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private userName : String='';
  private password : String='';
  private confirmPassword: String='';
  private enableButton: boolean= false;

  login:Login;

  constructor(private signUpService:SignUpService, private router: Router) { 
    
  }
  ngOnInit(): void {
    this.login=new Login();
  }

  ngDoCheck() {
    if (this.login.userName.length>0 && this.login.password.length>0 && this.login.confirmPassword.length>0 ) {
      this.enableButton=true;
    }
  }

  createLoginDetails(){
    this.enableButton=false;
    console.log(this.login.userName);
    console.log(this.login.password);
    this.signUpService.createLoginDetails(this.login).subscribe(data =>{
      console.log(data);
    });

    this.router.navigate(['/login']);
  }

}
