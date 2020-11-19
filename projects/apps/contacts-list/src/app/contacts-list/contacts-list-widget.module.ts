import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@nd/core';
import { AvatarModule } from '@nd/ui-ang';
import { ContactsListItemComponent } from './contacts-list-item/contacts-list-item.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

@NgModule({
  declarations: [ContactsListComponent, ContactsListItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    AvatarModule,
    CoreModule.withWidgets({
      ContactsListComponent,
    }),
  ],
  exports: [ContactsListComponent],
})
export class ContactsListWidgetModule {}
