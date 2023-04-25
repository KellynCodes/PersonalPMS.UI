import { Component } from '@angular/core';
import { AppInitializerService } from './mystore/app-initializer.service';

@Component({
  selector: 'pms',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private initService: AppInitializerService) {
    console.log(this.initService.config);
  }
}
