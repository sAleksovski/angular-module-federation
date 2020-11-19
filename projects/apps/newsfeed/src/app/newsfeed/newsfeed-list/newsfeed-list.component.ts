import { Component } from '@angular/core';
import { NewsfeedService } from '../newsfeed.service';

@Component({
  selector: 'nd-newsfeed-list',
  templateUrl: './newsfeed-list.component.html',
  styleUrls: ['./newsfeed-list.component.css'],
})
export class NewsfeedListComponent {
  constructor(private readonly newsfeedService: NewsfeedService) {}

  newsfeedItems = this.newsfeedService.newsfeedItems;
}
