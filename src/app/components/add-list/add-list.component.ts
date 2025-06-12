import { ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { BadgePlus, LucideAngularModule, Plus } from 'lucide-angular';
import { IlistItems } from '../../interfaces/listItems.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-list',
  imports: [LucideAngularModule],
  templateUrl: './add-list.component.html',

})
export class AddListComponent {
  readonly plusIcon = Plus;
  readonly badgePlusIcon = BadgePlus;

  #cdr = inject(ChangeDetectorRef);
  @ViewChild('inputText') public inputText!: ElementRef;

  @Output() public outListItems = new EventEmitter<IlistItems>();

  public addItem(value: string) {
    if (value) {
      this.#cdr.detectChanges()
      this.inputText.nativeElement.value = '';

      const dataAtual = new Date().getTime();
      const id = `ID ${dataAtual}`
      this.outListItems.emit({
        id,
        checked: false,
        value,
      });

      return this.inputText.nativeElement.focus();
    }
  }
}
