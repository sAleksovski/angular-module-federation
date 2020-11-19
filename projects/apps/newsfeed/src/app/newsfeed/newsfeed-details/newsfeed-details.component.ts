import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { NewsfeedService } from '../newsfeed.service';

@Component({
  selector: 'nd-newsfeed-details',
  templateUrl: './newsfeed-details.component.html',
  styleUrls: ['./newsfeed-details.component.css'],
})
export class NewsfeedDetailsComponent {
  constructor(private readonly newsfeedService: NewsfeedService, private readonly router: ActivatedRoute) {}

  newsfeedItem$ = this.router.params.pipe(map((params: Params) => this.newsfeedService.getNewsfeedItem(params.id)));
}
