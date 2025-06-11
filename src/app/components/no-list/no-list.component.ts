import { Component, Input, WritableSignal } from '@angular/core';
import { ListCollapse, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-no-list',
  imports: [LucideAngularModule],
  templateUrl: './no-list.component.html',
})

export class NoListComponent {
  readonly listCollapseIcon = ListCollapse;

@Input({ required: true }) showInput!: WritableSignal<boolean>;

}
