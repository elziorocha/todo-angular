import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IlistItems } from '../../interfaces/listItems.interface';

@Component({
  selector: 'app-delete-items',
  imports: [],
  templateUrl: './delete-items.component.html',
})

export class DeleteItemsComponent {

  @Input({ required: true }) public inListItems: Array<IlistItems> = [];

  public deleteItems() {
    localStorage.removeItem('@my-list');
    this.inListItems = [];
  }
}
