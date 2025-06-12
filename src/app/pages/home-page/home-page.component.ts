import { CommonModule } from '@angular/common';
import { Component, Input, signal, WritableSignal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { NoListComponent } from "../../components/no-list/no-list.component";
import { AddListComponent } from '../../components/add-list/add-list.component';
import { IlistItems } from '../../interfaces/listItems.interface';
import { AddItemComponent } from '../../components/add-item/add-item.component';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, LucideAngularModule, NoListComponent, AddListComponent, AddItemComponent],
  templateUrl: './home-page.component.html',
})

export class HomePageComponent {
  public showInput: WritableSignal<boolean> = signal(false);

  #setListItems = signal<IlistItems[]>(this.#parseItem());
  public getListItems = this.#setListItems.asReadonly();

  #parseItem() {
    return JSON.parse(localStorage.getItem('@my-list') || '[]')
  }

  @Input({ required: true }) public inListItems: Array<IlistItems> = [];

  public listItemsStage(value: 'pending' | 'completed') {
    return this.getListItems().filter((res: IlistItems) => {
      if (value === 'pending') {
        return !res.checked
      } else if (value === 'completed') {
        return res.checked
      }

      return res;
    })
  }

  public updateItemCheck(newItem: { id: string, checked: boolean }) {
    this.#setListItems.update((oldValue: IlistItems[]) => {
      oldValue.filter(res => {
        if (res.id === newItem.id) {
          res.checked = newItem.checked;
          return res;
        }

        return res;
      })
      return oldValue;
    })

    return localStorage.setItem('@my-list', JSON.stringify(this.#setListItems()))
  }

  public getInputAddItems(value: IlistItems) {
    localStorage.setItem(
      '@my-list', JSON.stringify([...this.#setListItems(), value])
    );

    return this.#setListItems.set(this.#parseItem());
  }

  public deleteItems() {
    localStorage.removeItem('@my-list');
    return this.#setListItems.set(this.#parseItem());
  }
}
