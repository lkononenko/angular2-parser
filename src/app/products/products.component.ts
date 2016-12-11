import { Component, OnInit } from '@angular/core';

import { ProductsService } from './products.service';
import { SearchService } from '../search/search.service';
import { Product } from './product.model';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ ProductsService, SearchService ]
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(protected productsService: ProductsService,
              private searchService: SearchService)
  {
    this.productsService.getProducts()
      .subscribe(result => {
          this.products = result;
          this.filteredProducts = this.products;
      });
  }

  ngOnInit() {
  }

  private filterProducts(searchValue) {
    this.searchService.localSearch(this.products, { title: searchValue })
      .subscribe(result => this.filteredProducts = result);
  }

  private resetSearch() {
    this.filteredProducts = this.products;
  }
}
