import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarModule } from '@nd/ui-ang';
import { ContactsListItemComponent } from './contacts-list-item/contacts-list-item.component';
import { ContactsListRoutingModule } from './contacts-list-routing.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

@NgModule({
  imports: [CommonModule, ContactsListRoutingModule, AvatarModule],
  declarations: [ContactsListComponent, ContactsListItemComponent],
  exports: [ContactsListRoutingModule],
})
export class ContactsListModule {}
