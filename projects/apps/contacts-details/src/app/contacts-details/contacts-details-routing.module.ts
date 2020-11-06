import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsDetailsRoutingModule {}
