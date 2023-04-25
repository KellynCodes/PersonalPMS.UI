import { ProductEditorComponent } from './product-editor/product-editor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  {
    path: 'products',
    component: ProductListComponent,
    children: [
      { path: 'product/:action/:id', component: ProductEditorComponent },
      { path: 'product/:action', component: ProductEditorComponent },
      { path: '**', redirectTo: 'products', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MystoreRoutingModule {}
