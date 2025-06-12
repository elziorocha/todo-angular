import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { NoListComponent } from "../../components/no-list/no-list.component";
import { HomeListsComponent } from "../../components/home-lists/home-lists.component";
import { AddListComponent } from "../../components/add-list/add-list.component";
import { IlistItems } from '../../interfaces/listItems.interface';
import { DeleteItemsComponent } from "../../components/delete-items/delete-items.component";

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    LucideAngularModule,
    NoListComponent,
    HomeListsComponent,
    AddListComponent,
    DeleteItemsComponent
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  public showInput: WritableSignal<boolean> = signal(false);

  #setListItems = signal<IlistItems[]>(this.#parseItem());
  public getListItems = this.#setListItems.asReadonly();

  #parseItem() {
    return JSON.parse(localStorage.getItem('@my-list') || '[]');
  }

  public getInputAddItems(value: IlistItems) {
    const updatedList = [...this.#setListItems(), value];
    localStorage.setItem('@my-list', JSON.stringify(updatedList));
    this.#setListItems.set(updatedList);
  }

  public updateItemCheck(newItem: { id: string; checked: boolean }) {
    const updatedList = this.#setListItems().map(item =>
      item.id === newItem.id ? { ...item, checked: newItem.checked } : item
    );
    localStorage.setItem('@my-list', JSON.stringify(updatedList));
    this.#setListItems.set(updatedList);
  }

  public updateItemText(newItem: { id: string; value: string }) {
    const updatedList = this.#setListItems().map(item =>
      item.id === newItem.id ? { ...item, value: newItem.value } : item
    );
    localStorage.setItem('@my-list', JSON.stringify(updatedList));
    this.#setListItems.set(updatedList);
  }

  public deleteItem(id: string) {
    const updatedList = this.#setListItems().filter(item => item.id !== id);
    localStorage.setItem('@my-list', JSON.stringify(updatedList));
    this.#setListItems.set(updatedList);
  }
}
