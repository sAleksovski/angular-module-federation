import { Component, Input } from '@angular/core';

@Component({
  selector: 'nd-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent {
  @Input() avatarUrl = '';
  @Input() name = '';
}
