import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../types/product';

@Component({
  selector: 'NgDocs-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
