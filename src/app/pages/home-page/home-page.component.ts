import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { NoListComponent } from "../../components/no-list/no-list.component";
import { AddListComponent } from '../../components/add-list/add-list.component';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, LucideAngularModule, NoListComponent, AddListComponent],
  templateUrl: './home-page.component.html',
})

export class HomePageComponent {
  public addItem: WritableSignal<boolean> = signal(false);
}
