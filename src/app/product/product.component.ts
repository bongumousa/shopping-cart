import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products: Product [] = [{
    id: 1,
    title: 'Mustang',
    subtitle: 'American',
    description: 'Standard on all 2025 Mustang® EcoBoost® trims and available on all others, this smooth-shifting transmission comes with available steering wheel-mounted paddle shifters.',
    imageF: 'https://www.thedrive.com/wp-content/uploads/2023/12/03/mustang-dark-horse-1.jpg?w=1173&h=660',
    imageB: 'https://cdn.motor1.com/images/mgl/npP3k/s3/2021-ford-mustang-mach-1.webp',
    link: 'https://www.thedrive.com/news/current-ford-mustang-production-is-ending-in-2028-report',
    price: '$1200000'
  },
  {
    id: 2,
    title: 'Aventador',
    subtitle: 'SuperCar',
    description: 'Lamborghini currently produces the V10-powered Huracán, Urus SUV powered by a twin-turbo V8 engine, and will produce the Revuelto, a V12/electric hybrid, as of 2024. Lamborghini-Aventador-Successor.',
    imageF: 'https://cdn.motor1.com/images/mgl/OozxwY/s3/2024-lamborghini-aventador-successor-rendering.webp',
    imageB: 'https://www.signaturecarhire.co.uk/blog/wp-content/uploads/2016/01/Lamborghini-Aventador-SV-Front.jpg',
    link: 'https://www.motor1.com/features/654292/lamborghini-aventador-successor-horsepower-price-details/',
    price: '$1100000'
  },
  {
    id: 3,
    title: 'Supra',
    subtitle: 'TunerCar',
    description: 'The Toyota Supra is a symbol of automotive evolution, the Supra has left an indelible mark on the automotive world. This article will trace the history and evolution of the Supra over its eventful lifespan.',
    imageF: 'https://www.ronbrooks.co.uk/wp-content/uploads/2023/06/toyota-supra-mk4-1024x576.png',
    imageB: 'https://i.pinimg.com/564x/4f/65/9d/4f659d371b56aebbfeed33473930ee93.jpg',
    link: 'https://www.ronbrooks.co.uk/history-and-evolution-of-the-toyota-supra/',
    price: '$400000'
  },
  {
    id: 4,
    title: 'Nissan GTR35',
    subtitle: 'SuperCar',
    description: 'The Toyota Supra is a symbol of automotive evolution, the Supra has left an indelible mark on the automotive world. This article will trace the history and evolution of the Supra over its eventful lifespan.',
    imageF: 'https://cdn.motor1.com/images/mgl/Av02V/s1/2022-nissan-gt-r-nismo-special-edition.webp',
    imageB: 'https://www.group1nissan.co.za/wp-content/uploads/nissan-gtr-image-02.jpg',
    link: 'https://salehahmk.shop/product_details/30030150.html',
    price: '$1900000'
  },
  {
    id: 5,
    title: 'Lada',
    subtitle: 'Classic',
    description: 'Introduced in 1980, the series was manufactured in Tolyatti and Izhevsk (Russia), Zaporizhia, Kherson, Cherkasy, and Kremenchuk (Ukraine), and in Egypt and Kazakhstan.',
    imageF: 'https://cdn.motor1.com/images/mgl/A2r49/s3/wcf-lada-classic-lada-21071.webp',
    imageB: 'https://s.car.info/image_files/1920/lada-niva-3-door-front-old-car-land-no2-2018-1-658293.jpg',
    link: 'https://www.ronbrooks.co.uk/history-and-evolution-of-the-toyota-supra/',
    price: '$200000'
  },
  {
    id: 6,
    title: 'Bugatti',
    subtitle: 'HyperCar',
    description: 'Ever since the Veyron was introduced in 2005, the W16 engine has been the beating heart of every Bugatti. For a car as evocative and important as this, great consideration went into the badge it should wear.',
    imageF: 'https://newsroom.cdn.bugatti-media.com/a32c5a46-eb09-4a6f-ac28-35622dde9d4d/xl',
    imageB: 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/24/1600x920/gallery-1497377943-dsc-1196asdfa.jpg?resize=1024:*',
    link: 'https://newsroom.bugatti.com/press-releases/bugatti-w16-mistral-the-ultimate-roadster',
    price: '$9800000'
  }
  ];
  
  
}
