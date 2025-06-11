import { Component } from '@angular/core';
import { LucideAngularModule, Plus } from 'lucide-angular';

@Component({
  selector: 'app-add-list',
  imports: [LucideAngularModule],
  templateUrl: './add-list.component.html',

})
export class AddListComponent {
  readonly plusIcon = Plus;

}
