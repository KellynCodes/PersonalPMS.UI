import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../Models/Property';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {
    this.GetProperty;
  }

  public get GetProperty() {
    const url: string = `${environment.apiEndPoint}/manager/Get-all-Properties`;
    return this.http.get<Property[]>(url);
  }
}
