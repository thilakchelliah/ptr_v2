import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidUser = false;
  username = "";
  password = "";
  constructor(private loginService: LoginService) { };

  public toggleInvUser(curVal: boolean) {
    this.invalidUser = curVal;
  };

  public keyCheck(e) {
    if (e.keyCode === 13) {
      this.ValidateAndLogin()
    }

  }
  public ValidateAndLogin() {
    var username = this.username;
    var password = this.password;
    this.loginService.validateAndLogin(username, password).subscribe((response: any) => {
      console.log(response);
      var temp = response.result;
      if (response.token) {
        var userObj = {
          username: username,
          token: response.token,
          expiryTime: response.expirytime,
          userId: response.userDataId
        };
        localStorage.setItem('currentUser', JSON.stringify(userObj));
        //$http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;
        //sharedService.toggleLoader(false);
        //$state.go('home.admin');
      }
    }
      , error => {
        console.log(error);// Error getting the data
      })
  }

  ngOnInit() {
  }


}
