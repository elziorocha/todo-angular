import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { NoListComponent } from "../../components/no-list/no-list.component";
import { AddListComponent } from '../../components/add-list/add-list.component';
import { IlistItems } from '../../interfaces/listItems.interface';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, LucideAngularModule, NoListComponent, AddListComponent],
  templateUrl: './home-page.component.html',
})

export class HomePageComponent {
  public showInput: WritableSignal<boolean> = signal(false);

  public getInputAddItems(value: IlistItems) {
    console.log(value)
  }
}
