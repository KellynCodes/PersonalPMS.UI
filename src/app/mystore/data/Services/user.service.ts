import { Login } from '../Models/Login';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginResponse } from '../../Services/DTOS/Res/LoginResponse';
import { Property } from '../Models/Property';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appConfig.service';
import { AppConfig } from 'src/app/AppConfig/appConfig.interface';
import { ApiResponse } from '../../Services/DTOS/Res/Response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    @Inject(APP_SERVICE_CONFIG) private appConfig: AppConfig
  ) {}
  public Login(loginUser: Login) {
    const loginUrl: string = `${this.appConfig.apiEndPoint}/auth/Login-user`;
    return this.http.post<any>(loginUrl, loginUser);
  }

  public Logout(): Observable<ApiResponse> {
    const logoutUrl: string = `${this.appConfig.apiEndPoint}/auth/logout-user`;
    return this.http.get<ApiResponse>(logoutUrl);
  }
}
