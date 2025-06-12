import { CommonModule } from '@angular/common';
import { Component, Input, signal, WritableSignal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { NoListComponent } from "../../components/no-list/no-list.component";
import { HomeListsComponent } from "../../components/home-lists/home-lists.component";
import { AddListComponent } from "../../components/add-list/add-list.component";
import { IlistItems } from '../../interfaces/listItems.interface';
@Component({
  selector: 'app-home-page',
  imports: [CommonModule, LucideAngularModule, NoListComponent, HomeListsComponent, AddListComponent],
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

  public getInputAddItems(value: IlistItems) {
    localStorage.setItem(
      '@my-list', JSON.stringify([...this.#setListItems(), value])
    );

    return this.#setListItems.set(this.#parseItem());
  }

}
