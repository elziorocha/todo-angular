import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IlistItems } from '../../interfaces/listItems.interface';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-home-lists',
  imports: [CommonModule, AddItemComponent],
  templateUrl: './home-lists.component.html',
})
export class HomeListsComponent {
  @Input({ required: true }) public inListItems: IlistItems[] = [];

  @Output() updateCheck = new EventEmitter<{ id: string; checked: boolean }>();
  @Output() updateText = new EventEmitter<{ id: string; value: string }>();
  @Output() deleteItem = new EventEmitter<string>();

  public listItemsStage(stage: 'pending' | 'completed'): IlistItems[] {
    return this.inListItems.filter(item =>
      stage === 'pending' ? !item.checked : item.checked
    );
  }

  public onUpdateCheck(newItem: { id: string; checked: boolean }) {
    this.updateCheck.emit(newItem);
  }

  public onUpdateText(newItem: { id: string; value: string }) {
    this.updateText.emit(newItem);
  }

  public onDeleteItem(id: string) {
    this.deleteItem.emit(id);
  }
}
