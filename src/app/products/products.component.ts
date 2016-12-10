import { Component, OnInit } from '@angular/core';

import { ProductsService } from './products.service';
import { Product } from './product.model';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
  providers: [ ProductsService ]
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(protected productsService: ProductsService) {
    this.productsService.getProducts()
      .subscribe(result => {
          this.products = result;
      });
  }

  ngOnInit() {
  }

}
