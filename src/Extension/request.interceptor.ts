import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { localStorageToken } from 'src/app/mystore/data/Storage/LocalStorage.token';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {
  constructor(@Inject(localStorageToken) private localStorage: Storage) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.localStorage.getItem('token');
    request = request.clone({
      headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
    });
    console.log(request);
    return next.handle(request);
  }
}
