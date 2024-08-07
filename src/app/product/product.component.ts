import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private productService: ProductService) {}

  products: Product[] = this.productService.getAllProducts();
  
}
