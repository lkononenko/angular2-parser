import { Component, OnInit } from '@angular/core';

import { ProductsService } from './products.service';
import { SearchService } from '../search/search.service';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ ProductsService, SearchService ]
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(protected productsService: ProductsService,
              private searchService: SearchService) {
    this.productsService.getProducts()
      .subscribe(result => {
          this.products = result;
          this.filteredProducts = this.products;
      });
  }

  ngOnInit() {
  }

  filterProducts(searchValue) {
    this.searchService.localSearch(this.products, { title: searchValue })
      .subscribe(result => this.filteredProducts = result);
  }

  resetSearch() {
    this.filteredProducts = this.products;
  }
}
