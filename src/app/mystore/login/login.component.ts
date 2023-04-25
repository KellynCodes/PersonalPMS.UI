import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../data/Models/Login';
import { UserService } from '../data/Services/user.service';
import { LoginResponse } from '../Services/DTOS/Res/LoginResponse';
import { SessionManagementService } from '../data/Services/session-management.service';
import { ApiResponse } from '../Services/DTOS/Res/Response';

@Component({
  selector: 'NgDocs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService, SessionManagementService],
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private sessionMg: SessionManagementService
  ) {}

  user: Login = { email: '', password: '' };
  loginResponse!: LoginResponse;
  logoutResponse!: ApiResponse;

  public login() {
    const result: Observable<LoginResponse> = this.userService.Login(this.user);
    result.subscribe(
      (response) => {
        this.loginResponse = response;
        this.sessionMg.setUpUserInfo(response);
      },
      (err) => {
        console.log(err);
        this.loginResponse = err.error;
      }
    );
  }

  public logout() {
    this.userService.Logout().subscribe((res) => {
      if (res.statusCode == 200) {
        this.sessionMg.unSetUserInfo();
        this.logoutResponse = res;
      }
    });
  }
}
