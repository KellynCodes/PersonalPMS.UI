import { localStorageToken } from '../Storage/LocalStorage.token';
import { LoginResponse } from './../../Services/DTOS/Res/LoginResponse';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionManagementService {
  constructor(@Inject(localStorageToken) private localStorage: Storage) {}

  public setUpUserInfo(response: LoginResponse) {
    if (response.jwtToken != null) {
      this.localStorage.setItem('token', response.jwtToken);
    }
  }

  public unSetUserInfo() {
    this.localStorage.removeItem('token');
  }
}
