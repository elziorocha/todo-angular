import { Component, Input, signal } from '@angular/core';
import { IlistItems } from '../../interfaces/listItems.interface';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-home-lists',
  imports: [CommonModule, AddItemComponent],
  templateUrl: './home-lists.component.html',
})

export class HomeListsComponent {
  @Input({ required: true }) public inListItems: Array<IlistItems> = [];

  public listItemsStage(value: 'pending' | 'completed') {
    return this.inListItems.filter((res: IlistItems) => {
      return value === 'pending' ? !res.checked : res.checked;
    });
  }

  public updateItemCheck(newItem: { id: string, checked: boolean }) {
    const index = this.inListItems.findIndex(item => item.id === newItem.id);
    if (index !== -1) {
      this.inListItems[index].checked = newItem.checked;
      localStorage.setItem('@my-list', JSON.stringify(this.inListItems));
    }
  }

  public deleteItems() {
    localStorage.removeItem('@my-list');
    this.inListItems = [];
  }
}

