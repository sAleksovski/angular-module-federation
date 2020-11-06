import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarModule } from '@nd/ui-ang';
import { ContactsDetailsRoutingModule } from './contacts-details-routing.module';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';

@NgModule({
  declarations: [ContactsDetailsComponent],
  imports: [CommonModule, AvatarModule],
  exports: [ContactsDetailsRoutingModule],
})
export class ContactsDetailsModule {}
