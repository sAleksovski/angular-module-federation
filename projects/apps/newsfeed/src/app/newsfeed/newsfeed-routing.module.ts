import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsfeedDetailsComponent } from './newsfeed-details/newsfeed-details.component';
import { NewsfeedListComponent } from './newsfeed-list/newsfeed-list.component';

const routes: Routes = [
  {
    path: '',
    component: NewsfeedListComponent,
  },
  {
    path: ':id',
    component: NewsfeedDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsfeedRoutingModule {}
