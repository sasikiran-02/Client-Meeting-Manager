import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard ',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  @Output() close = new EventEmitter<void>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enterdDate = signal('');
  enteredNumber = signal('');
  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.close.emit();
  }
}
