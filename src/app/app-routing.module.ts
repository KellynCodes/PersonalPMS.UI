import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnchagesComponent } from './component/onchages/onchages.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './mystore/login/login.component';

const ConfigureRouteModule: ModuleWithProviders<RouterModule> =
  RouterModule.forRoot([
    { path: '', component: IndexComponent },
    { path: 'login', component: LoginComponent },
    { path: 'component', component: OnchagesComponent },
    {
      path: 'mystore',
      loadChildren: () =>
        import('./mystore/mystore.module').then((mod) => mod.MystoreModule),
    },
    { path: '**', redirectTo: '' },
  ]);

@NgModule({
  imports: [ConfigureRouteModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
//src\app\mystore\mystore.module.ts
