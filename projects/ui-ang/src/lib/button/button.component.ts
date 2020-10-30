import { Component, Input } from '@angular/core';

@Component({
  selector: 'nd-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' =
    'primary';
}
