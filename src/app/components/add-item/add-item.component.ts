import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IlistItems } from '../../interfaces/listItems.interface';
import { CommonModule } from '@angular/common';
import { Check, LucideAngularModule, X } from 'lucide-angular';

@Component({
  selector: 'app-add-item',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './add-item.component.html',
})

export class AddItemComponent {
  readonly xIcon = X;
  readonly checkedIcon = Check;

  @Input({ required: true }) public inListItems: Array<IlistItems> = [];

  @Output() public outputUpdateItem = new EventEmitter<{ id: string; checked: boolean; }>();

  public updateItemCheck(id: string, checked: boolean) {
    return this.outputUpdateItem.emit({ id, checked });
  }
}
