import { Component, Input } from '@angular/core';
import { IlistItems } from '../../interfaces/listItems.interface';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, X } from 'lucide-angular';

@Component({
  selector: 'app-add-item',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './add-item.component.html',
})

export class AddItemComponent {
  readonly xIcon = X;

  @Input({ required: true }) public inListItems: Array<IlistItems> = [];

}
