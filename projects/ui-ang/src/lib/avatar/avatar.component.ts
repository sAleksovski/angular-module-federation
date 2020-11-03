import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'nd-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'sm';
  @Input() avatarUrl = '';
  @Input() name = '';

  @HostBinding('style.width.rem')
  @HostBinding('style.height.rem')
  get width(): number {
    return {
      sm: 3,
      md: 5,
      lg: 10,
    }[this.size];
  }
}
