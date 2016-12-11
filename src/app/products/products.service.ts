import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor(private http: Http) { }

  getProducts() {
    return this.http.get(window.location.href + '/assets/products.json')
      .map(responseData => {
        return responseData.json().worksById;
      })
      .map(data => {
        this.parseProducts(data);
        return this.products;
      });
  }

  private parseProducts(data: any[]) {
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          let product = data[key];
          product.id = key;
          this.products.push(new Product(product));
        }
      }
  }
}
