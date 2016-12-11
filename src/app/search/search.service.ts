import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SearchService {

  constructor() { }

  localSearch(array: any[], term: Object) {
    return Observable.of(array.filter((item: any) => {
      for (let key of Object.keys(term)) {
        if (item.hasOwnProperty(key)) {
          if (item[key].toLowerCase().includes(term[key].toLowerCase())) {
            return true;
          }
        }
      }
      return false;
    }));
  }

}
