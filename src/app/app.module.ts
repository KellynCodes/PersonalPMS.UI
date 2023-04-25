import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MystoreModule } from './mystore/mystore.module';
import { IndexComponent } from './index/index.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appConfig.service';
import { AppInitializerService } from './mystore/app-initializer.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtTokenInterceptor } from '../Extension/request.interceptor';
import { GlobalErrorHandler } from '../Extension/errorHandler';

function initFactory(initService: AppInitializerService) {
  return () => initService.Init();
}
@NgModule({
  declarations: [AppComponent, IndexComponent],
  imports: [BrowserModule, AppRoutingModule, MystoreModule],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtTokenInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [AppInitializerService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
