import { Component, Input } from '@angular/core';
import { NewsfeedItem } from '../newsfeed.service';

@Component({
  selector: 'nd-newsfeed-item',
  templateUrl: './newsfeed-item.component.html',
  styleUrls: ['./newsfeed-item.component.css'],
})
export class NewsfeedItemComponent {
  @Input() newsfeedItem: NewsfeedItem;
}
