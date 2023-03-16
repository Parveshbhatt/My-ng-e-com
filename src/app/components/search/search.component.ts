import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchValue: string = '';

  constructor(){}

  @Output()
  searchValueChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchValueChange(){
    this.searchValueChanged.emit(this.searchValue);
  }
}
