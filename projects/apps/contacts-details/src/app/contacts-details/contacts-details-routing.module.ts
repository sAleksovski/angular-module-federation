import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';

const routes: Routes = [
  {
    path: 'contacts-list/:id',
    component: ContactsDetailsComponent,
  },
  {
    path: '',
    redirectTo: 'contacts-list/1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ContactsDetailsRoutingModule {}
