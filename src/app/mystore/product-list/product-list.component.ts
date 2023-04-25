import { Component, OnInit } from '@angular/core';
import { ProductService } from '../data/Services/product.service';
import { Property } from '../data/Models/Property';

@Component({
  selector: 'NgDocs-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent {
  property!: Property[];
  constructor(private productService: ProductService) {
    this.gerProducts();
  }

  gerProducts() {
    this.productService.GetProperty.subscribe(
      (data) => {
        this.property = data;
        console.log(this.property);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
