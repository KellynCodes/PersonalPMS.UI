import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MystoreRoutingModule } from './mystore-routing.module';
import { MystoreComponent } from './mystore.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    MystoreComponent,
    ProductEditorComponent,
    ProductAlertsComponent,
    LoginComponent,
    ProductComponent,
    ProductListComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, MystoreRoutingModule, FormsModule, HttpClientModule],
})
export class MystoreModule {}
