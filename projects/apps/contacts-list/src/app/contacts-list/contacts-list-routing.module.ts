import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './/contacts-list/contacts-list.component';

const routes: Routes = [
  {
    path: 'contacts-list',
    component: ContactsListComponent,
  },
  {
    path: '',
    redirectTo: 'contacts-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ContactsListRoutingModule {}
