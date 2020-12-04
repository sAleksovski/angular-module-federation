import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'newsfeed',
    loadChildren: () => import('Newsfeed/NewsfeedModule').then((m) => m.NewsfeedModule),
  },
  {
    path: 'contacts-list',
    loadChildren: () => import('ContactsList/ContactsListModule').then((m) => m.ContactsListModule),
    pathMatch: 'full',
  },
  {
    path: 'contacts-list/:id',
    loadChildren: () => import('ContactsDetails/ContactsDetailsModule').then((m) => m.ContactsDetailsModule),
  },
  {
    path: '',
    redirectTo: 'newsfeed',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
