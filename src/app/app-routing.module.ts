import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contacts-list',
    loadChildren: () => import('ContactsList/ContactsListModule').then((m) => m.ContactsListModule),
  },
  {
    path: 'contacts-list/:id',
    loadChildren: () => import('ContactsDetails/ContactsDetailsModule').then((m) => m.ContactsDetailsModule),
  },
  {
    path: '',
    redirectTo: 'contacts-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
