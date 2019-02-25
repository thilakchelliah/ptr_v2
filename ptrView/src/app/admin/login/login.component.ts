import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidUser = false;
  username="";
  password="";
  constructor(private loginService :LoginService) { };

  public toggleInvUser(curVal:boolean) {
    this.invalidUser = curVal;
  };

  public ValidateAndLogin(){
    var username = this.username;
    var password = this.password;
    this.loginService.validateAndLogin(username, password)
  }

  ngOnInit() {
  }
  

}
