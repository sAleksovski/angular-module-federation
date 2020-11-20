import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarModule, ButtonModule } from '@nd/ui-ang';
import { NewsfeedRoutingModule } from './newsfeed-routing.module';
import { NewsfeedItemComponent } from './newsfeed-item/newsfeed-item.component';
import { NewsfeedListComponent } from './newsfeed-list/newsfeed-list.component';
import { NewsfeedDetailsComponent } from './newsfeed-details/newsfeed-details.component';

@NgModule({
  declarations: [NewsfeedListComponent, NewsfeedItemComponent, NewsfeedDetailsComponent],
  imports: [CommonModule, NewsfeedRoutingModule, ButtonModule, AvatarModule],
})
export class NewsfeedModule {}
