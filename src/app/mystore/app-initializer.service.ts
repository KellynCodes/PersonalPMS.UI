import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppInitializerService {
  config: any;
  constructor(private http: HttpClient) {}

  Init() {
    this.http
      .get('http://localhost:4200/assets/config.json')
      .subscribe((config) => {
        this.config = config;
      });
  }
}
