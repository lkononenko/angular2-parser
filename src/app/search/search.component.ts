import { Component } from '@angular/core';

import { SearchService } from './search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  providers: [ SearchService ]
})
export class SearchComponent {

  constructor() { }

}
