import { Component, AfterContentInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ SearchService ]
})
export class SearchComponent implements AfterContentInit {

  searchValue = new FormControl();

  @Input() placeholder: string;
  @Input() debounceTime: number = 0;

  @Output() searchReset: EventEmitter<any> = new EventEmitter<any>();
  @Output() searchValueChanged: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('string_input') string_input;

  constructor () { }

  ngAfterContentInit() {
    this.searchValue
        .valueChanges
        .debounceTime(this.debounceTime)
        .distinctUntilChanged()
        .subscribe(value => this.searchValueChanged.emit(value));
  }

  resetInput() {
      this.searchReset.emit(null);
      this.string_input.nativeElement.value = '';
  }
}
