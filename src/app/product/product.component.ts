import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  name = 'Mustang';
  model = 'American';
  description = 'Standard on all 2025 Mustang® EcoBoost® trims and available on all others, this smooth-shifting transmission comes with available steering wheel-mounted paddle shifters.';
  imageF = 'https://www.thedrive.com/wp-content/uploads/2023/12/03/mustang-dark-horse-1.jpg?w=1173&h=660';
  imageB = 'https://cdn.motor1.com/images/mgl/npP3k/s3/2021-ford-mustang-mach-1.webp';
  link = 'https://www.thedrive.com/news/current-ford-mustang-production-is-ending-in-2028-report';
  price = '$1200000';
  
}
