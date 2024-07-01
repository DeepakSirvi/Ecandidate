import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-text-field',
  standalone: true,
  imports: [],
  templateUrl: './input-text-field.component.html',
  styleUrl: './input-text-field.component.scss'
})
export class InputTextFieldComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() className: string = '';
}
